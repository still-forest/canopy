import { Trash2 } from "lucide-react";

import { type BaseButtonProps, Button } from "@/buttons";

interface DeleteButtonProps extends BaseButtonProps {
  disabled?: boolean;
  handleDelete: () => void;
}

export const DeleteButton = ({ icon, disabled = false, handleDelete, ...rest }: DeleteButtonProps) => {
  const IconComponent = icon ? () => icon : Trash2;

  return (
    <Button disabled={disabled} icon={<IconComponent />} onClick={handleDelete} outline variant="danger" {...rest}>
      Delete
    </Button>
  );
};
