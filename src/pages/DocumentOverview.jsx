import React from "react";
import { Box, Paper, Typography, styled } from "@mui/material";
import { translations } from "../data/documentDataOverview"; // Ensure translations is structured as an array of rows
import RightPanel from "../components/RightPanel";
import { useProjectContext } from "../context/ProjectContext";

const StyledContainer = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const RowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const DocumentOverview = () => {
  const { projects, addProject, deleteProject, isLoading } =
    useProjectContext();
  // Ensure translations is an array of rows
  const rows = Array.isArray(translations) ? translations : [translations];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        gap: 2,
        mb: 4,
      }}
    >
      {/* <Typography variant="h4" sx={{ ml: 3 }}>
        {` Default document name`} {/* Display project name */}
      {/* </Typography> */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          overflow: "hidden", // Ensure no scrollbars for the entire container
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "auto", // Adjust height to fit content
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ width: "430px" }}>
              Source
            </Typography>
            <Typography variant="h6">Translation</Typography>
          </Box>
          {rows.length === 0 ? ( // Fallback for empty data
            <Typography variant="body2" color="textSecondary">
              No translations available.
            </Typography>
          ) : (
            <StyledContainer>
              {rows.map((row, index) => (
                <RowContainer key={index}>
                  {/* Source Column */}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Typography variant="body2">{row.source}</Typography>
                  </Box>

                  {/* Translation Column */}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Typography variant="body2">{row.portuguese}</Typography>
                  </Box>
                </RowContainer>
              ))}
            </StyledContainer>
          )}
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
};

export default DocumentOverview;
