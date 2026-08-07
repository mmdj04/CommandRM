import { ShowBase, useRecordContext, useTranslate } from "ra-core";
import { SimpleShowLayout } from "@/components/admin/simple-show-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import type { Sale } from "../types";

const SaleTitle = () => {
  const record = useRecordContext<Sale>();
  if (!record) return null;
  return (
    <h2 className="text-lg font-semibold mb-4">
      {`${record.first_name} ${record.last_name}`}
    </h2>
  );
};

export function SalesShow() {
  const translate = useTranslate();
  const record = useRecordContext<Sale>();

  return (
    <div className="max-w-lg w-full mx-auto mt-8">
      <Card>
        <CardContent>
          <ShowBase>
            <SaleTitle />
            <SimpleShowLayout>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">
                    {translate("resources.sales.fields.first_name")}
                  </span>
                  <p className="text-sm">{record?.first_name}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">
                    {translate("resources.sales.fields.last_name")}
                  </span>
                  <p className="text-sm">{record?.last_name}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">
                    {translate("resources.sales.fields.email")}
                  </span>
                  <p className="text-sm">{record?.email}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">
                    {translate("resources.sales.fields.options")}
                  </span>
                  <div className="flex flex-row gap-1 mt-1">
                    {record?.administrator && (
                      <Badge
                        variant="outline"
                        className="border-blue-300 dark:border-blue-700"
                      >
                        {translate("resources.sales.fields.administrator")}
                      </Badge>
                    )}
                    {record?.disabled && (
                      <Badge
                        variant="outline"
                        className="border-orange-300 dark:border-orange-700"
                      >
                        {translate("resources.sales.fields.disabled")}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </SimpleShowLayout>
          </ShowBase>
        </CardContent>
      </Card>
    </div>
  );
}
