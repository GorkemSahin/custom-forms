import { FormEventHandler, useState } from "react";

export type FormValues = Record<string, any>;
export interface FieldControls {
  value: any;
  onChange: (value: any) => void;
}

export const useForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({});

  const onFieldChange = (id: string, value: any) => {
    setFormValues((prevData) => ({ ...prevData, [id]: value }));
  };

  const getFieldValue = (id: string) => formValues[id];

  const getFieldControls = (id: string): FieldControls => {
    return {
      value: getFieldValue(id),
      onChange: (value: string) => onFieldChange(id, value),
    };
  };

  const handleSubmit = (
    onSubmit?: (values: FormValues) => void
  ): FormEventHandler => {
    return (e) => {
      e.preventDefault();
      onSubmit?.(formValues);
    };
  };

  const onReset = () => setFormValues({});

  return { getFieldControls, handleSubmit, onReset };
};
