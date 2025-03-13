import {
  Alert,
  AlertTitle,
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Fragment, HTMLProps } from "react";
import { FormValues, useForm } from "../../utils/hooks";
import { FormConfig } from "../../utils/types";
import { Button } from "../button/Button";
import { Field } from "../field/Field";

interface Props extends HTMLProps<HTMLFormElement> {
  formConfig: FormConfig;
  onSubmit?: (formValues: FormValues) => void;
}

export const Form = ({ formConfig, onSubmit, ...props }: Props) => {
  const { handleSubmit, getFieldControls, onReset } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onReset={onReset}
      style={{
        height: "100%",
        overflow: "hidden",
        display: "flex",
      }}
      {...props}
    >
      <Stack direction="column" spacing={2} style={{ flex: 1 }}>
        <Typography variant="h6" component="h2">
          {formConfig.title}
        </Typography>

        <Typography>{formConfig.description}</Typography>

        <Stack
          direction="column"
          spacing={1.5}
          style={{
            flex: 1,
            overflowY: "scroll",
            padding: "0.5rem",
            border: "1px solid gray",
            borderRadius: "4px",
          }}
        >
          {formConfig.fields.map((field, index) => (
            <Fragment key={field.id}>
              {index > 0 && <Divider />}
              <Field control={getFieldControls(field.id)} fieldData={field} />
            </Fragment>
          ))}
        </Stack>

        <Stack direction="row" spacing={2} style={{ marginLeft: "auto" }}>
          {formConfig.buttons.map((button) => (
            <Button key={button.label} {...button} />
          ))}
        </Stack>
      </Stack>
    </form>
  );
};
