import { Trash2 } from "lucide-react";

import { Button, type ButtonProps } from "@/main";

interface Props extends ButtonProps {
  disabled?: boolean;
  handleDelete: () => void;
}

export const DeleteButton = ({ disabled = false, handleDelete, ...rest }: Props) => {
  return (
    <Button
      variant="outline"
      onClick={handleDelete}
      disabled={disabled}
      icon={<Trash2 />}
      {...rest}
      className="border-destructive text-destructive hover:bg-destructive hover:text-white"
    >
      Delete
    </Button>
  );
};
