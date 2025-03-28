import React from "react";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";

const UniversalButton = ({
  variant = "contained",
  startIcon = <Add />,
  children,
  type = "button",
  sx,
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      startIcon={startIcon ? startIcon : null}
      sx={(theme) => ({
        bgcolor: theme.palette.mainblue, // Assuming primary.main is the intended color
        textTransform: "none",
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default UniversalButton;
