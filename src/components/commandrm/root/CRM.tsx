import type {
  CoreAdminProps,
  AuthProvider,
  DashboardComponent,
  LayoutComponent,
} from "ra-core";
import { CustomRoutes, localStorageStore, Resource } from "ra-core";
import { lazy, Suspense, useEffect, useMemo } from "react";
import { Route } from "react-router";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { Admin } from "@/components/admin/admin";

import companies from "../companies";
import contacts from "../contacts";
import deals from "../deals";
import {
  getAuthProvider as defaultAuthProviderBuilder,
  getDataProvider as defaultDataProviderBuilder,
} from "../providers/supabase";
import sales from "../sales";
import {
  CONFIGURATION_STORE_KEY,
  type ConfigurationContextValue,
} from "./ConfigurationContext";
import type { CrmDataProvider } from "../providers/types";
import {
  defaultCompanySectors,
  defaultCurrency,
  defaultDarkModeLogo,
  defaultDealCategories,
  defaultDealPipelineStatuses,
  defaultDealStages,
  defaultLightModeLogo,
  defaultNoteStatuses,
  defaultTaskTypes,
  defaultTitle,
} from "./defaultConfiguration";
import { i18nProvider as defaulti18nProvider } from "../providers/commons/i18nProvider";
import { StartPage } from "../login/StartPage.tsx";
import { useIsMobile } from "@/hooks/use-mobile.ts";

// Lazy load non-critical pages
const ForgotPasswordPage = lazy(() => import("@/components/supabase/forgot-password-page").then(m => ({ default: m.ForgotPasswordPage })));
const SetPasswordPage = lazy(() => import("@/components/supabase/set-password-page").then(m => ({ default: m.SetPasswordPage })));
const OAuthConsentPage = lazy(() => import("@/components/supabase/oauth-consent-page").then(m => ({ default: m.OAuthConsentPage })));
const Dashboard = lazy(() => import("../dashboard/Dashboard").then(m => ({ default: m.Dashboard })));
const MobileDashboard = lazy(() => import("../dashboard/MobileDashboard").then(m => ({ default: m.MobileDashboard })));
const Layout = lazy(() => import("../layout/Layout").then(m => ({ default: m.Layout })));
const MobileLayout = lazy(() => import("../layout/MobileLayout").then(m => ({ default: m.MobileLayout })));
const SignupPage = lazy(() => import("../login/SignupPage").then(m => ({ default: m.SignupPage })));
const ConfirmationRequired = lazy(() => import("../login/ConfirmationRequired").then(m => ({ default: m.ConfirmationRequired })));
const ImportPage = lazy(() => import("../misc/ImportPage").then(m => ({ default: m.ImportPage })));
const ChangelogPage = lazy(() => import("../misc/ChangelogPage").then(m => ({ default: m.ChangelogPage })));
const SettingsPageMobile = lazy(() => import("../settings/SettingsPageMobile").then(m => ({ default: m.SettingsPageMobile })));
const ProfilePage = lazy(() => import("../settings/ProfilePage").then(m => ({ default: m.ProfilePage })));
const SettingsPage = lazy(() => import("../settings/SettingsPage").then(m => ({ default: m.SettingsPage })));
const MobileTasksList = lazy(() => import("../tasks/MobileTasksList").then(m => ({ default: m.MobileTasksList })));
const ContactListMobile = lazy(() => import("../contacts/ContactList").then(m => ({ default: m.ContactListMobile })));
const ContactShow = lazy(() => import("../contacts/ContactShow").then(m => ({ default: m.ContactShow })));
const CompanyShow = lazy(() => import("../companies/CompanyShow").then(m => ({ default: m.CompanyShow })));
const NoteShowPage = lazy(() => import("../notes/NoteShowPage").then(m => ({ default: m.NoteShowPage })));

// Route paths (defined separately for lazy loaded components)
const ROUTE_PATHS = {
  signup: "/signup",
  confirmationRequired: "/confirmation-required",
  setPassword: "/set-password",
  forgotPassword: "/forgot-password",
  oauthConsent: "/oauth/consent",
  profile: "/profile",
  settings: "/settings",
  import: "/import",
  changelog: "/changelog",
  settingsMobile: "/settings",
  noteShow: ":id/notes/:noteId",
} as const;

const defaultStore = localStorageStore(undefined, "CRM");

export type CRMProps = {
  dataProvider?: CrmDataProvider;
  authProvider?: AuthProvider;
  i18nProvider?: CoreAdminProps["i18nProvider"];
  disableTelemetry?: boolean;
  store?: CoreAdminProps["store"];
  dashboard?: DashboardComponent;
  layout?: LayoutComponent;
} & Partial<ConfigurationContextValue>;

