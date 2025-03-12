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
  switch (field.type) {
    case "TEXT":
      return (
        <TextField
          value={controls.value || ""}
          onChange={(e) => controls.onChange(e.target.value)}
        />
      );
    case "TEXT_AREA":
      return (
        <TextField
          value={controls.value || ""}
          onChange={(e) => controls.onChange(e.target.value)}
          multiline
          minRows={field.data.size}
        />
      );
    case "CHECKBOX":
      if ("options" in field.data) {
        const currentValue = (controls.value as string[]) || [];
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
                      controls.onChange(
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
            label={field.label}
            control={
              <Checkbox
                checked={!!controls.value}
                onChange={(e) => controls.onChange(e.target.checked)}
              />
            }
          />
        );
      }
    case "DATE":
      return (
        <DatePicker
          value={controls.value || null}
          onChange={controls.onChange}
        />
      );
    case "NUMBER":
      return (
        <TextField
          type="number"
          value={controls.value || ""}
          onChange={(e) => controls.onChange(e.target.value)}
        />
      );
    case "RADIO":
      return (
        <RadioGroup row value={controls.value || null}>
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
          value={controls.value || isMultiple ? [] : ""}
          onChange={(e) => controls.onChange(e.target.value)}
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
