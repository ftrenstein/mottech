// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Divider,
//   IconButton,
//   Chip,
//   Menu,
//   MenuItem,
//   List,
//   ListItem,
//   TextField,
//   InputAdornment,
//   ListItemText,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import LoadFile from "./LoadFile";
// import SearchIcon from "@mui/icons-material/Search";

// const FileUploadBlock = () => {
//   const [files, setFiles] = useState([]); // Список файлов
//   const [anchorEl, setAnchorEl] = useState(null); // Для меню выбора языков
//   const [globalLanguages, setGlobalLanguages] = useState([]); // Общий список языков для всех проектов
//   const [searchQuery, setSearchQuery] = useState(""); // Поисковый запрос
//   const availableLanguages = [
//     "German",
//     "French",
//     "Spanish",
//     "Italian",
//     "English",
//     "Russian",
//   ];

//   // Обработчик добавления файла
//   const handleFileUpload = (file) => {
//     console.log(file);
//     if (file) {
//       setFiles((prevFiles) => [
//         ...prevFiles,
//         { file, languages: [] }, // Добавляем файл с пустым списком языков
//       ]);
//     }
//   };

//   // Обработчик открытия меню выбора языков
//   const handleLanguageMenuOpen = (event, index) => {
//     setAnchorEl(event.currentTarget);
//     // setSelectedFileIndex(index);
//   };

//   // Обработчик закрытия меню выбора языков
//   const handleLanguageMenuClose = () => {
//     setAnchorEl(null);
//     // setSelectedFileIndex(null);
//   };

//   // Обработчик выбора языка
//   const handleLanguageSelect = (language) => {
//     if (!globalLanguages.includes(language)) {
//       setGlobalLanguages((prevLanguages) => [...prevLanguages, language]);
//     }
//     handleLanguageMenuClose();
//   };

//   // Обработчик удаления языка
//   const handleLanguageDelete = (language) => {
//     setGlobalLanguages((prevLanguages) =>
//       prevLanguages.filter((lang) => lang !== language)
//     );
//   };
//   // Фильтрация языков по поисковому запросу
//   const filteredLanguages = availableLanguages.filter((language) =>
//     language.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         padding: 3,
//         bgcolor: "background.paper",
//         borderRadius: 1,
//         border: "1px solid #E8E8E8",
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//       }}
//     >
//       {/* Загрузка файла */}
//       <LoadFile onFileUpload={handleFileUpload} />
//       {/* Переключатель Languages/Countries */}
//       <Box sx={{ display: "flex", gap: 1 }}>
//         <Button
//           variant="contained"
//           sx={{
//             bgcolor: "white",
//             color: "black",
//             borderRadius: 1,
//             border: "1px solid #E8E8E8",
//             textTransform: "none",
//             "&:hover": {
//               bgcolor: "white",
//             },
//           }}
//         >
//           Languages
//         </Button>
//         <Button
//           variant="contained"
//           sx={{
//             bgcolor: "#F5F5F5",
//             color: "black",
//             borderRadius: 1,
//             border: "1px solid #E8E8E8",
//             textTransform: "none",
//             "&:hover": {
//               bgcolor: "#F5F5F5",
//             },
//           }}
//         >
//           Countries
//         </Button>
//       </Box>
//       {/* Список языков */}
//       <Box
//         sx={{
//           display: "flex",
//           gap: 1,
//           alignItems: "center",
//           justifyContent: "space-between",
//           p: 1,
//           bgcolor: "background.paper",
//           borderRadius: 1,
//           border: "1px solid #E8E8E8",
//           position: "relative", // Для позиционирования меню
//         }}
//       >
//         {/* Выбранные языки */}
//         <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
//           {globalLanguages.map((language, index) => (
//             <Chip
//               key={index}
//               label={language}
//               onDelete={() => handleLanguageDelete(language)}
//               sx={{
//                 bgcolor: "white",
//                 border: "1px solid #626262",
//                 color: "black",
//               }}
//             />
//           ))}
//         </Box>
//         {/* Поле для выбора языков */}
//         <TextField
//           fullWidth
//           placeholder="Select from the list or type"
//           onClick={handleLanguageMenuOpen}
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           slotProps={{
//             input: {
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton size="small">
//                     <ExpandMoreIcon />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             },
//           }}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               borderRadius: 1,
//               border: "1px solid #E8E8E8",
//             },
//           }}
//         />

//         {/* Меню выбора языков */}
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleLanguageMenuClose}
//         >
//           {["German", "French", "Spanish", "Italian"].map((language, index) => (
//             <MenuItem
//               key={index}
//               onClick={() => handleLanguageSelect(language)}
//             >
//               {language}
//             </MenuItem>
//           ))}
//         </Menu>
//         {/* Переключатель By document/By language */}
//         <Box sx={{ display: "flex", gap: 1 }}>
//           <Button
//             variant="contained"
//             sx={{
//               bgcolor: "white",
//               color: "black",
//               borderRadius: 1,
//               border: "1px solid #E8E8E8",
//               textTransform: "none",
//               "&:hover": {
//                 bgcolor: "white",
//               },
//             }}
//           >
//             By document
//           </Button>
//           <Button
//             variant="contained"
//             sx={{
//               bgcolor: "#F5F5F5",
//               color: "black",
//               borderRadius: 1,
//               border: "1px solid #E8E8E8",
//               textTransform: "none",
//               "&:hover": {
//                 bgcolor: "#F5F5F5",
//               },
//             }}
//           >
//             By language
//           </Button>
//         </Box>
//         {/* Список документов */}
//         <Box sx={{ width: "100%" }}>
//           <List sx={{ mt: 2 }}>
//             {files.map((fileData, index) => (
//               <ListItem
//                 key={index}
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "flex-start",
//                   border: "1px solid #E8E8E8",
//                   borderRadius: 1,
//                   mb: 1,
//                   p: 2,
//                 }}
//               >
//                 {/* Имя файла */}
//                 <ListItemText primary={fileData.file.name} />

//                 {/* Языки */}
//                 <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//                   {globalLanguages.map((language, langIndex) => (
//                     <Chip
//                       key={langIndex}
//                       label={language}
//                       onDelete={() => handleLanguageDelete(language)} // Удаление языка из общего списка
//                       sx={{
//                         bgcolor: "white",
//                         border: "1px solid #626262",
//                         color: "black",
//                       }}
//                     />
//                   ))}
//                 </Box>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//         {/* Меню выбора языков
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleLanguageMenuClose}
//         >
//           {["German", "French", "Spanish", "Italian"].map((language, index) => (
//             <MenuItem
//               key={index}
//               onClick={() => handleLanguageSelect(language)}
//             >
//               {language}
//             </MenuItem>
//           ))}
//         </Menu> */}
//       </Box>
//     </Box>
//   );
// };