/**
 * CRM Component
 *
 * This component sets up and renders the main CRM application using `ra-core`. It provides
 * default configurations and themes but allows for customization through props. The component
 * seeds the store with any custom prop values for backwards compatibility.
 *
 * @param {LabeledValue[]} companySectors - The list of company sectors used in the application.
 * @param {string} currency - The ISO 4217 currency code used to format monetary values (e.g. "USD", "EUR", "GBP").
 * @param {RaThemeOptions} darkTheme - The theme to use when the application is in dark mode.
 * @param {LabeledValue[]} dealCategories - The categories of deals used in the application.
 * @param {string[]} dealPipelineStatuses - The statuses of deals in the pipeline used in the application.
 * @param {DealStage[]} dealStages - The stages of deals used in the application.
 * @param {RaThemeOptions} lightTheme - The theme to use when the application is in light mode.
 * @param {string} darkModeLogo - Logo shown in dark mode and on the auth pages. Must be an imported asset, an absolute URL, or a data URI — never a route-relative path like "./logos/x.svg", which breaks on nested routes such as /oauth/consent (issue #291).
 * @param {string} lightModeLogo - Logo shown in light mode. Same rule as darkModeLogo: imported asset, absolute URL, or data URI only.
 * @param {NoteStatus[]} noteStatuses - The statuses of notes used in the application.
 * @param {LabeledValue[]} taskTypes - The types of tasks used in the application.
 * @param {string} title - The title of the CRM application.
 *
 * @returns {JSX.Element} The rendered CRM application.
 *
 * @example
 * // Basic usage of the CRM component
 * import { CRM } from '@/components/commandrm/dashboard/CRM';
 *
 * const App = () => (
 *     <CRM
 *         darkModeLogo="https://example.com/logo-dark.svg"
 *         lightModeLogo="https://example.com/logo-light.svg"
 *         title="My Custom CRM"
 *         lightTheme={{
 *             ...defaultTheme,
 *             palette: {
 *                 primary: { main: '#0000ff' },
 *             },
 *         }}
 *     />
 * );
 *
 * export default App;
 */
