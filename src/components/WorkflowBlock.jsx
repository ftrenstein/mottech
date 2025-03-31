import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const WorkflowButton = ({ label, isActive, onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      bgcolor: isActive ? "#3778A6" : "white",
      color: isActive ? "white" : "#3778A6",
      borderRadius: 1,
      border: "2px solid #3778A6",
      textTransform: "none",
      "&:hover": {
        bgcolor: isActive ? "#3778A6" : "white",
      },
    }}
  >
    {label}
  </Button>
);

const WorkflowBlock = () => {
  const [activeStates, setActiveStates] = useState({
    aiTranslation: false,
    linguistVerification: false,
    translation: false,
    validation: false,
    design: false,
  });

  const toggleState = (key) => {
    setActiveStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRevertClick = () => {
    setActiveStates({
      aiTranslation: false,
      linguistVerification: false,
      translation: false,
      validation: false,
      design: false,
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: 3,
        bgcolor: "background.paper",
        borderRadius: 1,
        border: "1px solid #E8E8E8",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" color="textPrimary">
            Standard workflow
          </Typography>
          <Typography variant="body2" color="textSecondary">
            AI translation, Linguist verification, Translation, Validation,
          </Typography>
        </Box>
        <Box sx={{ transform: "rotate(180deg)" }}>
          <ExpandMoreIcon />
        </Box>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", gap: 2 }}>
        {[
          { key: "aiTranslation", label: "AI translation" },
          { key: "linguistVerification", label: "Linguist verification" },
          { key: "translation", label: "Translation" },
          { key: "validation", label: "Validation" },
          { key: "design", label: "Design" },
        ].map(({ key, label }) => (
          <WorkflowButton
            key={key}
            label={label}
            isActive={activeStates[key]}
            onClick={() => toggleState(key)}
          />
        ))}
      </Box>

      {/* Checkbox and Link */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              sx={{ color: "#3778A6", "&.Mui-checked": { color: "#3778A6" } }}
            />
          }
          label={
            <Typography variant="body2" color="textPrimary">
              I want to use this workflow as a default one for next tasks
            </Typography>
          }
        />
        <Typography
          variant="body2"
          color="#3778A6"
          sx={{ fontWeight: 500, cursor: "pointer" }}
          onClick={handleRevertClick}
        >
          Revert all
        </Typography>
      </Box>
    </Box>
  );
};

export default WorkflowBlock;
