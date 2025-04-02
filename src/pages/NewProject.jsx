import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import WorkflowBlock from "../components/WorkflowBlock";
import UniversalButton from "../components/UniversalButton";
import FileUploadBlock from "../components/FileUploadBlock";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProjectContext } from "../context/ProjectContext";

function NewProject() {
  const { projects, addProject, deleteProject, isLoading } =
    useProjectContext();
  const navigate = useNavigate();
  const [brand, setBrand] = useState("");
  const [subbrand, setSubbrand] = useState("");
  const [product, setProduct] = useState("");
  const [projectName, setProjectName] = useState("New project");
  const [uploadedFiles, setUploadedFiles] = useState([]); // State to store files and their languages

  const handleFieldChange = () => {
    setProjectName(`${brand} ${subbrand} ${product}`.trim());
  };

  const handleCancelProjectClick = () => {
    navigate("/projects");
  };

  const handleCreateProjectClick = () => {
    const newProject = {
      id: Date.now(), // Unique ID for the project
      name: projectName || "New project",
      starting_date: new Date().toISOString(),
      total_languages: uploadedFiles.reduce(
        (acc, file) => acc + file.languages.length,
        0
      ),
      total_documents: uploadedFiles.length,
      completed: 0, // Default value
      ai_translation: uploadedFiles.length, // Default value
      linguist_verification: 0, // Default value
      translation: 0, // Default value
      validation: 0, // Default value
      design: 0, // Default value
      documents: uploadedFiles.map((file) => ({
        id: file.id,
        name: file.file.name,
        due_date: new Date(Date.now() + 259200000).toLocaleString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }), // Today + 3 days
        status: "On AI translation",
        languages: file.languages,
        created_at: new Date().toISOString(),
        description: "",
        coordinator: "",
        progress: ["partial", false, false, false, false],
      })),
    };

    addProject(newProject);

    console.log("New Project Created:", newProject);

    navigate(`/projectOverview/${newProject.id}`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh", // Занимает всю высоту экрана
        display: "flex",
        justifyContent: "center", // Центрирование по горизонтали
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
          boxShadow: 3, // Тень для контейнера
        }}
      >
        {/* Parameter Section */}
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            gap: 1,
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
            <TextField
              fullWidth
              placeholder="Brand"
              sx={{ flex: 1 }}
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
                handleFieldChange();
              }}
            />
            <TextField
              fullWidth
              placeholder="Subbrand"
              sx={{ flex: 1 }}
              value={subbrand}
              onChange={(e) => {
                setSubbrand(e.target.value);
                handleFieldChange();
              }}
            />
            <TextField
              fullWidth
              placeholder="Product"
              sx={{ flex: 1 }}
              value={product}
              onChange={(e) => {
                setProduct(e.target.value);
                handleFieldChange();
              }}
            />
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
        <FileUploadBlock onFilesChange={setUploadedFiles} />
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
