import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import theme from "../theme/theme";

const IconWithMenu = ({ icon: Icon, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate(); // Add navigation hook

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleMenuItemClick = (item) => {
    if (item === "Exit") {
      navigate("/login"); // Navigate to login page
    }
    handleMenuClose();
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen} color="inherit">
        <Icon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const Navbar = () => {
  return (
    <AppBar
      sx={{
        width: `calc(100% - 80px)`,
        ml: 8,
        bgcolor: "#fafafa",

        border: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box alignItems="center">
          <Typography
            variant="body2"
            color="text.secondary"
            marginTop={10}
            sx={{ fontFamily: theme.typography.fontFamily }}
          ></Typography>
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
          spacing={2}
        >
          <IconButton>
            <SearchIcon sx={{ width: 23, height: 23 }} />
          </IconButton>

          <IconButton>
            <NotificationsIcon sx={{ width: 23, height: 23 }} />
          </IconButton>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar src="https://i.pravatar.cc/150?img=3" alt="Random Avatar">
              <Typography
                variant="body1"
                color="text.primary"
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontWeight: theme.typography.fontWeightRegular,
                  whiteSpace: "nowrap",
                }}
              >
                TB
              </Typography>
            </Avatar>

            <Typography
              variant="body1"
              color="text.primary"
              sx={{ fontFamily: theme.typography.fontFamily }}
            >
              Thomas Bernard
            </Typography>

            <IconWithMenu
              icon={() => (
                <KeyboardArrowDownIcon
                  sx={{
                    width: 23,
                    height: 23,
                    color: theme.palette.text.primary,
                  }}
                />
              )}
              menuItems={["Exit"]}
            />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
