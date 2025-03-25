import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  List,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import ProjectProgressCard from "../components/ProjectProgressCard";
import { Search } from "@mui/icons-material";
import SearchBar from "../components/SearchBar";
import DocumentTable from "../components/DocumentTable";
import ToggleButtons from "../components/ToggleButtons";

function ProjectOverview() {
  const navigate = useNavigate();

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
          mb: 2,
        }}
      >
        <Typography
          sx={{ flex: 1, fontSize: 30, fontWeight: 400, fontFamily: "Inter" }}
        >
          {"->Project Name"}
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
      <Box sx={{ flexDirection: "column", width: "70%" }}>
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
    </Box>
  );
}

export default ProjectOverview;
