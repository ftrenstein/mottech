import React from "react";
import { Paper, Typography, Box } from "@mui/material";

const WordsTranslatedCard = ({ data }) => {
  return (
    <Paper
      sx={{ p: 2.5, borderRadius: "5px",mb: 4, width: "333px", height: "110px" }}
    >
      <Typography variant="h6" mb={3}>
        Words Translated
      </Typography>
      <Typography variant="h4" color="#969696">
        {data.value}
      </Typography>
      <Typography variant="caption">{data.description}</Typography>
    </Paper>
  );
};

export default WordsTranslatedCard;
