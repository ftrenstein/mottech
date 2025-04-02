import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import { useProjectContext } from "../context/ProjectContext";
import CheckIcon from "@mui/icons-material/Check";

export default function ProjectProgressCard({ id }) {
  const { projects, updateProjectParameters } = useProjectContext();
  const [loading, setLoading] = useState(false);

  console.log("Project ID progress:", id);
  const projectId = parseInt(id, 10);
  const project = projects.find((proj) => proj.id === projectId);

  useEffect(() => {
    if (
      project?.documents?.some(
        (document) => document.status === "On AI translation"
      )
    ) {
      setLoading(true);

      const count =
        project.documents?.filter(
          (document) => document.status === "On AI translation"
        ).length || 0; // Default to 0 if undefined

      const timer = setTimeout(() => {
        setLoading(false);

        // Обновление документов
        updateProjectParameters(projectId, {
          documents: project.documents.map((document) =>
            document.status === "On AI translation"
              ? {
                  ...document,
                  status: "On linguist verification",
                  progress: [true, "partial", false, false, false],
                }
              : document
          ),
        });
      }, 3000 * count);

      return () => clearTimeout(timer);
    }
  }, [project, projectId, updateProjectParameters]);

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
    {
      label: "AI translation",
      value:
        project.documents?.filter(
          (document) => document.status === "On AI translation"
        ).length || 0,
      loading: loading,
      displayValue:
        project.documents?.filter(
          (document) => document.status === "On AI translation"
        ).length === 0 ? (
          <Box
            sx={{
              width: "100%",
              height: 41,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 40,
                fontWeight: 600,
                color: "#E0E0E0",
                mt: 1,
              }}
            >
              <CheckIcon fontSize="inherit" color="grey" />
            </Typography>
          </Box>
        ) : (
          project.documents?.filter(
            (document) => document.status === "On AI translation"
          ).length || 0
        ),
    },
    {
      label: "Linguist verification",
      value:
        project.documents?.filter(
          (document) => document.status === "On linguist verification"
        ).length || 0,
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
            <Typography
              fontSize={36}
              fontWeight={600}
              color="black"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              {item.label === "AI translation" ? (
                <>
                  {item.displayValue}
                  {loading && (
                    <CircularProgress
                      size={28}
                      sx={{
                        color: "#3778A6",
                      }}
                    />
                  )}
                </>
              ) : (
                item.value
              )}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography fontSize={12} fontWeight={400} color="black">
                {item.label}
              </Typography>
            </Box>
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
