import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

const TimeTrackedCard = ({ data }) => {
  return (
    <Paper sx={{ p: 2.5, borderRadius: "5px", width: "333px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1.25,
          width: "100%",
          gap: 1,
        }}
      >
        <Typography variant="caption" fontWeight="600">
          Time tracked
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: 0.5 }}
        >
          <Typography variant="period">{data.period}</Typography>
          <ExpandMore sx={{ fontSize: 15 }} />
        </Box>
      </Box>
      <Typography variant="h4" fontWeight="600" color="#969696">
        {data.value}
      </Typography>
      <Typography variant="caption">{data.description}</Typography>
    </Paper>
  );
};

export default TimeTrackedCard;
