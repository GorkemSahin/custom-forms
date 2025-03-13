import { Box, BoxProps } from "@mui/material";

interface Props extends BoxProps {
  visible?: boolean;
}

export const TabContent = ({ visible, style, ...props }: Props) => {
  return (
    <Box
      {...props}
      style={Object.assign(style ?? {}, {
        display: visible ? undefined : "none",
      })}
    ></Box>
  );
};
