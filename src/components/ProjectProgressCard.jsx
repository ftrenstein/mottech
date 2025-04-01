import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import projects from "../../public/data/projects.json";
import { useProjectContext } from "../context/ProjectContext";

export default function ProjectProgressCard({ id }) {
  const { projects } = useProjectContext();
  console.log("Project ID progress:", id);
  const projectId = parseInt(id, 10);
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    console.error(`Project with ID ${projectId} not found.`);
    console.log("Project data:", projects);
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          p: 2,
          bgcolor: "white",
          borderRadius: 1,
          border: "1px solid #E8E8E8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography fontSize={14} fontWeight={600} color="red">
          Project not found.
        </Typography>
      </Box>
    );
  }

  const projectProgresStatuses = [
    { label: "AI translation", value: project.ai_translation || 0 },
    {
      label: "Linguist verification",
      value: project.linguist_verification || 0,
    },
    { label: "Translation", value: project.translation || 0 },
    { label: "Validation", value: project.validation || 0 },
    { label: "Design", value: project.design || 0 },
  ];

  const total = projectProgresStatuses.reduce(
    (acc, item) => acc + item.value,
    0
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: 2,
        bgcolor: "white",
        borderRadius: 1,
        border: "1px solid #E8E8E8",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography fontSize={12} fontWeight={600} color="black">
        Project Overview
      </Typography>
      <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
        {projectProgresStatuses.map((item) => (
          <Box
            key={item.label}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Typography fontSize={36} fontWeight={600} color="black">
              {item.value}
            </Typography>
            <Typography fontSize={12} fontWeight={400} color="black">
              {item.label}
            </Typography>
          </Box>
        ))}
        <Box
          sx={{
            width: 72,
            height: 1,
            transform: "rotate(90deg)",
            bgcolor: "#E8E8E8",
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography fontSize={36} fontWeight={600} color="black">
            0/{total}
          </Typography>
          <Typography fontSize={12} fontWeight={400} color="black">
            Done
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(total / 100) * 100} // Adjust this calculation as needed
            color="#3778a6"
            sx={{
              width: 64,
              height: 3,
              bgcolor: "#E8E8E8",
              borderRadius: 1,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#3778A6",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
