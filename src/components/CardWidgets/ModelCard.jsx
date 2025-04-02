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
import { motion } from "framer-motion";

// Data for the training blocks
const trainingBlocksData = [
  // Row 1: 8 full opacity, 2 reduced opacity
  [1, 1, 1, 1, 1, 1, 1, 1, 0.6, 0.6],
  // Row 2: 7 full opacity, 3 reduced opacity
  [1, 1, 1, 1, 1, 1, 1, 0.6, 0.6, 0.6],
  // Row 3: 7 full opacity, 3 reduced opacity
  [1, 1, 1, 1, 1, 1, 1, 0.6, 0.6, 0.6],
];

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const stepTime = 10;
    const stepIncrement = Math.max(1, Math.ceil(value / 100));
    let current = 0;

    const timer = setInterval(() => {
      current = Math.min(current + stepIncrement, value);
      setCount(current);
      if (current >= value) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Typography variant="h4" fontWeight="600">
        {count}
      </Typography>
    </motion.div>
  );
};

const ModelCard = ({ data }) => {
  return (
    <Card
      sx={{ borderRadius: "5px", height: "100%", mb: 4, width: "333px", p: 3 }}
    >
      <CardContent sx={{ p: 2.5 }}>
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
              sx={{ textTransform: "none", minWidth: "auto" }}
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
                    <motion.div
                      key={`block-${rowIndex}-${blockIndex}`}
                      initial={{ opacity: 0, x: -20, scale: 0.9 }} // Начальное состояние (скрыт, левее)
                      animate={{ opacity, x: 0, scale: 1 }} // Анимация появления
                      transition={{
                        duration: 0.05,
                        delay: (rowIndex * 10 + blockIndex) * 0.03,
                        ease: "easeOut",
                      }}
                    >
                      <Box
                        width={28}
                        height={28}
                        bgcolor="#3778a6"
                        borderRadius="5px"
                        sx={{ opacity }}
                      />
                    </motion.div>
                  ))}
                </Stack>
              ))}
            </Stack>

            {/* Progress information */}
            <Box mt={2.5}>
              <Box display="flex" alignItems="baseline">
                <AnimatedNumber value={data.modelTraining} />
                <Typography variant="h4" fontWeight="600" ml={0.5}>
                  %
                </Typography>
              </Box>
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
