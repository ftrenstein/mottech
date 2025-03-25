import React, { useState } from "react";
import { Box, Stack, IconButton, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Dashboard,
  Description,
  Assignment,
  BarChart,
  Person,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/logo.svg";

const IconLink = ({ to, icon: Icon, isActive, onClick }) => {
  const theme = useTheme();
  return (
    <IconButton component={Link} to={to} onClick={onClick}>
      <Paper
        elevation={0}
        sx={{
          ...theme.components.IconLink,
          color: isActive ? "#3778a6" : "black",
        }}
      >
        <Icon fontSize="small" />
      </Paper>
    </IconButton>
  );
};

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const theme = useTheme();
  const links = [
    { to: "/", icon: Dashboard },
    { to: "/projects", icon: Description },
    { to: "/documents", icon: Assignment },
    { to: "/reports", icon: BarChart },
    { to: "/access-rights", icon: Person },
  ];

  const handleIconClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        width: 48,
        height: "100%",
        borderRadius: "5px",
        overflow: "hidden",
        border: 2,
        borderColor: "grey.200",
        left: 16,
        top: 16,
        position: "fixed",
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          width: 32,
          height: 24,
          mt: 2,
          mx: 1,
        }}
      >
        <img src={logo} alt="Logo" style={{ width: "100%", height: "100%" }} />
      </Box>
      <Stack
        spacing={2}
        sx={{
          width: 32,
          position: "absolute",
          top: 288,
          mx: 1,
        }}
      >
        {links.map((link, index) => (
          <IconLink
            key={index}
            to={link.to}
            icon={link.icon}
            isActive={activeIndex === index}
            onClick={() => handleIconClick(index)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
