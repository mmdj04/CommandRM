// Run with `node .claude/skills/delete-initial-resource/delete-initial-resource.ts`
// (Node >= 22.18 strips TypeScript types natively; on older Node use `npx -y tsx <...>`).
// `process` is declared locally because this standalone script lives outside the
// project's tsconfig and so doesn't pick up the global @types/node.
declare const process: {
  cwd(): string;
  argv: string[];
  exit(code?: number): never;
};
import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";

// ================================ CONSTANTS ================================
const initialResource = [
  "contacts",
  "companies",
  "deals",
  "tags",
  "tasks",
] as const;
const dependentFiles: ResourceFiles = {
  companies: [
    "src/components/commandrm/types.ts",
    "src/components/commandrm/consts.ts",
    "src/components/commandrm/activity/ActivityLogCompanyCreated.tsx",
    "src/components/commandrm/activity/ActivityLog.tsx",
    "src/components/commandrm/activity/ActivityLogContext.tsx",
    "src/components/commandrm/activity/ActivityLogIterator.tsx",
    "src/components/commandrm/activity/ActivityLogContactCreated.tsx",
    "src/components/commandrm/activity/ActivityLogContactNoteCreated.tsx",
    "src/components/commandrm/activity/ActivityLogDealCreated.tsx",
    "src/components/commandrm/activity/ActivityLogDealNoteCreated.tsx",
    "src/components/commandrm/providers/commons/activity.ts",
    "src/components/commandrm/root/defaultConfiguration.ts",
    "src/components/commandrm/root/ConfigurationContext.tsx",
    "src/components/commandrm/settings/SettingsPage.tsx",
    "src/App.tsx",
    "src/components/commandrm/contacts/ContactInputs.tsx",
    "src/components/commandrm/contacts/ContactShow.tsx",
    "src/components/commandrm/contacts/ContactListContent.tsx",
    "src/components/commandrm/contacts/ContactList.tsx",
    "src/components/commandrm/contacts/contactModel.ts",
    "src/components/commandrm/contacts/ExportVCardButton.tsx",
    "src/components/commandrm/contacts/useContactImport.tsx",
    "src/components/commandrm/contacts/Avatar.tsx",
    "src/components/commandrm/contacts/contacts_export.csv",
    "src/components/commandrm/deals/DealInputs.tsx",
    "src/components/commandrm/deals/DealCard.tsx",
    "src/components/commandrm/deals/DealShow.tsx",
    "src/components/commandrm/deals/DealEdit.tsx",
    "src/components/commandrm/deals/DealList.tsx",
    "src/components/commandrm/deals/OnlyMineInput.tsx",
    "src/components/commandrm/deals/ContactList.tsx",
    "src/components/commandrm/notes/Note.tsx",
    "src/components/commandrm/dashboard/HotContacts.tsx",
    "src/components/commandrm/dashboard/DealsPipeline.tsx",
    "src/components/commandrm/misc/ContactOption.tsx",
    "src/components/commandrm/misc/useImportFromJson.ts",
    "src/components/commandrm/misc/ImportPage.tsx",
    "src/components/commandrm/misc/import-sample.json",
    "src/components/commandrm/providers/supabase/dataProvider.ts",
    "src/components/commandrm/providers/fakerest/dataProvider.ts",
    "src/components/commandrm/providers/commons/getCompanyAvatar.ts",
    "src/components/commandrm/providers/commons/mergeContacts.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/companies.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/index.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/types.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/contacts.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/deals.ts",
    "src/components/commandrm/providers/commons/englishCrmMessages.ts",
    "src/components/commandrm/providers/commons/frenchCrmMessages.ts",
    "src/components/commandrm/layout/Header.tsx",
    "src/components/commandrm/layout/MobileNavigation.tsx",
    "src/test/StoryWrapper.tsx",
    "test-data/contacts.csv",
  ],
  contacts: [
    "src/components/commandrm/types.ts",
    "src/components/commandrm/consts.ts",
    "src/components/commandrm/activity/ActivityLogContactCreated.tsx",
    "src/components/commandrm/activity/ActivityLogContactNoteCreated.tsx",
    "src/components/commandrm/activity/ActivityLogIterator.tsx",
    "src/components/commandrm/activity/ActivityLog.tsx",
    "src/components/commandrm/activity/ActivityLogContext.tsx",
    "src/components/commandrm/providers/commons/activity.ts",
    "src/components/commandrm/dashboard/HotContacts.tsx",
    "src/components/commandrm/dashboard/DashboardStepper.tsx",
    "src/components/commandrm/dashboard/Dashboard.tsx",
    "src/components/commandrm/dashboard/MobileDashboard.tsx",
    "src/components/commandrm/dashboard/LatestNotes.tsx",
    "src/components/commandrm/dashboard/TasksList.tsx",
    "src/components/commandrm/companies/CompanyShow.tsx",
    "src/components/commandrm/companies/CompanyCard.tsx",
    "src/components/commandrm/companies/CompanyList.tsx",
    "src/components/commandrm/notes/foreignKeyMapping.ts",
    "src/components/commandrm/notes/NoteInputs.tsx",
    "src/components/commandrm/notes/NoteInputs.test.tsx",
    "src/components/commandrm/notes/NoteCreate.tsx",
    "src/components/commandrm/notes/NotesIterator.tsx",
    "src/components/commandrm/notes/Note.tsx",
    "src/components/commandrm/notes/NoteAttachments.tsx",
    "src/components/commandrm/notes/index.ts",
    "src/components/commandrm/notes/NoteCreateSheet.tsx",
    "src/components/commandrm/notes/NoteEditSheet.tsx",
    "src/components/commandrm/notes/NoteShowPage.tsx",
    "src/components/commandrm/notes/NotesIteratorMobile.tsx",
    "src/components/commandrm/notes/NoteInputsMobile.tsx",
    "src/components/commandrm/tasks/AddTask.tsx",
    "src/components/commandrm/tasks/Task.tsx",
    "src/components/commandrm/tasks/TaskCreateSheet.tsx",
    "src/components/commandrm/tasks/TaskCreateSheet.stories.tsx",
    "src/components/commandrm/tasks/TaskCreateSheet.test.tsx",
    "src/components/commandrm/tasks/TaskEditSheet.tsx",
    "src/components/commandrm/tasks/TaskFormContent.tsx",
    "src/components/commandrm/tasks/TasksIterator.tsx",
    "src/components/commandrm/tasks/TasksListFilter.tsx",
    "src/components/commandrm/tasks/TasksListFilter.test.tsx",
    "src/components/commandrm/tasks/TasksListByDueDate.tsx",
    "src/components/commandrm/deals/DealInputs.tsx",
    "src/components/commandrm/deals/DealShow.tsx",
    "src/components/commandrm/deals/ContactList.tsx",
    "src/components/commandrm/deals/DealEmpty.tsx",
    "src/components/commandrm/misc/ContactOption.tsx",
    "src/components/commandrm/misc/useImportFromJson.ts",
    "src/components/commandrm/misc/ImportPage.tsx",
    "src/components/commandrm/misc/import-sample.json",
    "src/components/commandrm/providers/commons/mergeContacts.ts",
    "src/components/commandrm/providers/commons/getContactAvatar.ts",
    "src/components/commandrm/providers/fakerest/dataProvider.ts",
    "src/components/commandrm/providers/supabase/dataProvider.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/contacts.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/contactNotes.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/finalize.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/index.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/types.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/deals.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/tasks.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/companies.ts",
    "src/components/commandrm/providers/commons/englishCrmMessages.ts",
    "src/components/commandrm/providers/commons/frenchCrmMessages.ts",
    "src/components/commandrm/layout/Header.tsx",
    "src/components/commandrm/layout/MobileNavigation.tsx",
    "src/components/commandrm/login/SignupPage.tsx",
    "src/test/StoryWrapper.tsx",
  ],
  deals: [
    "src/components/commandrm/types.ts",
    "src/components/commandrm/consts.ts",
    "src/components/commandrm/dashboard/DealsChart.tsx",
    "src/components/commandrm/dashboard/DealsPipeline.tsx",
    "src/components/commandrm/activity/ActivityLogDealCreated.tsx",
    "src/components/commandrm/activity/ActivityLogDealNoteCreated.tsx",
    "src/components/commandrm/providers/fakerest/dataGenerator/deals.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/dealNotes.ts",
    "src/components/commandrm/notes/foreignKeyMapping.ts",
    "src/components/commandrm/notes/NoteInputs.tsx",
    "src/components/commandrm/notes/NoteCreate.tsx",
    "src/components/commandrm/notes/Note.tsx",
    "src/components/commandrm/notes/NoteAttachments.tsx",
    "src/components/commandrm/notes/NotesIterator.tsx",
    "src/components/commandrm/notes/NoteInputs.test.tsx",
    "src/components/commandrm/activity/ActivityLogIterator.tsx",
    "src/components/commandrm/activity/ActivityLog.tsx",
    "src/components/commandrm/activity/ActivityLogContext.tsx",
    "src/components/commandrm/dashboard/Dashboard.tsx",
    "src/components/commandrm/dashboard/LatestNotes.tsx",
    "src/components/commandrm/providers/commons/activity.ts",
    "src/components/commandrm/providers/commons/mergeContacts.ts",
    "src/components/commandrm/providers/fakerest/dataProvider.ts",
    "src/components/commandrm/providers/supabase/dataProvider.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/index.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/types.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/companies.ts",
    "src/components/commandrm/providers/commons/englishCrmMessages.ts",
    "src/components/commandrm/providers/commons/frenchCrmMessages.ts",
    "src/components/commandrm/providers/commons/i18nProvider.test.ts",
    "src/components/commandrm/root/defaultConfiguration.ts",
    "src/components/commandrm/root/ConfigurationContext.tsx",
    "src/components/commandrm/settings/SettingsPage.tsx",
    "src/components/commandrm/settings/SettingsPage.test.ts",
    "src/App.tsx",
    "src/components/commandrm/companies/CompanyShow.tsx",
    "src/components/commandrm/companies/CompanyCard.tsx",
    "src/components/commandrm/contacts/ContactMergeButton.tsx",
    "src/components/commandrm/layout/Header.tsx",
    "src/components/commandrm/layout/MobileNavigation.tsx",
    "src/test/StoryWrapper.tsx",
  ],
  tags: [
    "src/components/commandrm/types.ts",
    "src/components/commandrm/contacts/TagsList.tsx",
    "src/components/commandrm/contacts/TagsListEdit.tsx",
    "src/components/commandrm/contacts/BulkTagButton.tsx",
    "src/components/commandrm/contacts/ContactShow.tsx",
    "src/components/commandrm/contacts/ContactAside.tsx",
    "src/components/commandrm/contacts/ContactListContent.tsx",
    "src/components/commandrm/contacts/ContactList.tsx",
    "src/components/commandrm/contacts/ContactListFilter.tsx",
    "src/components/commandrm/contacts/contactModel.ts",
    "src/components/commandrm/contacts/useContactImport.tsx",
    "src/components/commandrm/companies/CompanyShow.tsx",
    "src/components/commandrm/misc/useImportFromJson.ts",
    "src/components/commandrm/providers/commons/mergeContacts.ts",
    "src/components/commandrm/providers/commons/englishCrmMessages.ts",
    "src/components/commandrm/providers/commons/frenchCrmMessages.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/contacts.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/index.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/types.ts",
    "src/components/commandrm/contacts/ContactList.stories.tsx",
    "src/components/commandrm/contacts/ContactList.test.tsx",
    "src/test/StoryWrapper.tsx",
    "src/components/commandrm/contacts/contacts_export.csv",
    "test-data/contacts.csv",
  ],
  tasks: [
    "src/components/commandrm/types.ts",
    "src/components/commandrm/dashboard/TasksList.tsx",
    "src/components/commandrm/contacts/ContactTasksList.tsx",
    "src/components/commandrm/providers/fakerest/dataGenerator/tasks.ts",
    "src/components/commandrm/dashboard/Dashboard.tsx",
    "src/components/commandrm/layout/MobileNavigation.tsx",
    "src/components/commandrm/contacts/ContactShow.tsx",
    "src/components/commandrm/contacts/ContactShow.test.tsx",
    "src/components/commandrm/contacts/ContactAside.tsx",
    "src/components/commandrm/contacts/ContactListContent.tsx",
    "src/components/commandrm/contacts/ContactListFilter.tsx",
    "src/components/commandrm/contacts/ContactMergeButton.tsx",
    "src/components/commandrm/companies/CompanyShow.tsx",
    "src/components/commandrm/misc/useImportFromJson.ts",
    "src/components/commandrm/misc/ImportPage.tsx",
    "src/components/commandrm/misc/import-sample.json",
    "src/components/commandrm/providers/commons/mergeContacts.ts",
    "src/components/commandrm/providers/fakerest/dataProvider.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/index.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/types.ts",
    "src/components/commandrm/providers/fakerest/dataGenerator/contacts.ts",
    "src/test/StoryWrapper.tsx",
    "src/components/commandrm/providers/commons/englishCrmMessages.ts",
    "src/components/commandrm/providers/commons/frenchCrmMessages.ts",
    "src/components/commandrm/root/defaultConfiguration.ts",
    "src/components/commandrm/root/ConfigurationContext.tsx",
    "src/components/commandrm/settings/SettingsPage.tsx",
    "src/App.tsx",
  ],
} as const;
const sharedDependentFiles: string[] = [
  "src/components/commandrm/root/CRM.tsx",
];
const resourceFilesPath = "src/components/commandrm" as const;

