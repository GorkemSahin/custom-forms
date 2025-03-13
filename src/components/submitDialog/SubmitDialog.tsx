import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { ReactElement, useState } from "react";
import { FormValues } from "../../utils/hooks";

interface Props extends DialogProps {
  submittedForm?: FormValues | null;
  close: () => void;
}

const SubmitDialog = ({ submittedForm, close, ...props }: Props) => {
  if (!submittedForm) return null;

  const hasData = !!Object.entries(submittedForm).filter(
    ([_, value]) => !!value
  ).length;

  return (
    <Dialog onClose={close} {...props}>
      <DialogTitle>Form submitted</DialogTitle>
      <DialogContent dividers>
        <List disablePadding>
          {hasData ? (
            Object.entries(submittedForm).map(([key, value]) => (
              <ListItem disablePadding key={key}>
                <ListItemText>{`${key}: ${value}`}</ListItemText>
              </ListItem>
            ))
          ) : (
            <Typography>You have submitted an empty form.</Typography>
          )}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Okay</Button>
      </DialogActions>
    </Dialog>
  );
};

export const useSubmitDialog = () => {
  const [submittedForm, setSubmittedForm] = useState<FormValues | null>(null);

  const dialog = (
    <SubmitDialog
      open={!!submittedForm}
      submittedForm={submittedForm}
      close={() => setSubmittedForm(null)}
    />
  );

  const onSubmit = (submittedForm: FormValues) =>
    setSubmittedForm(submittedForm);

  return [dialog, onSubmit] as [ReactElement, typeof onSubmit];
};
