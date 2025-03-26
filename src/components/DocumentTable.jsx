import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Chip,
  IconButton,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { documentData } from "../data/documentDataOverview";

const DocumentTable = () => {
  const [expandedLanguages, setExpandedLanguages] = useState(
    Object.keys(documentData[0].languages)
  );

  const handleLanguageToggle = (language) => {
    setExpandedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((lang) => lang !== language)
        : [...prev, language]
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Header Spacer */}
      <Box sx={{ width: 816, height: "auto", mt: 5 }} />
      {/* Header */}
      <Box sx={{ display: "flex", width: "100%", gap: 4, mb: 5 }}>
        <Box sx={{ width: 50, justifyContent: "space-between" }} />
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", width: 192 }}
        >
          Document
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", width: 82 }}
        >
          Current status
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", width: 82 }}
        >
          Statuses overview
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", width: 82 }}
        >
          Due date
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", width: 108 }}
        >
          Executors
        </Typography>
      </Box>
      {/* Language Selectors */}
      {Object.keys(documentData[0].languages).map((language) => (
        <React.Fragment key={language}>
          <LanguageSelector
            language={language}
            expanded={expandedLanguages.includes(language)}
            onToggle={() => handleLanguageToggle(language)}
          />
          {expandedLanguages.includes(language) &&
            documentData.map((doc, index) => (
              <DocumentRow
                key={index}
                document={doc.document}
                {...doc.languages[language]}
              />
            ))}
        </React.Fragment>
      ))}
    </Box>
  );
};

// Reusable Components
const LanguageSelector = ({ language, expanded, onToggle }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 2,
      width: "20%",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    }}
    onClick={onToggle}
  >
    <Chip
      label={language}
      sx={{
        flex: 1,
        border: "1px solid",
        bgcolor: "white",
        borderColor: "divider",
        borderRadius: 1,

        height: 23,
        "& .MuiChip-label": {
          fontSize: 12,
          fontWeight: 400,
          color: "black",
        },
      }}
    />
    <IconButton
      size="small"
      sx={{ transform: expanded ? "rotate(180deg)" : "none" }}
    >
      {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </IconButton>
  </Box>
);

const DocumentRow = ({
  document,
  status,
  date,
  executors,
  progress = [],
  variant = "default",
}) => {
  const borderStyles = {
    top: {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderTop: 1,
      borderLeft: 1,
      borderRight: 1,
      borderBottom: 0,
    },
    bottom: {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      borderBottom: 1,
      borderLeft: 1,
      borderRight: 1,
      borderTop: 0,
    },
    default: { borderRadius: 1, border: 1 },
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        width: "100%",
        height: 72,
        backgroundColor: "background.paper",
        borderColor: "divider",
        ...borderStyles[variant],
        boxShadow: 1,
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <Checkbox
        sx={{ color: "#3778A6", "&.Mui-checked": { color: "#3778A6" } }}
      />
      {/* Document Name */}
      <Typography variant="body2" sx={{ width: 192, px: 2 }}>
        {document}
      </Typography>

      {/* Status */}
      <Typography variant="body2" sx={{ width: 82 }}>
        {status}
      </Typography>

      {/* Progress Indicators */}
      <Box
        sx={{
          width: 82,
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        {progress.map((state, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor:
                state === true
                  ? "#3778A6"
                  : state === "partial"
                  ? "white"
                  : "grey.200",
              border: state === "partial" ? "1.5px solid" : "none",
              borderColor: state === "partial" ? "#3778A6" : "transparent",
              opacity: state === true ? 0.89 : 1,
            }}
          />
        ))}
      </Box>

      {/* Date */}
      <Typography
        variant="body2"
        sx={{
          width: 82,
          color:
            date === "As soon as possible" ? "text.secondary" : "text.primary",
        }}
      >
        {date}
      </Typography>

      {/* Executors */}
      <Box
        sx={{
          width: 108,
          display: "flex",
          gap: 1,
        }}
      >
        {executors.map((initial, index) => (
          <Avatar
            key={index}
            sx={{
              width: 24,
              height: 24,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              color: "text.secondary",
              fontSize: 12,
            }}
          >
            {initial}
          </Avatar>
        ))}
      </Box>
    </Box>
  );
};

export default DocumentTable;
