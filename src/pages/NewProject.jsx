import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import WorkflowBlock from "../components/WorkflowBlock";
import UniversalButton from "../components/UniversalButton";
import FileUploadBlock from "../components/FileUploadBlock";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NewProject() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("New project");
  const [projects, setProjects] = useState([]);

  const handleCancelProjectClick = () => {
    navigate("/projects");
  };
  const handleCreateProjectClick = () => {
    // Simulate creating a new project
    const newProject = {
      id: Date.now(), // Unique ID for the project
      name: projectName,
      starting_date: new Date().toISOString().split("T")[0],
      total_languages: 1,
      completed: "0%",
      total_documents: 0,
    };
    setProjects([...projects, newProject]);

    // Save the project (e.g., update state or send to backend)
    console.log("New Project Created:", newProject);

    // Redirect to the new project's overview page
    navigate(`/projectOverview/${123}`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh", // Занимает всю высоту экрана
        display: "flex",
        justifyContent: "center", // Центрирование по горизонтали

        // bgcolor: "#f5f5f5", // Фон страницы (опционально)
        maxWidth: "100%", // Чтобы контент не вылезал за пределы экрана

        mt: 4, // Отступ сверху
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 900, // Ограничение ширины контента
          display: "flex",
          flexDirection: "column",
          gap: 6,
          p: 8, // Отступы внутри контейнера
          // bgcolor: "background.paper", // Фон контента

          boxShadow: 3, // Тень для контейнера
          // Прижимаем к верху
        }}
      >
        {/* Parameter Section */}
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            // bgcolor: "black",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography variant="body2" sx={{ flex: 1 }}>
              Brand
            </Typography>
            <Typography variant="body2" sx={{ flex: 1 }}>
              Subbrand
            </Typography>
            <Typography variant="body2" sx={{ flex: 1 }}>
              Product
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, bgcolor: "white" }}>
            <TextField fullWidth placeholder="Brand" sx={{ flex: 1 }} />
            <TextField fullWidth placeholder="Subbrand" sx={{ flex: 1 }} />
            <TextField fullWidth placeholder="Product" sx={{ flex: 1 }} />
          </Box>
        </Box>
        {/* Description Section */}
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2">Description</Typography>
          <TextField
            multiline
            rows={3}
            fullWidth
            placeholder="Description"
            sx={{ width: "100%", bgcolor: "white" }}
          />
        </Box>
        {/* Info Section */}
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          <Typography variant="body2">Addition info</Typography>
          <TextField
            multiline
            rows={3}
            fullWidth
            placeholder="Addition info"
            sx={{ width: "100%", bgcolor: "white" }}
          />
        </Box>
        {/* Coordinator Section */}
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2">Coordinator</Typography>
          <TextField
            fullWidth
            placeholder="Coordinator"
            sx={{ width: "100%", bgcolor: "white" }}
          />
        </Box>
        {/* Workflow Section */}
        <WorkflowBlock />
        {/* Documents Section */}
        <FileUploadBlock />
        {/* Buttons Section */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            onClick={handleCancelProjectClick}
            sx={{
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              borderColor: "#E8E8E8",
            }}
          >
            Cancel
          </Button>
          <UniversalButton onClick={handleCreateProjectClick} startIcon={null}>
            Create project{" "}
          </UniversalButton>
        </Box>
      </Box>
    </Box>
  );
}

export default NewProject;
