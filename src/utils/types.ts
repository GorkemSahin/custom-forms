import { ButtonProps } from "@mui/material";

export type FormTab = "CONFIG" | "FORM";

type FieldSpecificData = {
  RADIO: {
    options: string[];
  };
  SELECT: {
    multiple: boolean;
    options: string[];
  };
  CHECKBOX:
    | {
        options: string[];
      }
    | {
        binaryCondition: true;
      };
  TEXT_AREA: {
    size: number;
  };
  NUMBER: undefined;
  TEXT: undefined;
  DATE: undefined;
};

export type InputType = keyof FieldSpecificData;

interface CommonFieldData {
  label: string;
  id: string;
  required?: boolean;
}

type FieldDataDict = {
  [K in keyof FieldSpecificData]: FieldSpecificData[K] extends undefined
    ? CommonFieldData & { type: K }
    : CommonFieldData & { type: K; data: FieldSpecificData[K] };
};

export type FieldData = FieldDataDict[InputType];

export interface ButtonData {
  label: string;
  type?: ButtonProps["type"];
}

export interface FormConfig {
  title: string;
  description?: string;
  fields: FieldData[];
  buttons: ButtonData[];
}
