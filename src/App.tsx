import {
  Alert,
  AlertTitle,
  Box,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Form } from "./components/form/Form";
import { FormConfigInput } from "./components/formConfig/FormConfigInput";
import { FORM_TABS } from "./utils/const";
import { FormConfig, FormTab } from "./utils/types";

export function App() {
  const [activeTab, setActiveTab] = useState<FormTab>("CONFIG");

  const [formConfig, setFormConfig] = useState<FormConfig | null>(null);

  return (
    <Stack direction="column" spacing={2} className="app">
      <Typography variant="h5" component="h1">
        Custom Form Generator
      </Typography>
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
      >
        {FORM_TABS.map((tab) => (
          <Tab {...tab} key={tab.value} />
        ))}
      </Tabs>

      <Box
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        {activeTab === "CONFIG" && <FormConfigInput onApply={setFormConfig} />}

        {activeTab === "FORM" && formConfig ? (
          <Form formConfig={formConfig} />
        ) : (
          <Alert severity="warning">
            <AlertTitle>
              No valid form configuration has been provided.
            </AlertTitle>
            Please enter and apply a valid form configuration using the FORM
            CONFIGURATION tab.
          </Alert>
        )}
      </Box>
    </Stack>
  );
}
