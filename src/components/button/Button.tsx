import { Button as BaseButton } from "@mui/material";
import { ButtonData } from "../../utils/types";
import { BUTTON_PROPS } from "./buttonUtils";

type Props = ButtonData;

export const Button = ({ type = "button", label }: Props) => (
  <BaseButton type={type} {...BUTTON_PROPS[type]}>
    {label}
  </BaseButton>
);
