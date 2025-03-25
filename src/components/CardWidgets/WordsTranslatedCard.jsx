import React from "react";
import { Paper, Typography } from "@mui/material";

const WordsTranslatedCard = ({ data }) => {
  return (
    <Paper sx={{ p: 2.5, borderRadius: "5px", width: "333px" }}>
      <Typography
        variant="caption"
        fontWeight="600"
        sx={{ mb: 1.25, display: "block" }}
      >
        Words Translated
      </Typography>
      <Typography variant="h4" fontWeight="600" color="#969696">
        {data.value}
      </Typography>
      <Typography variant="caption">{data.description}</Typography>
    </Paper>
  );
};

export default WordsTranslatedCard;
