import React from "react";
import {
  Box,
  Card,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import SearchBar from "../components/SearchBar";
import ListDoc from "../components/List";

import ongoingData from "../data/Ongoindata";
import UniversalButton from "../components/UniversalButton";
import { useNavigate } from "react-router-dom";
import { useProjectContext } from "../context/ProjectContext";

function Projects() {
  const { projects, addProject, deleteProject, isLoading } =
    useProjectContext();
  const navigate = useNavigate();
  // const [projects, setProjects] = React.useState(ongoingData.projects);
  const barData = React.useMemo(
    () => [
      { width: 53, height: 3, top: 56, left: 0, opacity: 0.5 },
      { width: 54, height: 32, top: 27, left: 64, opacity: 0.6 },
      { width: 53, height: 59, top: 0, left: 128, opacity: 0.7 },
      { width: 54, height: 13, top: 46, left: 192, opacity: 0.8 },
      { width: 53, height: 8, top: 51, left: 257, opacity: 1 },
    ],
    []
  );
  const [filter, setFilter] = React.useState("ongoing");
  // if (isLoading) return <p>Загрузка проектов...</p>;

  console.log("Ongoing Projects:", ongoingData.projects);
  console.log("Projects:", projects);
  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  const filterOptions = ["ongoing", "previous"];

  const handleNewProjectClick = () => {
    navigate(`/new-project`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "1280px",
        height: "100%",

        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4">Projects</Typography>
        <UniversalButton onClick={handleNewProjectClick}>
          New project
        </UniversalButton>
      </Box>
      <Card sx={{ p: 5, borderRadius: "5px", border: "1px solid #e8e8e8" }}>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600, fontSize: "0.75rem" }}
        >
          Projects Overview
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: 600, fontSize: "2.25rem" }}
          >
            40
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
            projects in progress
          </Typography>
        </Box>
        <Box
          sx={{ position: "relative", width: 310, height: 59, mt: 2, mb: 2 }}
        >
          {barData.map((bar, index) => (
            <Box
              key={index}
              sx={{
                width: `${bar.width}px`,
                height: `${bar.height}px`,
                position: "absolute",
                top: `${bar.top}px`,
                left: `${bar.left}px`,
                opacity: bar.opacity,
                backgroundColor: "#3778a6",
                borderRadius: "5px",
              }}
            />
          ))}
        </Box>
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          width: "100%",
        }}
      >
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={handleFilterChange}
          aria-label="filter options"
          sx={{
            height: 40,
            width: "auto",
            "& .MuiToggleButtonGroup-grouped": {
              border: "1px solid #e8e8e8",
              borderRadius: "0px 5px 5px 0px",
              borderLeft: 0,
              padding: "10px",
              fontSize: "14px",
              textTransform: "none",
              "&:not(:first-of-type)": { borderLeft: 0 },
            },
          }}
        >
          {filterOptions.map((value) => (
            <ToggleButton
              key={value}
              value={value}
              sx={{
                bgcolor: filter === value ? "white" : "#f5f5f5",
                color: "black",
                "&.Mui-selected": { bgcolor: "white" },
              }}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <SearchBar
          placeholder="Search projects"
          onSearch={(value) => console.log(value)}
          sx={{ flexGrow: 1 }}
        />
      </Box>
      <Box>
        <ListDoc
          titles={[
            "Project",
            "Starting date",
            "Languages",
            "Completed",
            "Total docs",
          ]}
          rows={projects.map((project) => ({
            id: project.id,
            name: project.name,
            starting_date: project.starting_date,
            total_languages: project.total_languages,
            completed: project.completed,
            total_documents: project.total_documents,
          }))}
          columns={[
            "name",
            "starting_date",
            "total_languages",
            "completed",
            "total_documents",
          ]}
          onRowClick={(row) => navigate(`/projectOverview/${row.id}`)}
        />
      </Box>
    </Box>
  );
}

export default Projects;
