import SearchIcon from "@mui/icons-material/Search";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import React from "react";
import { documentData, categoryOptions } from "../data/documentData";
import ListDoc from "../components/List";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { List, ListItem, ListItemText } from "@mui/material";

const Documents = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = React.useState(
    "PRODUCT DESCRIPTION"
  );
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    fetch("https://mot.tech/demo/data/tenants")
      .then((response) => response.json())
      .then((data) => setDocumentData(data))
      .catch((error) => console.error("Ошибка загрузки документов:", error));
  }, []);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", width: "1280px", gap: 2 }}
    >
      {/* Header */}
      <Typography variant="h4" sx={{ mb: 2 }}>
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

      {/* Documents Table */}
      <List>
        {documentData.map((document, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={document.tenantName}
              secondary={document.id}
            />
          </ListItem>
        ))}
      </List>

      {/* <ListDoc
        titles={["Documents", "Category", "Due date", "Project"]}
        rows={documentData}
      /> */}
    </Box>
  );
};

export default Documents;
