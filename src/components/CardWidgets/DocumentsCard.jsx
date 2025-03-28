import React from "react";
import { Box, Card, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DocumentsCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ p: 2.5, height: "auto", borderRadius: "5px", width: "333px" }}>
      <Stack spacing={2.5}>
        <Typography variant="h6" fontWeight="600">
          Documents
        </Typography>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="caption" fontWeight="600">
              Last documents
            </Typography>
            <Button
              sx={{
                color: "#3778a6",
                fontSize: "0.75rem",
                fontFamily: "'Inter-Regular', Helvetica",
                fontWeight: "normal",
              }}
              onClick={() => navigate("/documents")}
            >
              See all documents
            </Button>
          </Box>
          <Stack spacing={0}>
            {data.documents.map((document, index) => (
              <Typography key={index} variant="caption">
                {document}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default DocumentsCard;
