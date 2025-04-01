import React from "react";
import { Box, Card, Typography } from "@mui/material";
import DateSelector from "../DateSelector";

const TimeSavedCard = ({ data }) => {
  return (
    <Card
      sx={{
        p: 2.5,
        borderRadius: "5px",
        mb: 4,
        width: "333px",
        height: "110px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1.25,
          width: "95%",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Time saved</Typography>
        <DateSelector data={data} />
      </Box>

      <Typography variant="h4" color="#969696">
        {data.value}
      </Typography>

      <Typography variant="caption">{data.description}</Typography>
    </Card>
  );
};

export default TimeSavedCard;
