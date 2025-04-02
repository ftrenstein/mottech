import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added import for navigation
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
// import { documentData, projects } from "../data/documentDataOverview";
import { useProjectContext } from "../context/ProjectContext";

const DocumentTable = ({ projectId }) => {
  const { projects, addProject, deleteProject, isLoading } =
    useProjectContext();
  // Find the selected project
  const project = projects.find((proj) => proj.id === projectId);
  console.log("Project ID2 :", projectId);

  if (!project || !project.documents) {
    return (
      <Typography variant="h6" textAlign="center" mt={3}>
        Documents not found.
      </Typography>
    );
  }
  console.log("Project ID2 doc table:", project);

  // Get the documents for the selected project
  const projectDocuments = project.documents.map((doc) => ({
    ...doc,
    languages: doc.languages || [], // Ensure languages is an array
  }));
  console.log("Project documents:", projectDocuments);

  // Extract unique languages across all project documents
  const allLanguages = Array.from(
    new Set(projectDocuments.flatMap((doc) => doc.languages))
  );

  const [expandedLanguages, setExpandedLanguages] = useState(allLanguages);

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
        gridTemplateColumns="min-content 1fr 0.7fr 0.7fr 0.7fr 0.8fr"
        width="100%"
        gap={2}
        mb={3}
        px={3}
      >
        <Box width={40} />
        <HeaderCell>Document</HeaderCell>
        <HeaderCell>Current status</HeaderCell>
        <HeaderCell>Statuses overview</HeaderCell>
        <HeaderCell>Due date</HeaderCell>
        <HeaderCell>Executors</HeaderCell>
      </Box>

      {/* Grouped by Languages */}
      {allLanguages.map((language) => (
        <React.Fragment key={language}>
          <LanguageSelector
            language={language}
            expanded={expandedLanguages.includes(language)}
            onToggle={() => handleLanguageToggle(language)}
          />
          {expandedLanguages.includes(language) && (
            <Box border={1} borderColor="divider" borderRadius={1} mb={2}>
              {projectDocuments
                .filter((doc) => doc.languages.includes(language)) // Filter documents with the current language
                .map((doc, index) => (
                  <DocumentRow
                    key={`${language}-${doc.id || "unknown"}-${index}`} // Ensure unique key
                    document={doc.name || "Untitled Document"} // Use 'name' for the document name
                    status={doc.status || "Unknown Status"} // Use 'status' for the document status
                    date={doc.due_date || "No Due Date"} // Use 'due_date' for the due date
                    executors={
                      Array.isArray(doc.executors) ? doc.executors : []
                    } // Ensure executors is an array
                    progress={doc.progress || []} // Ensure progress is passed correctly
                    last={index === projectDocuments.length - 1}
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
        width: "100%",
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
  progress = [], // Ensure progress is passed correctly
  last,
}) => {
  const navigate = useNavigate(); // Initialize navigation hook
  const executorList = Array.isArray(executors) ? executors : []; // Ensure executors is an array

  const handleRowClick = () => {
    navigate(`/documentoverview/`); // Navigate to DocumentOverview with document name
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="min-content 1fr 0.7fr 0.7fr 0.7fr 0.8fr"
      alignItems="center"
      width="100%"
      height={56}
      px={3}
      borderRadius={3}
      onClick={handleRowClick} // Added click handler
      sx={{
        backgroundColor: "background.paper",
        "&:hover": {
          border: "1px solid",
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

      {/* Statuses overview */}
      <Box
        width={82}
        display="flex"
        gap={1}
        p={1}
        sx={{
          borderRadius: 3,
          border: "1.5px solid",
          borderColor: "grey.300",
        }}
      >
        {progress.length > 0 ? (
          progress.map((state, index) => (
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
          ))
        ) : (
          <Typography variant="caption" color="text.secondary">
            No data
          </Typography>
        )}
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
        {executorList.map((initial, index) => (
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
