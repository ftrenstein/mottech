import React from "react";
import { Box, Stack, IconButton, Paper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  Dashboard,
  Description,
  Assignment,
  BarChart,
  Group,
} from "@mui/icons-material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/logo.svg";

const IconLink = ({ to, icon: Icon, isActive }) => {
  const theme = useTheme();
  return (
    <IconButton component={Link} to={to}>
      <Paper
        elevation={0}
        sx={{
          ...theme.components.IconLink,
          color: isActive ? "#3778a6" : "#777777", // Change default color to gray
        }}
      >
        <Icon fontSize="small" />
      </Paper>
    </IconButton>
  );
};

const Sidebar = () => {
  const location = useLocation(); // Получаем текущий маршрут
  const theme = useTheme();
  const links = [
    { to: "/", icon: Dashboard },
    { to: "/projects", icon: FormatListBulletedIcon },
    { to: "/documents", icon: Assignment },
    { to: "/reports", icon: BarChart },
    { to: "/access-rights", icon: Group },
  ];

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
            isActive={location.pathname === link.to}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
