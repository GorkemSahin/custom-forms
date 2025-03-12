import { VALID_INPUT_TYPES } from "../../utils/const";
import {
  hasDuplicateValue,
  hasDuplicateValueForGivenProperty,
  noOp,
} from "../../utils/general";
import { FieldData, FormConfig } from "../../utils/types";

/**
 * @throws Will throw an error if the field data is not valid.
 */
export const validateField = (field: Partial<FieldData>) => {
  if (!field.id) throw Error("Each field has to have a valid ID.");

  if (!field.type || !VALID_INPUT_TYPES.includes(field.type))
    throw Error(`${field.id} does not have a valid type.`);

  if (!field.label) throw Error(`${field.id} does not have a valid label.`);

  switch (field.type) {
    case "RADIO":
    case "SELECT":
      if (!field.data?.options.length)
        throw Error(`No options provided for the field ${field.id}.`);
      if (hasDuplicateValue(field.data.options))
        throw Error(
          `Duplicate options have been found for the field ${field.id}.`
        );
      break;
    default:
      noOp();
      break;
  }
};

/**
 * @throws Will throw an error if the argument is not a valid form configuration object serialized as a valid JSON string.
 */
export const getFormConfigFromJson = (json: string) => {
  let parsedConfig: Partial<FormConfig>;
  parsedConfig = JSON.parse(json);

  if (!parsedConfig.title) throw Error("Form does not have a title.");

  if (!parsedConfig.fields?.length)
    throw Error("Form has to have at least one field.");

  if (hasDuplicateValueForGivenProperty(parsedConfig.fields, "id"))
    throw Error("Each field needs to have a unique ID.");

  if (!parsedConfig.buttons?.length)
    throw Error("Form has to have at least one button.");

  parsedConfig.fields.forEach((field) => validateField(field));

  return parsedConfig as FormConfig;
};
