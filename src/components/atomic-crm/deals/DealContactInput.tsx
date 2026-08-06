import { useState } from "react";
import {
  useGetIdentity,
  useNotify,
  useTranslate,
  type Identifier,
} from "ra-core";
import { useQueryClient } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";
import { Plus } from "lucide-react";
import { ReferenceArrayInput } from "@/components/admin/reference-array-input";
import { AutocompleteArrayInput } from "@/components/admin/autocomplete-array-input";
import { Button } from "@/components/ui/button";

import { contactOptionText } from "../misc/ContactOption";
import { ContactInputs } from "../contacts/ContactInputs";
import {
  cleanupContactForCreate,
  defaultEmailJsonb,
  defaultPhoneJsonb,
} from "../contacts/contactModel";
import { CreateSheet } from "../misc/CreateSheet";

export const DealContactInput = () => {
  const translate = useTranslate();
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end gap-2">
        <div className="flex-1">
          <ReferenceArrayInput source="contact_ids" reference="contacts_summary">
            <AutocompleteArrayInput
              label="resources.deals.fields.contact_ids"
              optionText={contactOptionText}
              helperText={false}
            />
          </ReferenceArrayInput>
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="shrink-0 mb-0.5"
          onClick={() => setSheetOpen(true)}
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">
            {translate("resources.contacts.action.new")}
          </span>
        </Button>
      </div>
      <DealContactCreateSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
    </div>
  );
};

const DealContactCreateSheet = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const { identity } = useGetIdentity();
  const { setValue, getValues } = useFormContext();
  const queryClient = useQueryClient();
  const notify = useNotify();
  const translate = useTranslate();

  const handleSuccess = (data: any) => {
    const currentContactIds: Identifier[] = getValues("contact_ids") || [];
    if (!currentContactIds.includes(data.id)) {
      setValue("contact_ids", [...currentContactIds, data.id], {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
    queryClient.invalidateQueries({
      queryKey: ["contacts_summary", "getList"],
    });
    notify("resources.contacts.notifications.created", {
      type: "info",
    });
    onOpenChange(false);
  };

  return (
    <CreateSheet
      resource="contacts"
      title={translate("resources.contacts.action.new")}
      defaultValues={{
        sales_id: identity?.id,
        email_jsonb: defaultEmailJsonb,
        phone_jsonb: defaultPhoneJsonb,
      }}
      transform={cleanupContactForCreate}
      redirect={false}
      mutationOptions={{ onSuccess: handleSuccess }}
      open={open}
      onOpenChange={onOpenChange}
    >
      <ContactInputs />
    </CreateSheet>
  );
};
