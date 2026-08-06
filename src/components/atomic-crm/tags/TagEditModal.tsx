import { useDelete, useTranslate, useUpdate } from "ra-core";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import type { Tag } from "../types";
import { TagDialog } from "./TagDialog";

type TagEditModalProps = {
  tag: Tag;
  open: boolean;
  onClose(): void;
  onSuccess?(tag: Tag): Promise<void>;
  onDelete?(): void;
};

export function TagEditModal({
  tag,
  open,
  onClose,
  onSuccess,
  onDelete,
}: TagEditModalProps) {
  const [update] = useUpdate<Tag>();
  const [deleteTag] = useDelete();
  const translate = useTranslate();

  const handleEditTag = async (data: Pick<Tag, "name" | "color">) => {
    await update(
      "tags",
      { id: tag.id, data, previousData: tag },
      {
        onSuccess: async (tag) => {
          await onSuccess?.(tag);
        },
      },
    );
  };

  const handleDeleteTag = async () => {
    await deleteTag("tags", { id: tag.id }, {
      onSuccess: () => {
        onDelete?.();
        onClose();
      },
    });
  };

  return (
    <TagDialog
      open={open}
      title={translate("resources.tags.dialog.edit_title")}
      onClose={onClose}
      onSubmit={handleEditTag}
      tag={tag}
      footer={
        <Button
          type="button"
          variant="destructive"
          onClick={handleDeleteTag}
          className="mr-auto"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          {translate("ra.action.delete")}
        </Button>
      }
    />
  );
}
