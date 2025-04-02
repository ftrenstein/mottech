import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { motion } from "framer-motion"; // Import motion for animation
import DateSelector from "../DateSelector";

// AnimatedNumber component
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

  const formattedCount = count.toLocaleString(); // Add thousands separator

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

      <AnimatedNumber value={data.value} />

      <Typography variant="caption">{data.description}</Typography>
    </Card>
  );
};

export default TimeSavedCard;
