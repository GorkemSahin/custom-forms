import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { FieldControls } from "../../utils/hooks";
import { FieldData } from "../../utils/types";

export const shouldRenderLabelAboveInput = (field: FieldData) => {
  if (
    field.type === "CHECKBOX" &&
    "binaryCondition" in field.data &&
    field.data.binaryCondition
  ) {
    return false;
  }

  return true;
};

export const renderInput = (field: FieldData, controls: FieldControls) => {
  const { type, label } = field;
  const { value, onChange } = controls;

  switch (type) {
    case "TEXT":
      return (
        <TextField
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "TEXT_AREA":
      return (
        <TextField
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          multiline
          minRows={field.data.size}
        />
      );
    case "CHECKBOX":
      if ("options" in field.data) {
        const currentValue = (value as string[]) || [];
        return (
          <FormGroup>
            {field.data.options.map((option) => (
              <FormControlLabel
                key={option}
                label={option}
                control={
                  <Checkbox
                    checked={currentValue.includes(option)}
                    onChange={(e) =>
                      onChange(
                        e.target.checked
                          ? [...currentValue, option]
                          : currentValue.filter((v) => v !== option)
                      )
                    }
                  />
                }
              />
            ))}
          </FormGroup>
        );
      } else {
        return (
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                checked={!!value}
                onChange={(e) => onChange(e.target.checked)}
              />
            }
          />
        );
      }
    case "DATE":
      return <DatePicker value={value || null} onChange={onChange} />;
    case "NUMBER":
      return (
        <TextField
          type="number"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "RADIO":
      return (
        <RadioGroup
          row
          value={value || null}
          onChange={(e) => onChange(e.target.value)}
        >
          {field.data.options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      );
    case "SELECT":
      const isMultiple = field.data.multiple;
      return (
        <Select
          multiple={isMultiple}
          value={value ?? (isMultiple ? [] : "")}
          onChange={(e) => onChange(e.target.value)}
        >
          {field.data.options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      );
    default:
      throw Error(`Input type is not supported.`);
  }
};
