import React, { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ProjectsOverviewCard from "../components/CardWidgets/ProjectsOverviewCard";
import DocumentsCard from "../components/CardWidgets/DocumentsCard";
import PerformanceCard from "../components/CardWidgets/PerformanceCard";
import TimeSavedCard from "../components/CardWidgets/TimeSavedCard";
import TimeTrackedCard from "../components/CardWidgets/TimeTrackedCard";
import WordsTranslatedCard from "../components/CardWidgets/WordsTranslatedCard";
import ModelCard from "../components/CardWidgets/ModelCard";
import DiscussionCard from "../components/CardWidgets/DiscussionCard";
import IncomingProjectsCard from "../components/CardWidgets/IncomingProjectsCard";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";

import {
  projectsData,
  documentData,
  timeData,
  performanceData,
} from "../data/dashboardData";

import {
  DndContext,
  closestCorners,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

// Обертка для карточки, обеспечивающая drag-n-drop
const CardWrapper = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? "grabbing" : "pointer",
    position: "relative",
    zIndex: isDragging ? 1000 : "auto",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <Box
        {...listeners}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          width: 30,
          height: 30,
          cursor: "grab",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden", // Ensure the icon stays within the card boundaries
          maxWidth: "90%", // Prevent the icon from exceeding the container width
          maxHeight: "90%", // Prevent the icon from exceeding the container height

          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
          zIndex: 2,
        }}
      >
        <DragIndicatorIcon
          sx={{
            color: "grey",
            fontSize: "16px",
            width: "90%", // Заставляем иконку занимать всю ширину контейнера
            height: "100%", // Заставляем иконку занимать всю высоту контейнера
            padding: "4px", // Добавляем отступы внутри контейнера
            boxSizing: "border-box", // Учитываем padding в размерах
          }}
        />
      </Box>
      {children}
    </div>
  );
};

export const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [cards, setCards] = useState([
    {
      id: "1",
      component: <ProjectsOverviewCard data={projectsData} />,
    },
    {
      id: "2",
      component: <DocumentsCard data={documentData} />,
    },
    {
      id: "3",
      component: (
        <Link to="/reports" style={{ textDecoration: "none" }}>
          <PerformanceCard data={performanceData} />
        </Link>
      ),
    },
    {
      id: "4",
      component: <DiscussionCard data={projectsData} />,
    },
    {
      id: "5",
      component: (
        <Link to="/reports" style={{ textDecoration: "none" }}>
          <ModelCard data={documentData} />
        </Link>
      ),
    },
    {
      id: "6",
      component: <IncomingProjectsCard data={projectsData} />,
    },
    {
      id: "7",
      component: (
        <Link to="/reports" style={{ textDecoration: "none" }}>
          <TimeSavedCard data={timeData.saved} />
        </Link>
      ),
    },
    {
      id: "8",
      component: (
        <Link to="/reports" style={{ textDecoration: "none" }}>
          <TimeTrackedCard data={timeData.tracked} />
        </Link>
      ),
    },
    {
      id: "9",
      component: (
        <Link to="/reports" style={{ textDecoration: "none" }}>
          <WordsTranslatedCard data={timeData.translated} />
        </Link>
      ),
    },
  ]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = cards.findIndex((card) => card.id === active.id);
    const newIndex = cards.findIndex((card) => card.id === over.id);
    setCards(arrayMove(cards, oldIndex, newIndex));
  };

  return (
    <Box sx={{ p: 3, maxWidth: "1100px" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Dashboard
      </Typography>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={cards.map((card) => card.id)}>
          <Box
            component={Masonry}
            breakpointCols={{
              default: 3, // 4 колонки по умолчанию
              1200: 3, // 3 колонки при ширине экрана < 1200px
              900: 2, // 2 колонки при ширине экрана < 900px
              600: 1, // 1 колонка при ширине экрана < 600px
            }}
            sx={{
              display: "flex",
              marginLeft: "-16px", // убираем общий отступ
              width: "auto",
              "& > div": {
                paddingLeft: "16px", // добавляем отступы внутри колонок
                backgroundClip: "padding-box",
              },
            }}
          >
            {cards.map((card) => (
              <CardWrapper
                key={card.id}
                id={card.id}
                sx={{
                  padding: "16px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "16px",
                }}
              >
                {card.component}
              </CardWrapper>
            ))}
          </Box>
        </SortableContext>
      </DndContext>
    </Box>
  );
};

export default Dashboard;
