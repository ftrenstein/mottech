import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

// Data for the training blocks
const trainingBlocksData = [
  // Row 1: 8 full opacity, 2 reduced opacity
  [1, 1, 1, 1, 1, 1, 1, 1, 0.6, 0.6],
  // Row 2: 7 full opacity, 3 reduced opacity
  [1, 1, 1, 1, 1, 1, 1, 0.6, 0.6, 0.6],
  // Row 3: 7 full opacity, 3 reduced opacity
  [1, 1, 1, 1, 1, 1, 1, 0.6, 0.6, 0.6],
];

const ModelCard = ({ data }) => {
  return (
    <Card sx={{ borderRadius: "5px", height: "350px", width: "333px" }}>
      <CardContent sx={{ p: 2.5, "&:last-child": { pb: 0 } }}>
        <Stack spacing={0}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            m={0}
            p={0}
            mb={3}
          >
            <Typography variant="h6">Model</Typography>

            <Button
              endIcon={<ExpandMoreIcon sx={{ width: 15, height: 15 }} />}
              sx={{
                textTransform: "none",
                minWidth: "auto",
              }}
            >
              <Typography variant="period">English</Typography>
            </Button>
          </Box>
          {/* Training visualization section */}
          <Box width="310px">
            <Stack spacing={0.375} sx={{ opacity: 0.87 }}>
              {trainingBlocksData.map((row, rowIndex) => (
                <Stack key={`row-${rowIndex}`} direction="row" spacing={0.375}>
                  {row.map((opacity, blockIndex) => (
                    <Box
                      key={`block-${rowIndex}-${blockIndex}`}
                      width={28}
                      height={28}
                      bgcolor="#3778a6"
                      borderRadius="5px"
                      sx={{ opacity }}
                    />
                  ))}
                </Stack>
              ))}
            </Stack>

            {/* Progress information */}
            <Box mt={2.5}>
              <Typography
                variant="h3"
                fontWeight={600}
                fontFamily="'Inter-SemiBold', Helvetica"
              >
                {data.modelTraining}
              </Typography>
              <Typography
                fontSize="0.75rem"
                fontFamily="'Inter-Regular', Helvetica"
              >
                of the model is trained
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ModelCard;
