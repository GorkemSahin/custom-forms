import { ButtonProps } from "@mui/material";

export const BUTTON_PROPS: Record<
  NonNullable<ButtonProps["type"]>,
  { variant: ButtonProps["variant"]; color?: ButtonProps["color"] }
> = {
  button: { variant: "text" },
  reset: { variant: "outlined", color: "warning" },
  submit: { variant: "contained", color: "primary" },
};
