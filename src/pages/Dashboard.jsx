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
    cursor: isDragging ? "grabbing" : "grab",
    position: "relative",
  };

  return (
    <Box ref={setNodeRef} style={style} {...attributes}>
      <Box
        {...listeners}
        sx={{
          position: "absolute",
          top: 5,
          right: 5,
          width: 20,
          height: 20,
          cursor: "grab",
          backgroundColor: "rgba(151, 146, 146, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DragIndicatorIcon sx={{ color: "grey" }} />
      </Box>
      {children}
    </Box>
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
      size: "large",
    },
    {
      id: "2",
      component: <DocumentsCard data={documentData} />,
      size: "small",
    },
    {
      id: "3",
      component: <PerformanceCard data={performanceData} />,
      size: "large",
    },
    {
      id: "4",
      component: <DiscussionCard data={projectsData} />,
      size: "small",
    },
    { id: "5", component: <ModelCard data={documentData} />, size: "large" },
    {
      id: "6",
      component: <IncomingProjectsCard data={projectsData} />,
      size: "small",
    },
    {
      id: "7",
      component: <TimeSavedCard data={timeData.saved} />,
      size: "small",
    },
    {
      id: "8",
      component: <TimeTrackedCard data={timeData.tracked} />,
      size: "small",
    },
    {
      id: "9",
      component: <WordsTranslatedCard data={timeData.translated} />,
      size: "small",
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
    <Box sx={{ p: 3 }}>
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
              default: 4, // 4 колонки по умолчанию
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
                // gap: "16px",
                // flexDirection: "column",
                // padding: "16px",
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

  //     <Box sx={{ p: 3 }}>
  //       <Typography variant="h4" sx={{ mb: 3 }}>
  //         Dashboard
  //       </Typography>
  //       <DndContext
  //         sensors={sensors}
  //         collisionDetection={closestCorners}
  //         onDragEnd={handleDragEnd}
  //       >
  //         <SortableContext items={cards.map((card) => card.id)}>
  //           <Box
  //             sx={{
  //               display: "grid",
  //               gridTemplateColumns: "repeat(auto-fill, 330px)",
  //               gap: "16px", // Это гарантирует одинаковые отступы ВСЕГДА
  //               gridAutoRows: "min-content", // Позволяет карточкам быть разной высоты
  //               alignItems: "start", // Выравниваем по верхнему краю
  //               gridAutoFlow: "dense",
  //             }}
  //           >
  //             {cards.map((card) => (
  //               <Box
  //                 key={card.id}
  //                 sx={
  //                   {
  //                     // gridRow: card.size === "large" ? "span 2" : "span 1",
  //                   }
  //                 }
  //               >
  //                 <CardWrapper
  //                   id={card.id}
  //                   sx={{
  //                     padding: "16px",
  //                     boxSizing: "border-box",
  //                     height: "100%",
  //                     display: "flex",
  //                     flexDirection: "column",
  //                   }}
  //                 >
  //                   {card.component}
  //                 </CardWrapper>
  //               </Box>
  //             ))}
  //           </Box>
  //         </SortableContext>
  //       </DndContext>
  //     </Box>
  //   );
};

export default Dashboard;
