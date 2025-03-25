import React, { useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectsOverviewCard from "../components/CardWidgets/ProjectsOverviewCard";
import DocumentsCard from "../components/CardWidgets/DocumentsCard";
import PerformanceCard from "../components/CardWidgets/PerformanceCard";
import TimeSavedCard from "../components/CardWidgets/TimeSavedCard";
import TimeTrackedCard from "../components/CardWidgets/TimeTrackedCard";
import WordsTranslatedCard from "../components/CardWidgets/WordsTranslatedCard";
import ModelCard from "../components/CardWidgets/ModelCard";
import DiscussionCard from "../components/CardWidgets/DiscussionCard";
import IncomingProjectsCard from "../components/CardWidgets/IncomingProjectsCard";

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
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

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
          top: 0,
          right: 0,
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
  const [cards, setCards] = useState([
    {
      id: "1",
      component: <ProjectsOverviewCard data={projectsData} />,
      size: { xs: 12, sm: 6, md: 4 },
    },
    {
      id: "3",
      component: <PerformanceCard data={performanceData} />,
      size: { xs: 12, sm: 6, md: 4 },
    },
    {
      id: "5",
      component: <ModelCard data={documentData} />,
      size: { xs: 12, sm: 6, md: 6 },
    },
    {
      id: "2",
      component: <DocumentsCard data={documentData} />,
      size: { xs: 12, sm: 6, md: 4 },
    },
    {
      id: "4",
      component: <DiscussionCard data={projectsData} />,
      size: { xs: 12, sm: 6, md: 6 },
    },
    {
      id: "6",
      component: <IncomingProjectsCard data={projectsData} />,
      size: { xs: 12, sm: 6, md: 4 },
    },
    {
      id: "7",
      component: <TimeSavedCard data={timeData.saved} />,
      size: { xs: 12, sm: 6, md: 4 },
    },
    {
      id: "8",
      component: <TimeTrackedCard data={timeData.tracked} />,
      size: { xs: 12, sm: 6, md: 4 },
    },
    {
      id: "9",
      component: <WordsTranslatedCard data={timeData.translated} />,
      size: { xs: 12, sm: 6, md: 6 },
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
    <Box sx={{ p: 2, height: "100vh" }}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={cards.map((card) => card.id)}
          strategy={rectSortingStrategy}
        >
          <Grid container spacing={2} direction="row">
            {cards.map((card) => (
              <Grid
                key={card.id}
                item
                xs={card.size.xs}
                sm={card.size.sm}
                md={card.size.md}
              >
                <CardWrapper id={card.id}>{card.component}</CardWrapper>
              </Grid>
            ))}
          </Grid>
        </SortableContext>
      </DndContext>
    </Box>
  );
};

export default Dashboard;
