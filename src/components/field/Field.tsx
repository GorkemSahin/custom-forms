import { InputLabel, Stack, StackProps } from "@mui/material";
import { FieldControls } from "../../utils/hooks";
import { FieldData } from "../../utils/types";
import { renderInput, shouldRenderLabelAboveInput } from "../form/formUtils";

interface Props extends StackProps {
  fieldData: FieldData;
  control: FieldControls;
}

export const Field = ({ fieldData, control, ...props }: Props) => {
  const renderLabelAboveInput = shouldRenderLabelAboveInput(fieldData);

  return (
    <Stack direction="column" {...props}>
      {renderLabelAboveInput && <InputLabel>{fieldData.label}</InputLabel>}
      {renderInput(fieldData, control)}
    </Stack>
  );
};
