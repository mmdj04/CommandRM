import type { ConfigurationContextValue } from "./ConfigurationContext";
// Import the logos as module assets so Vite resolves their URL relative to the
// JS chunk (import.meta.url), not the current route. A plain "./logos/..." path
// breaks on nested routes like /oauth/consent and under a deployment sub-path.
import darkModeLogo from "./logos/logo_atomic_crm_dark.svg";
import lightModeLogo from "./logos/logo_atomic_crm_light.svg";

export const defaultDarkModeLogo = darkModeLogo;
export const defaultLightModeLogo = lightModeLogo;

export const defaultCurrency = "USD";

export const defaultTitle = "CommandRM";

export const defaultCompanySectors = [
  { value: "communication-services", label: "Serviços de Comunicação" },
  { value: "consumer-discretionary", label: "Bens de Consumo Discricionários" },
  { value: "consumer-staples", label: "Bens de Consumo Básicos" },
  { value: "energy", label: "Energia" },
  { value: "financials", label: "Financeiro" },
  { value: "health-care", label: "Saúde" },
  { value: "industrials", label: "Indústria" },
  { value: "information-technology", label: "Tecnologia da Informação" },
  { value: "materials", label: "Materiais" },
  { value: "real-estate", label: "Imobiliário" },
  { value: "utilities", label: "Utilidades Públicas" },
];

export const defaultDealStages = [
  { value: "opportunity", label: "Oportunidade" },
  { value: "proposal-sent", label: "Proposta Enviada" },
  { value: "in-negociation", label: "Em Negociação" },
  { value: "won", label: "Ganho" },
  { value: "lost", label: "Perdido" },
  { value: "delayed", label: "Atrasado" },
];

export const defaultDealPipelineStatuses = ["won"];

export const defaultDealCategories = [
  { value: "other", label: "Outro" },
  { value: "copywriting", label: "Redação" },
  { value: "print-project", label: "Projeto Gráfico" },
  { value: "ui-design", label: "Design UI" },
  { value: "website-design", label: "Design de Site" },
];

export const defaultNoteStatuses = [
  { value: "cold", label: "Frio", color: "#7dbde8" },
  { value: "warm", label: "Morno", color: "#e8cb7d" },
  { value: "hot", label: "Quente", color: "#e88b7d" },
  { value: "in-contract", label: "Em Contrato", color: "#a4e87d" },
];

export const defaultTaskTypes = [
  { value: "none", label: "Nenhum" },
  { value: "email", label: "Email" },
  { value: "demo", label: "Demonstração" },
  { value: "lunch", label: "Almoço" },
  { value: "meeting", label: "Reunião" },
  { value: "follow-up", label: "Follow-up" },
  { value: "thank-you", label: "Thank you" },
  { value: "ship", label: "Ship" },
  { value: "call", label: "Call" },
];

export const defaultConfiguration: ConfigurationContextValue = {
  companySectors: defaultCompanySectors,
  currency: defaultCurrency,
  dealCategories: defaultDealCategories,
  dealPipelineStatuses: defaultDealPipelineStatuses,
  dealStages: defaultDealStages,
  noteStatuses: defaultNoteStatuses,
  taskTypes: defaultTaskTypes,
  title: defaultTitle,
  darkModeLogo: defaultDarkModeLogo,
  lightModeLogo: defaultLightModeLogo,
};
