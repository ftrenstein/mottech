import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ellipse from "../../assets/elipse.svg";

const AnimatedNumber = ({ value }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Typography variant="h4" fontWeight="600">
      {value}
    </Typography>
  </motion.div>
);

const Gauge = ({ time, description, altText }) => (
  <Box sx={{ flex: 1 }}>
    <Box
      sx={{
        width: "146px",
        height: "73px",
        position: "relative",
        overflow: "hidden", // Убедитесь, что изображение не выходит за пределы
      }}
    >
      <img
        src={ellipse}
        alt={altText}
        style={{
          position: "absolute",
          width: "133px",
          height: "73px",
          opacity: 0, // Начинаем с невидимости
          animation: "fadeIn 1s forwards", // Добавляем анимацию
        }}
      />
    </Box>
    <Box sx={{ mt: 1.25 }}>
      <AnimatedNumber value={time} />
      <Typography variant="caption">{description}</Typography>
    </Box>

    {/* Стили для анимации */}
    <style>
      {`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}
    </style>
  </Box>
);

const FastestMembers = ({ members }) => (
  <Box>
    <Typography
      variant="caption"
      fontWeight="600"
      sx={{ mb: 0.5, display: "block" }}
    >
      The fastest members
    </Typography>
    <Stack spacing={0.5}>
      {members.map((member, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="caption">{member.translator}</Typography>
          <Typography variant="caption">{member.validator}</Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);

const PerformanceCard = ({ data }) => {
  return (
    <Card
      sx={{
        p: 2.5,
        height: "100%",
        borderRadius: "5px",
        mb: 4,
        width: "333px",
      }}
    >
      <Stack spacing={2.5}>
        <Typography variant="h6">Performance</Typography>
        {/* Performance Metrics */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: "100%",
            gap: 1,
          }}
        >
          <Gauge
            time={data.translation.time}
            description={data.translation.description}
            altText="Translation time gauge"
          />
          <Gauge
            time={data.validation.time}
            description={data.validation.description}
            altText="Validation time gauge"
          />
        </Box>
        {/* Fastest Members */}
        <FastestMembers members={data.fastestMembers} />
      </Stack>
    </Card>
  );
};

export default PerformanceCard;
