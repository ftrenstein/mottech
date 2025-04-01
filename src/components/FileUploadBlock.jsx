import React, { useState } from "react";
import {
  Box,
  Chip,
  Button,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FileUploadBlock = ({ onFilesChange }) => {
  const [files, setFiles] = useState([]); // List of uploaded files
  const [anchorEl, setAnchorEl] = useState(null); // For language menu
  const [selectedFileIndex, setSelectedFileIndex] = useState(null); // Index of the file for language selection
  const availableLanguages = [
    "German",
    "French",
    "Spanish",
    "Italian",
    "English",
    "Russian",
  ]; // Available languages

  // File upload handler
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newFiles = [
        ...files,
        { id: Date.now(), file, languages: [] }, // Add file with empty languages
      ];
      setFiles(newFiles);
      onFilesChange(newFiles); // Notify parent about the change
    }
  };

  // Language menu open handler
  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Language menu close handler
  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
    setSelectedFileIndex(null);
  };

  // Language selection handler
  const handleLanguageSelect = (language, applyToAll = false) => {
    const updatedFiles = [...files];

    if (applyToAll) {
      updatedFiles.forEach((fileData) => {
        if (!fileData.languages.includes(language)) {
          fileData.languages.push(language);
        }
      });
    } else if (selectedFileIndex !== null) {
      if (!updatedFiles[selectedFileIndex].languages.includes(language)) {
        updatedFiles[selectedFileIndex].languages.push(language);
      }
    }

    setFiles(updatedFiles);
    onFilesChange(updatedFiles); // Notify parent about the change
    handleLanguageMenuClose();
  };

  // Language delete handler
  const handleLanguageDelete = (fileIndex, language) => {
    const updatedFiles = [...files];
    updatedFiles[fileIndex].languages = updatedFiles[
      fileIndex
    ].languages.filter((lang) => lang !== language);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles); // Notify parent about the change
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: 3,
        bgcolor: "background.paper",
        borderRadius: 1,
        border: "1px solid #E8E8E8",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* File upload */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 120,
          border: "1px dashed #AEBBCA",
          borderRadius: 1,
          bgcolor: "background.paper",
        }}
      >
        <input
          type="file"
          id="file-upload"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <label htmlFor="file-upload">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography
              variant="body1"
              color="primary"
              sx={{ fontWeight: 500 }}
            >
              Choose a file
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ ml: 1 }}>
              or drag-and-drop it here
            </Typography>
          </Box>
        </label>
      </Box>

      {/* Language selection (separate block at the top) */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          p: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          border: "1px solid #E8E8E8",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          Selected Languages:
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {files.length > 0 &&
            files[0].languages.map((language, index) => (
              <Chip
                key={index}
                label={language}
                onDelete={() => handleLanguageDelete(0, language)} // Delete language from the first file (example)
                sx={{
                  bgcolor: "white",
                  border: "1px solid #626262",
                  color: "black",
                }}
              />
            ))}
        </Box>
        <Button
          variant="outlined"
          onClick={handleLanguageMenuOpen}
          endIcon={<ExpandMoreIcon />}
        >
          Add Language
        </Button>
      </Box>

      {/* File list */}
      <List sx={{ mt: 2 }}>
        {files.map((fileData, index) => (
          <ListItem
            key={fileData.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              border: "1px solid #E8E8E8",
              borderRadius: 1,
              mb: 1,
              p: 2,
            }}
          >
            {/* File name */}
            <ListItemText primary={fileData.file.name} />

            {/* Languages for specific file */}
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              {fileData.languages.map((language, langIndex) => (
                <Chip
                  key={langIndex}
                  label={language}
                  onDelete={() => handleLanguageDelete(index, language)} // Delete language for specific file
                  sx={{
                    bgcolor: "white",
                    border: "1px solid #626262",
                    color: "black",
                  }}
                />
              ))}
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Language selection menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLanguageMenuClose}
      >
        {availableLanguages.map((language, index) => (
          <Box key={index}>
            <MenuItem onClick={() => handleLanguageSelect(language, true)}>
              {language}
            </MenuItem>
          </Box>
        ))}
      </Menu>
    </Box>
  );
};

export default FileUploadBlock;
