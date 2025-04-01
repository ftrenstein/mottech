import { Box, Paper, Stack, Typography, Card } from "@mui/material";
import React from "react";

const IncomingProjectsCard = ({ data }) => {
  // IncomingProjects items data

  return (
    <Card
      sx={{
        p: 2.5,
        height: 140,
        borderRadius: "5px",
        width: 333,
        boxSizing: "border-box",
        mb: 4,
      }}
    >
      <Stack>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Incoming Projects
        </Typography>

        <Stack spacing={3}>
          {data.projects.map((project, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography variant="body2">{project}</Typography>
              <Box width={8} height={8} bgcolor="#e82f03" borderRadius="50%" />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};
export default IncomingProjectsCard;
