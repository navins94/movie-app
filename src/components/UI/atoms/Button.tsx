import { FC, MouseEventHandler, ReactNode } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { BoxProps } from "@mui/material/Box";

interface CustomButtonProps extends ButtonProps {
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
  sx?: BoxProps["sx"];
}

const ButtonComponent: FC<CustomButtonProps> = ({
  children,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <Button startIcon={startIcon} sx={props.sx} endIcon={endIcon} {...props}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
