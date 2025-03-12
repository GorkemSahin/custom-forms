import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Stack,
  StackProps,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { SERIALIZED_FORM_CONFIG_EXAMPLE } from "../../utils/const";
import { FormConfig } from "../../utils/types";
import { getFormConfigFromJson } from "./formConfigUtils";

interface Props extends StackProps {
  onApply: (value: FormConfig) => void;
}

export const FormConfigInput = ({ onApply: onApplyProp, ...props }: Props) => {
  const [value, setValue] = useState(SERIALIZED_FORM_CONFIG_EXAMPLE);
  const [error, setError] = useState<Error | null>(null);

  const onApply = (text: string) => {
    try {
      const formConfig = getFormConfigFromJson(text);
      onApplyProp(formConfig);
    } catch (e) {
      setError(e as Error);
    }
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      style={{
        height: "100%",
        overflow: "hidden",
      }}
      {...props}
    >
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error.message || "Something went wrong."}
        </Alert>
      )}

      <Box
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
          padding: "0.5rem",
          border: "1px solid gray",
          borderRadius: "4px",
        }}
      >
        <TextField
          style={{
            flex: 1,
            display: "flex",
            overflow: "scroll",
          }}
          variant="standard"
          slotProps={{
            input: {
              disableUnderline: true,
            },
          }}
          multiline
          value={value}
          onChange={(e) => {
            setError(null);
            setValue(e.target.value);
          }}
        />
      </Box>

      <Button
        type="button"
        variant="contained"
        onClick={() => onApply(value)}
        disabled={!value || !!error}
      >
        Apply
      </Button>
    </Stack>
  );
};
