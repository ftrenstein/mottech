import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

import ProjectProgressCard from "../components/ProjectProgressCard";
import SearchBar from "../components/SearchBar";
import DocumentTable from "../components/DocumentTable";
import ToggleButtons from "../components/ToggleButtons";
import RightPanel from "../components/RightPanel";
import ongoingData from "../data/Ongoindata";
import { useProjectContext } from "../context/ProjectContext";

function ProjectOverview() {
  const { projects, addProject, deleteProject, isLoading } =
    useProjectContext();
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projects?.find((proj) => proj.id === projectId);

  console.log("Project ID overview:", projectId);
  if (!project) {
    return (
      <Typography variant="h4" textAlign="center" mt={5}>
        Project not found
      </Typography>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      overflow="hidden"
    >
      {/* Header Section - добавлен box-sizing */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        px={3} // Добавляем горизонтальный padding такой же как у контента
        boxSizing="border-box" // Важно!
      >
        <Typography variant="h4">{project.name}</Typography>

        <Button
          startIcon={<AddIcon fontSize="small" />}
          variant="outlined"
          width="100%"
          sx={{
            p: 1.25,
            fontSize: 12,
            textTransform: "none",
            bgcolor: "white",
          }}
        >
          Add document
        </Button>
      </Box>

      {/* Main Content - исправлены размеры */}
      <Box display="flex" flex={1} overflow="hidden">
        {/* Left Panel */}
        <Box
          width="70%"
          height="100%"
          overflow="auto"
          px={3} // Только горизонтальный padding
          boxSizing="border-box"
          display="flex"
          flexDirection="column"
          gap={3}
        >
          <ProjectProgressCard id={projectId} />

          <Box display="flex" alignItems="center" gap={2} width="100%">
            <ToggleButtons filterOptions={["List", "Tasks", "Reports"]} />
            <SearchBar />
          </Box>

          <DocumentTable projectId={projectId} />
        </Box>

        {/* Right Panel */}
        <Box
          width="30%"
          height="100%"
          px={3} // Только горизонтальный padding
          boxSizing="border-box"
          display="flex"
          flexDirection="column"
          gap={3}
          overflow="auto" // Добавляем scroll при необходимости
        >
          <RightPanel />
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectOverview;
