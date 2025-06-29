import { Trash2 } from "lucide-react";

import { Button, type ButtonProps } from "@/forms";

interface Props extends ButtonProps {
  disabled?: boolean;
  handleDelete: () => void;
}

export const DeleteButton = ({ disabled = false, handleDelete, ...rest }: Props) => {
  return (
    <Button
      disabled={disabled}
      icon={<Trash2 />}
      onClick={handleDelete}
      variant="outline"
      {...rest}
      className="border-destructive text-destructive hover:bg-destructive hover:text-white"
    >
      Delete
    </Button>
  );
};
