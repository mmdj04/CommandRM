import { useTranslate } from "ra-core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Welcome = () => {
  const translate = useTranslate();
  return (
    <Card>
      <CardHeader className="px-4">
        <CardTitle>
          {translate("crm.welcome.title", {
            _: "Seu Kit Inicial de CRM",
          })}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <p className="text-sm mb-4">
          <a
            href="https://marmelab.com/atomic-crm"
            className="underline hover:no-underline"
          >
            CommandRM
          </a>{" "}
          {translate("crm.welcome.description_1", {
            _: "é um modelo projetado para ajudá-lo a construir rapidamente seu próprio CRM.",
          })}
        </p>
        <p className="text-sm mb-4">
          {translate("crm.welcome.description_2", {
            _: "Esta demonstração usa uma API simulada, para que você possa explorar e modificar os dados. Ela é reiniciada ao recarregar. A versão completa usa Supabase para o backend.",
          })}
        </p>
        <p className="text-sm">
          {translate("crm.welcome.description_3", {
            _: "Desenvolvido por",
          })}{" "}
          <a
            href="https://marmelab.com/shadcn-admin-kit"
            className="underline hover:no-underline"
          >
            shadcn-admin-kit
          </a>
          , {translate("crm.welcome.description_4", {
            _: "o CommandRM é totalmente de código aberto. Você pode encontrar o código em",
          })}{" "}
          <a
            href="https://github.com/marmelab/atomic-crm"
            className="underline hover:no-underline"
          >
            marmelab/atomic-crm
          </a>
          .
        </p>
      </CardContent>
    </Card>
  );
};
