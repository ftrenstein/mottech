import SearchIcon from "@mui/icons-material/Search";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import React from "react";
import { documentData, categoryOptions } from "../data/documentData";
import ListDoc from "../components/List";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ongoingData from "../data/Ongoindata";

const Documents = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredDocuments =
    selectedCategory === "All"
      ? ongoingData.projects[0].documents
      : ongoingData.projects[0].documents.filter(
          (document) => document.category === selectedCategory
        );

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", width: "1280px", gap: 2 }}
    >
      {/* Header */}
      <Typography variant="h4" sx={{ mb: 3 }}>
        Documents
      </Typography>

      <SearchBar />

      {/* Category Filter */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "1280px",
          gap: 2,
          p: 2,
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            fontSize: theme.typography.body2.fontSize,
          }}
        >
          Category
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {categoryOptions.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => handleCategoryClick(category)}
              sx={{
                fontSize: theme.typography.body2.fontSize,
                color:
                  category === selectedCategory
                    ? theme.palette.background.paper
                    : theme.palette.text.primary,
                bgcolor:
                  category === selectedCategory
                    ? theme.palette.background.mainblue
                    : theme.palette.background.paper,
                border:
                  category === selectedCategory
                    ? "none"
                    : `1px solid ${theme.palette.divider}`,
                borderRadius: theme.shape.borderRadius,
                px: 1,
                py: 0.5,
                height: "auto",
              }}
            />
          ))}
        </Box>
      </Box>

      <ListDoc
        titles={["Documents", "Category", "Due date", "Project"]}
        rows={filteredDocuments.map((document) => ({
          id: document.id,
          name: document.name,
          category: document.category,
          due_date: document.due_date,
          project: ongoingData.projects[0].name,
        }))}
        columns={["name", "category", "due_date", "project"]}
        onRowClick={() => navigate(`/documentOverview`)}
      />
    </Box>
  );
};

export default Documents;
