import { Box, Paper, Stack, Typography, Card } from "@mui/material";
import React from "react";

const DiscussionCard = ({ data }) => {
  return (
    <Card sx={{ p: 2.5, height: "auto", borderRadius: "5px", width: "333px" }}>
      <Stack spacing={2.5}>
        <Typography variant="h6" fontWeight="600">
          Discussion
        </Typography>
      </Stack>
      <Stack
        direction="column"
        spacing={0}
        sx={{
          width: "100%",
        }}
      >
        {data.projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              py: 2,
            }}
          >
            <Typography
              sx={{
                flexGrow: 1,
                fontFamily: "'Inter', Helvetica",
                fontWeight: 400,
                fontSize: "0.75rem",
                color: "black",
              }}
            >
              {project}
            </Typography>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                bgcolor: "#e82f03",
                borderRadius: "50%",
              }}
            />
          </Box>
        ))}
      </Stack>
    </Card>
  );
};

export default DiscussionCard;
