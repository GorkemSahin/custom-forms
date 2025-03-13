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
      label: "Name and surname",
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
      label: "Subjects studied",
      type: "CHECKBOX",
      data: {
        options: ["History", "Drawing", "Literature", "Geometry", "Chemistry"],
      },
    },
    {
      id: "fav_subject",
      label: "Favorite subject",
      type: "RADIO",
      data: {
        options: ["History", "Drawing", "Literature", "Geometry", "Chemistry"],
      },
    },
    {
      id: "active_enrollment",
      label: "Student is actively enrolled in studies.",
      type: "CHECKBOX",
      data: { binaryCondition: true },
    },
    {
      id: "wanted_subjects",
      label: "Subjects the student wants to study",
      type: "SELECT",
      data: {
        options: ["Mathematics", "Physics", "Biology", "Music"],
        multiple: true,
      },
    },
    {
      id: "fav_class",
      type: "TEXT_AREA",
      label: "Additional information",
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
