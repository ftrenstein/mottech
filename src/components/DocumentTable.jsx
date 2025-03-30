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
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      gap={2}
    >
      <Box
        display="grid"
        gridTemplateColumns="min-content 1fr 0.7fr 0.7fr 0.7fr 0.8fr" // Автоматическое распределение
        width="100%"
        gap={2}
        mb={3}
        px={3}
      >
        <Box width={40} /> {/* Placeholder для чекбокса */}
        <HeaderCell>Document</HeaderCell>
        <HeaderCell>Current status</HeaderCell>
        <HeaderCell>Statuses overview</HeaderCell>
        <HeaderCell>Due date</HeaderCell>
        <HeaderCell>Executors</HeaderCell>
      </Box>

      {/* Language Sections */}
      {Object.keys(documentData[0].languages).map((language) => (
        <React.Fragment key={language}>
          <LanguageSelector
            language={language}
            expanded={expandedLanguages.includes(language)}
            onToggle={() => handleLanguageToggle(language)}
          />
          {expandedLanguages.includes(language) && (
            <Box border={1} borderColor="divider" borderRadius={1} mb={2}>
              {documentData.map((doc, index) => (
                <DocumentRow
                  key={`${language}-${index}`}
                  document={doc.document}
                  {...doc.languages[language]}
                  last={index === documentData.length - 1}
                />
              ))}
            </Box>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

// Subcomponents
const HeaderCell = ({ width, children }) => (
  <Typography variant="caption" color="text.secondary" width={width}>
    {children}
  </Typography>
);

const LanguageSelector = ({ language, expanded, onToggle }) => (
  <Box
    display="flex"
    alignItems="center"
    gap={2}
    width="20%"
    onClick={onToggle}
    mb={1}
    sx={{
      "&:hover": { backgroundColor: "action.hover" },
      cursor: "pointer",
    }}
  >
    <Chip
      label={language}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        borderRadius: 1,
        height: 24,
        "& .MuiChip-label": {
          fontSize: 12,
          fontWeight: 400,
        },
      }}
    />
    <IconButton size="small">
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
  last,
}) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="min-content 1fr 0.7fr 0.7fr 0.7fr 0.8fr" // Такие же пропорции как в заголовке
      alignItems="center"
      width="100%"
      height={56}
      px={3}
      borderRadius={3}
      sx={{
        backgroundColor: "background.paper",
        "&:hover": {
          backgroundColor: "action.hover",
          cursor: "pointer",
        },
      }}
    >
      <Checkbox color="#3778A6" size="small" sx={{ mr: 2, color: "#3778A6" }} />

      <Typography variant="body2" width={192} noWrap>
        {document}
      </Typography>

      <Typography variant="body2" width={82}>
        {status}
      </Typography>

      <Box width={82} display="flex" gap={1}>
        {progress.map((state, index) => (
          <Box
            key={index}
            width={12}
            height={12}
            borderRadius="50%"
            sx={{
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

      <Typography
        variant="body2"
        width={82}
        color={
          date === "As soon as possible" ? "text.secondary" : "text.primary"
        }
      >
        {date}
      </Typography>

      <Box width={108} display="flex" gap={1}>
        {executors.map((initial, index) => (
          <Avatar
            key={index}
            sx={{
              width: 24,
              height: 24,
              bgcolor: "grey.100",
              fontSize: 12,
              color: "text.secondary",
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
