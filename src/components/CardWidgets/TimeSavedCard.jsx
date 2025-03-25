import React from "react";
import { Box, Card, Typography } from "@mui/material";
import DateSelector from "../DateSelector";

const TimeSavedCard = ({ data }) => {
  return (
    <Card sx={{ p: 2.5, borderRadius: "5px", width: "333px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1.25,
          width: "100%",
        }}
      >
        <Typography variant="caption" fontWeight="600">
          Time saved
        </Typography>
        <DateSelector data={data} />
      </Box>

      <Typography variant="h4" fontWeight="600" color="#969696">
        {data.value}
      </Typography>

      <Typography variant="caption">{data.description}</Typography>
    </Card>
  );
};

export default TimeSavedCard;
