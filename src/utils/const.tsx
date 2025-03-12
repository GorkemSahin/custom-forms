import { FormConfig, FormTab, InputType } from "./types";

export const VALID_INPUT_TYPES: InputType[] = [
  "CHECKBOX",
  "DATE",
  "NUMBER",
  "RADIO",
  "SELECT",
  "TEXT",
  "TEXT_AREA",
];

export const FORM_TABS: { value: FormTab; label: string }[] = [
  { value: "CONFIG", label: "Form Configuration" },
  { value: "FORM", label: "Generated Form" },
];

export const FORM_CONFIG_EXAMPLE: FormConfig = {
  title: "Student Form",
  description: "This is a form configuration example to serve as a demo.",
  fields: [
    {
      id: "name_surname",
      type: "TEXT",
      label: "Name and Surname",
      required: true,
    },
    {
      id: "age",
      type: "NUMBER",
      label: "Age",
      required: true,
    },
    {
      id: "active",
      type: "RADIO",
      label: "Graduated",
      data: {
        options: ["Yes", "No"],
      },
    },
    {
      id: "subjects",
      label: "Subjects Studied",
      type: "SELECT",
      data: {
        multiple: true,
        options: ["History", "Art", "Literature", "Geometry", "Chemistry"],
      },
    },
    {
      id: "fav_subject",
      label: "Favorite Subject",
      type: "RADIO",
      data: {
        options: ["History", "Art", "Literature", "Geometry", "Chemistry"],
      },
    },
    {
      id: "active_enrollment",
      label: "Student is actively enrolled in studies.",
      type: "CHECKBOX",
      data: { binaryCondition: true },
    },
    {
      id: "fav_class",
      type: "TEXT_AREA",
      label: "Additional Information",
      data: { size: 4 },
    },
  ],
  buttons: [
    {
      type: "reset",
      label: "Clear",
    },
    {
      type: "submit",
      label: "Save",
    },
  ],
};

export const SERIALIZED_FORM_CONFIG_EXAMPLE = JSON.stringify(
  FORM_CONFIG_EXAMPLE,
  undefined,
  4
);
