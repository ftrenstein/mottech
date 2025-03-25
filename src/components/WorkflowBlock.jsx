import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const WorkflowBlock = () => {
  // Состояние для 5-й кнопки
  const [isDesignActive, setIsDesignActive] = useState(false);

  // Обработчик нажатия на 5-ю кнопку
  const handleDesignClick = () => {
    setIsDesignActive(!isDesignActive);
  };

  const handleRevertClick = () => {
    setIsDesignActive(false); // Сбрасываем состояние кнопки "Design"
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
        gap: 3,
      }}
    >
      {/* Заголовок и описание */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" color="textPrimary">
            Standard workflow
          </Typography>
          <Typography variant="body2" color="textSecondary">
            AI translation, Linguist verification, Translation, Validation,
            Design
          </Typography>
        </Box>
        <Box sx={{ transform: "rotate(180deg)" }}>
          <ExpandMoreIcon />
        </Box>
      </Box>

      {/* Кнопки */}
      <Box sx={{ display: "flex", gap: 2 }}>
        {/* Неактивные кнопки */}
        <Button
          disabled
          sx={{
            bgcolor: "#C6CFDA",
            color: "#8191A2",
            borderRadius: 1,
            textTransform: "none",
            "&:disabled": {
              bgcolor: "#C6CFDA",
              color: "#8191A2",
            },
          }}
        >
          AI translation
        </Button>
        <Button
          disabled
          sx={{
            bgcolor: "#C6CFDA",
            color: "#8191A2",
            borderRadius: 1,
            textTransform: "none",
            "&:disabled": {
              bgcolor: "#C6CFDA",
              color: "#8191A2",
            },
          }}
        >
          Linguist verification
        </Button>
        <Button
          disabled
          sx={{
            bgcolor: "#C6CFDA",
            color: "#8191A2",
            borderRadius: 1,
            textTransform: "none",
            "&:disabled": {
              bgcolor: "#C6CFDA",
              color: "#8191A2",
            },
          }}
        >
          Translation
        </Button>
        <Button
          disabled
          sx={{
            bgcolor: "#C6CFDA",
            color: "#8191A2",
            borderRadius: 1,
            textTransform: "none",
            "&:disabled": {
              bgcolor: "#C6CFDA",
              color: "#8191A2",
            },
          }}
        >
          Validation
        </Button>

        {/* Активная кнопка */}
        <Button
          onClick={handleDesignClick}
          sx={{
            bgcolor: isDesignActive ? "#3778A6" : "white",
            color: isDesignActive ? "white" : "#3778A6",
            borderRadius: 1,
            border: "2px solid #3778A6",
            textTransform: "none",
            "&:hover": {
              bgcolor: isDesignActive ? "#3778A6" : "white",
            },
          }}
        >
          Design
        </Button>
      </Box>

      {/* Чекбокс и ссылка */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              sx={{ color: "#3778A6", "&.Mui-checked": { color: "#3778A6" } }}
            />
          }
          label={
            <Typography variant="body2" color="textPrimary">
              I want to use this workflow as a default one for next tasks
            </Typography>
          }
        />
        <Typography
          variant="body2"
          color="#3778A6"
          sx={{ fontWeight: 500, cursor: "pointer" }}
          onClick={handleRevertClick}
        >
          Revert to Standard workflow
        </Typography>
      </Box>
    </Box>
  );
};

export default WorkflowBlock;
