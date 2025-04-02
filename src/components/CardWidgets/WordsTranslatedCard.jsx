import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { motion } from "framer-motion"; // Import motion for animation

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const stepTime = 10;
    const stepIncrement = Math.max(1, Math.ceil(value / 100));
    let current = 0;

    const timer = setInterval(() => {
      current = Math.min(current + stepIncrement, value);
      setCount(current);
      if (current >= value) {
        clearInterval(timer);
        // Start even slower mechanical clock-like growth
        const slowGrowthTimer = setInterval(() => {
          setCount((prev) => prev + 1);
        }, 1000); // Slower increment every 5 seconds
        return () => clearInterval(slowGrowthTimer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  const formattedCount = count
    .toLocaleString()
    .split("")
    .map((char, index) => (
      <motion.span
        key={index}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {char}
      </motion.span>
    )); // Add animation to each digit for a mechanical effect

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Typography variant="h4" fontWeight="600" color="#969696">
        {formattedCount}
      </Typography>
    </motion.div>
  );
};

const WordsTranslatedCard = ({ data }) => {
  return (
    <Paper
      sx={{
        p: 2.5,
        borderRadius: "5px",
        mb: 4,
        width: "333px",
        height: "110px",
      }}
    >
      <Typography variant="h6" mb={3}>
        Words Translated
      </Typography>
      <AnimatedNumber value={data.value} />
      <Typography variant="caption">{data.description}</Typography>
    </Paper>
  );
};

export default WordsTranslatedCard;