export const CRM = ({
  companySectors = defaultCompanySectors,
  currency = defaultCurrency,
  dealCategories = defaultDealCategories,
  dealPipelineStatuses = defaultDealPipelineStatuses,
  dealStages = defaultDealStages,
  darkModeLogo = defaultDarkModeLogo,
  lightModeLogo = defaultLightModeLogo,
  noteStatuses = defaultNoteStatuses,
  taskTypes = defaultTaskTypes,
  title = defaultTitle,
  dataProvider = defaultDataProviderBuilder(),
  authProvider = defaultAuthProviderBuilder(),
  i18nProvider = defaulti18nProvider,
  store = defaultStore,
  disableTelemetry,
  ...rest
}: CRMProps) => {
  useEffect(() => {
    if (
      disableTelemetry ||
      process.env.NODE_ENV !== "production" ||
      typeof window === "undefined" ||
      typeof window.location === "undefined" ||
      typeof Image === "undefined"
    ) {
      return;
    }
    const img = new Image();
    img.src = `https://atomic-crm-telemetry.marmelab.com/atomic-crm-telemetry?domain=${window.location.hostname}`;
  }, [disableTelemetry]);

  // Seed the store with CRM prop values if not already stored
  // (backwards compatibility for prop-based config)
  useEffect(() => {
    if (!store.getItem(CONFIGURATION_STORE_KEY)) {
      store.setItem(CONFIGURATION_STORE_KEY, {
        companySectors,
        currency,
        dealCategories,
        dealPipelineStatuses,
        dealStages,
        noteStatuses,
        taskTypes,
        title,
        darkModeLogo,
        lightModeLogo,
      } satisfies ConfigurationContextValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store]);

  const isMobile = useIsMobile();

  // on login, pre-fetch the configuration to avoid a flickering
  // when accessing the app for the first time
  const wrappedAuthProvider = useMemo<AuthProvider>(
    () => ({
      ...authProvider,
      login: async (params: any) => {
        const result = await authProvider.login(params);
        try {
          const config = await dataProvider.getConfiguration();
          if (Object.keys(config).length > 0) {
            store.setItem(CONFIGURATION_STORE_KEY, config);
          }
        } catch {
          // Non-critical: config will load via useConfigurationLoader
        }
        return result;
      },
      handleCallback: async (params: any) => {
        if (!authProvider.handleCallback) {
          throw new Error(
            "handleCallback is not implemented in the authProvider",
          );
        }
        const result = await authProvider.handleCallback(params);
        try {
          const config = await dataProvider.getConfiguration();
          if (Object.keys(config).length > 0) {
            store.setItem(CONFIGURATION_STORE_KEY, config);
          }
        } catch {
          // Non-critical: config will load via useConfigurationLoader
        }
        return result;
      },
      logout: async (params: any) => {
        try {
          store.removeItem(CONFIGURATION_STORE_KEY);
        } catch {
          // Ignore
        }
        return authProvider.logout(params);
      },
    }),
    [authProvider, dataProvider, store],
  );

  const ResponsiveAdmin = isMobile ? MobileAdmin : DesktopAdmin;

  return (
    <ResponsiveAdmin
      dataProvider={dataProvider}
      authProvider={wrappedAuthProvider}
      i18nProvider={i18nProvider}
      store={store}
      loginPage={StartPage}
      requireAuth
      disableTelemetry
      {...rest}
    />
  );
};

const DesktopAdmin = (
  props: CoreAdminProps & {
    dashboard?: DashboardComponent;
    layout?: LayoutComponent;
  },
) => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Admin
        layout={props.layout ?? Layout}
        dashboard={props.dashboard ?? Dashboard}
        {...props}
      >
        <CustomRoutes noLayout>
          <Route path={ROUTE_PATHS.signup} element={<SignupPage />} />
          <Route
            path={ROUTE_PATHS.confirmationRequired}
            element={<ConfirmationRequired />}
          />
          <Route path={ROUTE_PATHS.setPassword} element={<SetPasswordPage />} />
          <Route
            path={ROUTE_PATHS.forgotPassword}
            element={<ForgotPasswordPage />}
          />
          <Route path={ROUTE_PATHS.oauthConsent} element={<OAuthConsentPage />} />
        </CustomRoutes>

        <CustomRoutes>
          <Route path={ROUTE_PATHS.profile} element={<ProfilePage />} />
          <Route path={ROUTE_PATHS.settings} element={<SettingsPage />} />
          <Route path={ROUTE_PATHS.import} element={<ImportPage />} />
          <Route path={ROUTE_PATHS.changelog} element={<ChangelogPage />} />
        </CustomRoutes>
        <Resource name="deals" {...deals} />
        <Resource name="contacts" {...contacts} />
        <Resource name="companies" {...companies} />
        <Resource name="contact_notes" />
        <Resource name="deal_notes" />
        <Resource name="tasks" />
        <Resource name="sales" {...sales} />
        <Resource name="tags" />
      </Admin>
    </Suspense>
  );
};

const MobileAdmin = (
  props: CoreAdminProps & {
    dashboard?: DashboardComponent;
    layout?: LayoutComponent;
  },
) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24, // 24 hours
        networkMode: "offlineFirst",
      },
      mutations: {
        networkMode: "offlineFirst",
      },
    },
  });
  const asyncStoragePersister = createAsyncStoragePersister({
    storage: localStorage,
  });

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: asyncStoragePersister }}
      >
        <Admin
          queryClient={queryClient}
          layout={props.layout ?? MobileLayout}
          dashboard={props.dashboard ?? MobileDashboard}
          {...props}
        >
          <CustomRoutes noLayout>
            <Route path={ROUTE_PATHS.signup} element={<SignupPage />} />
            <Route
              path={ROUTE_PATHS.confirmationRequired}
              element={<ConfirmationRequired />}
            />
            <Route path={ROUTE_PATHS.setPassword} element={<SetPasswordPage />} />
            <Route
              path={ROUTE_PATHS.forgotPassword}
              element={<ForgotPasswordPage />}
            />
            <Route path={ROUTE_PATHS.oauthConsent} element={<OAuthConsentPage />} />
          </CustomRoutes>
          <CustomRoutes>
            <Route
              path={ROUTE_PATHS.settingsMobile}
              element={<SettingsPageMobile />}
            />
            <Route path={ROUTE_PATHS.changelog} element={<ChangelogPage />} />
          </CustomRoutes>
          <Resource
            name="contacts"
            list={ContactListMobile}
            show={ContactShow}
            recordRepresentation={contacts.recordRepresentation}
          >
            <Route path={ROUTE_PATHS.noteShow} element={<NoteShowPage />} />
          </Resource>
          <Resource name="companies" show={CompanyShow} />
          <Resource name="tasks" list={MobileTasksList} />
        </Admin>
      </PersistQueryClientProvider>
    </Suspense>
  );
};
