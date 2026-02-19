import { Trash2 } from "lucide-react";
import type { ReactElement } from "react";

import { Button, type ButtonProps } from "@/forms";

interface Props extends ButtonProps {
  icon?: ReactElement;
  disabled?: boolean;
  handleDelete: () => void;
}

export const DeleteButton = ({ icon, disabled = false, handleDelete, ...rest }: Props) => {
  const IconComponent = icon ? () => icon : Trash2;

  return (
    <Button
      disabled={disabled}
      icon={<IconComponent />}
      onClick={handleDelete}
      variant="outline"
      {...rest}
      className="border-destructive text-destructive hover:bg-destructive hover:text-white"
    >
      Delete
    </Button>
  );
};
