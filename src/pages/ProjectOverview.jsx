import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

import ProjectProgressCard from "../components/ProjectProgressCard";

import SearchBar from "../components/SearchBar";
import DocumentTable from "../components/DocumentTable";
import ToggleButtons from "../components/ToggleButtons";

import RightPanel from "../components/RightPanel";

function ProjectOverview() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // width: "1280px",
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

            // p: 3,
            // borderLeft: "1px solid #E8E8E8",
            // overflowY: "auto",
            // bgcolor: "white",
          }}
        >
          <RightPanel />
          {/* <ParticipantsCard /> {/* Add the ParticipantsCard component */}
          {/* <DiscussionCard /> Add the DiscussionCard component */}
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectOverview;