// ================================   TYPES   ================================
type InitialResource = (typeof initialResource)[number];
type DependentFile = string;
type ResourceFiles = Record<InitialResource, DependentFile[]>;

// ================================ FUNCTIONS ================================
const main = async () => {
  const resourcesToDelete = getResources();
  const basePath = process.cwd();
  for (const resource of resourcesToDelete) {
    await deleteIsolatedFiles(resource, basePath);
  }
  returnDependentFiles(resourcesToDelete);
};

// Get the resources to delete from the command line arguments (one or more),
// validate each one, and de-duplicate.
const getResources = (): InitialResource[] => {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error(
      "Please provide at least one resource to delete (you may pass several).",
    );
    process.exit(1);
  }

  const invalid = args.filter(
    (resource) => !initialResource.includes(resource as InitialResource),
  );
  if (invalid.length > 0) {
    console.error(
      `Resource(s) ${invalid
        .map((resource) => `"${resource}"`)
        .join(", ")} do not exist. Valid resources: ${initialResource.join(
        ", ",
      )}.`,
    );
    process.exit(1);
  }

  return [...new Set(args)] as InitialResource[];
};

// Delete the resource folder and its files.
const deleteIsolatedFiles = async (
  resource: InitialResource,
  basePath: string,
) => {
  const folderPath = `${basePath}/${resourceFilesPath}/${resource}`;

  if (!existsSync(folderPath)) {
    console.error(
      `Folder for resource "${resource}" does not exist. Skipping deletion of isolated files.`,
    );
    process.exit(1);
  }

  await rm(folderPath, { recursive: true, force: true });
};

// Return to Claude all the files dependent on the deleted resource(s).
// When several resources are deleted at once, merge and de-duplicate their
// dependent-file lists, then drop any file that lives inside a folder we just
// deleted (e.g. `companies/CompanyShow.tsx` is a dependent of `contacts`, but
// it is gone once `companies` is deleted too).
const returnDependentFiles = (resources: InitialResource[]) => {
  const deletedFolders = resources.map(
    (resource) => `${resourceFilesPath}/${resource}/`,
  );

  const merged = new Set<DependentFile>([
    ...resources.flatMap((resource) => dependentFiles[resource]),
    ...sharedDependentFiles,
  ]);

  const allDependentFilesToReturn = [...merged]
    .filter((file) => !deletedFolders.some((folder) => file.startsWith(folder)))
    .sort();

  // eslint-disable-next-line no-console
  console.log(
    `Dependent files for resource(s) ${resources
      .map((resource) => `"${resource}"`)
      .join(", ")}:\n`,
    allDependentFilesToReturn,
  );
  process.exit(0);
};

// ================================  MAIN CALL  ================================
await main();
