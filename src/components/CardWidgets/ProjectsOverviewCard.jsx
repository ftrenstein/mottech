import React from "react";
import { Box, Card, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UniversalButton from "../UniversalButton";
import { motion } from "framer-motion";

const BarChart = ({ barData }) => (
  <Box sx={{ position: "relative", width: 310, height: 59 }}>
    {barData.map((bar, index) => (
      <motion.div
        key={index}
        initial={{
          opacity: 0, // Начальная непрозрачность (скрыт)
          width: 0, // Начальная ширина (0)
          height: 0, // Начальная высота (0)
          top: `${bar.top}px`, // Начальная позиция сверху
          left: `${bar.left}px`, // Начальная позиция слева
        }}
        animate={{
          opacity: bar.opacity, // Конечная непрозрачность
          width: `${bar.width}px`, // Конечная ширина
          height: `${bar.height}px`, // Конечная высота
        }}
        transition={{
          duration: 0.5, // Быстрая анимация (0.5 секунд)
          delay: index * 0.2, // Задержка для каждого блока (по порядку)
          ease: "easeOut", // Плавный выход
        }}
        style={{
          position: "absolute",
          top: `${bar.top}px`,
          left: `${bar.left}px`,
          backgroundColor: "#3778a6",
          borderRadius: "5px",
        }}
      />
    ))}
  </Box>
);

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

const ProjectStats = ({ inProgress, archived }) => (
  <Box
    sx={{
      display: "flex",
      width: "333px",
      height: "63px",
      gap: "120px",
      position: "absolute",
      top: "85px",
      justifyContent: "space-between",
    }}
  >
    <Box sx={{ flex: 1 }}>
      <AnimatedNumber value={inProgress} />
      <Typography variant="caption">projects in progress</Typography>
    </Box>
    <Box sx={{ flex: 1, justifyContent: "space-between" }}>
      <AnimatedNumber value={archived} />
      <Typography variant="caption">archived tasks</Typography>
    </Box>
  </Box>
);

const ProjectsOverviewCard = ({ data }) => {
  const navigate = useNavigate();
  const barData = [
    { width: 53, height: 3, top: 56, left: 0, opacity: 0.5 },
    { width: 54, height: 32, top: 27, left: 64, opacity: 0.6 },
    { width: 53, height: 59, top: 0, left: 128, opacity: 0.7 },
    { width: 54, height: 13, top: 46, left: 192, opacity: 0.8 },
    { width: 53, height: 8, top: 51, left: 257, opacity: 1 },
  ];
  const handleNewProjectClick = () => {
    navigate("/new-project");
  };

  return (
    <Card sx={{ p: 2.5, height: "350px", width: "333px", mb: 4 }}>
      <Stack spacing={2.5}>
        <Typography variant="h6">Projects Overview</Typography>
        <Box sx={{ height: "148px", position: "relative" }}>
          <BarChart barData={barData} />
          <ProjectStats inProgress={data.inProgress} archived={data.archived} />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 0.5,
            }}
          >
            <Typography variant="caption" fontWeight="600">
              Last projects
            </Typography>
            <Button
              sx={{
                color: "#3778a6",
                fontSize: "0.75rem",
                fontFamily: "'Inter-Regular', Helvetica",
                fontWeight: "normal",
              }}
              onClick={() => navigate("/projects")}
            >
              See all projects
            </Button>
          </Box>
          <Stack spacing={0.5}>
            {data.projects.map((project, index) => (
              <Typography key={index} variant="caption">
                {project}
              </Typography>
            ))}
          </Stack>
        </Box>
        <UniversalButton onClick={handleNewProjectClick}>
          New project
        </UniversalButton>
      </Stack>
    </Card>
  );
};

export default ProjectsOverviewCard;
