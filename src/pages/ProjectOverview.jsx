import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

import ProjectProgressCard from "../components/ProjectProgressCard";
import SearchBar from "../components/SearchBar";
import DocumentTable from "../components/DocumentTable";
import ToggleButtons from "../components/ToggleButtons";
import RightPanel from "../components/RightPanel";
import ongoingData from "../data/Ongoindata";

function ProjectOverview() {
  const { id } = useParams(); // Получаем ID проекта из URL
  const projectId = parseInt(id, 10);
  const project = ongoingData.projects?.find((proj) => proj.id === projectId);

  if (!project) {
    return (
      <Typography variant="h4" sx={{ textAlign: "center", mt: 5 }}>
        Project not found
      </Typography>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          sx={{ flex: 1, fontSize: 30, fontWeight: 400, fontFamily: "Inter" }}
        >
          {`Project: ${project.name}`} {/* Отображаем ID проекта */}
        </Typography>
        <Button
          startIcon={<AddIcon sx={{ fontSize: 20 }} />}
          sx={{
            p: 1.25,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1,
            color: "text.primary",
            fontSize: 14,
            fontFamily: "SB Sans Display",
            fontWeight: 400,
            lineHeight: "20px",
            textTransform: "none",
            bgcolor: "white",
          }}
        >
          Add document
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "100%",
            overflowY: "auto",
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <ProjectProgressCard />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              width: "100%",
            }}
          >
            <ToggleButtons filterOptions={["List", "Tasks", "Reports"]} />
            <SearchBar />
          </Box>
          <DocumentTable />
        </Box>
        <Box
          sx={{
            width: "30%",
            height: "100%",
            gap: 3,
            p: 3,
            flexDirection: "column",
          }}
        >
          <RightPanel />
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectOverview;
