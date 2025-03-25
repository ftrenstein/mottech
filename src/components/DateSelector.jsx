import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DateSelector = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [selectedDate, setSelectedDate] = useState("This week");

  const handleClick = (event) => {
    console.log("click icon");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (newDate) => {
    console.log("click menu");

    if (newDate) {
      setSelectedDate(newDate);
    }
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <Typography variant="period">{selectedDate}</Typography>
      <IconButton
        onClick={handleClick}
        size="small"
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <ExpandMoreIcon sx={{ fontSize: 20, color: "#3778a6" }} />
      </IconButton>

      {/* Выпадающее меню */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        id="demo-positioned-menu" // Это id меню
        aria-labelledby="demo-positioned-button"
      >
        <MenuItem onClick={() => handleClose("Year")}>year</MenuItem>
        <MenuItem onClick={() => handleClose("Month")}>Month</MenuItem>
        <MenuItem onClick={() => handleClose("date")}>date</MenuItem>
      </Menu>
    </Box>
  );
};

export default DateSelector;