// export default FileUploadBlock;

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

const FileUploadBlock = () => {
  const [files, setFiles] = useState([]); // Список файлов
  const [anchorEl, setAnchorEl] = useState(null); // Для меню выбора языков
  const [selectedFileIndex, setSelectedFileIndex] = useState(null); // Индекс файла, для которого выбирается язык
  const availableLanguages = [
    "German",
    "French",
    "Spanish",
    "Italian",
    "English",
    "Russian",
  ]; // Доступные языки

  // Обработчик загрузки файла
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFiles((prevFiles) => [
        ...prevFiles,
        { file, languages: [] }, // Добавляем файл с пустым списком языков
      ]);
    }
  };

  // Обработчик открытия меню выбора языков
  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Обработчик закрытия меню выбора языков
  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
    setSelectedFileIndex(null);
  };

  // Обработчик выбора языка
  const handleLanguageSelect = (language, applyToAll = false) => {
    const updatedFiles = [...files];

    if (applyToAll) {
      // Применяем язык ко всем файлам
      updatedFiles.forEach((fileData) => {
        if (!fileData.languages.includes(language)) {
          fileData.languages.push(language);
        }
      });
    } else if (selectedFileIndex !== null) {
      // Применяем язык только к выбранному файлу
      if (!updatedFiles[selectedFileIndex].languages.includes(language)) {
        updatedFiles[selectedFileIndex].languages.push(language);
      }
    }

    setFiles(updatedFiles);
    handleLanguageMenuClose();
  };

  // Обработчик удаления языка
  const handleLanguageDelete = (fileIndex, language) => {
    const updatedFiles = [...files];
    updatedFiles[fileIndex].languages = updatedFiles[
      fileIndex
    ].languages.filter((lang) => lang !== language);
    setFiles(updatedFiles);
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
      {/* Загрузка файла */}
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

      {/* Выбор языков (вынесен отдельно сверху) */}
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
                onDelete={() => handleLanguageDelete(0, language)} // Удаление языка из первого файла (пример)
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

      {/* Список файлов */}
      <List sx={{ mt: 2 }}>
        {files.map((fileData, index) => (
          <ListItem
            key={index}
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
            {/* Имя файла */}
            <ListItemText primary={fileData.file.name} />

            {/* Языки для конкретного файла */}
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              {fileData.languages.map((language, langIndex) => (
                <Chip
                  key={langIndex}
                  label={language}
                  onDelete={() => handleLanguageDelete(index, language)} // Удаление языка для конкретного файла
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

      {/* Меню выбора языков */}
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
