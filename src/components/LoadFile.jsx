import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const LoadFile = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  // Обработчик выбора файла
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      onFileUpload(selectedFile);
    }
  };

  // Обработчик перетаскивания файла
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  // Обработчик предотвращения стандартного поведения браузера при перетаскивании
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 120,
        border: "1px dashed #AEBBCA",
        borderRadius: 1,
        bgcolor: "background.paper",
        position: "relative",
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* Поле для выбора файла */}
      <input
        type="file"
        id="file-upload"
        style={{ display: "none" }}
        onChange={handleFileChange}
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
          <Typography variant="body1" color="primary" sx={{ fontWeight: 500 }}>
            Choose a file
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ ml: 1 }}>
            or drag-and-drop it here
          </Typography>
        </Box>
      </label>

      {/* Отображение имени файла */}
      {file && (
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            color: "#3778A6",
            fontSize: 12,
          }}
        >
          {file.name}
        </Box>
      )}
    </Box>
  );
};

export default LoadFile;
