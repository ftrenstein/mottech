import React from "react";
import { Box, Paper, Typography } from "@mui/material";

import DateSelector from "../DateSelector";

const TimeTrackedCard = ({ data }) => {
  return (
    <Paper
      sx={{ p: 2.5, borderRadius: "5px", width: "333px", height: "110px" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1.25,
          width: "100%",
          gap: 1,
        }}
      >
        <Typography variant="h6">Time tracked</Typography>
        <DateSelector data={data} />
      </Box>
      <Typography variant="h4" color="#969696">
        {data.value}
      </Typography>
      <Typography variant="caption">{data.description}</Typography>
    </Paper>
  );
};

export default TimeTrackedCard;
