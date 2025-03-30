import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#8191a2",
    },
    mainblue: "#3778a6",
    error: {
      main: "#ff4a50",
    },
    text: {
      primary: "#000000",
      secondary: "#8191a2",
      disabled: "#747373",
      gray: "#757575",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
      mainblue: "#3778a6",
    },
    divider: "#e8e8e8",
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    // fontWeight: 600,
    h1: {
      fontFamily: "'Inter-Regular', Helvetica",
      fontWeight: 400,
    },
    h2: {
      fontFamily: "'Inter-Regular', Helvetica",
      fontWeight: 400,
    },
    h4: {
      fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 600,
      fontSize: "34px",
      lineHeight: "normal",
    },
    h6: {
      fontFamily: "'Inter-Regular', Helvetica",
      fontWeight: 550,
      fontSize: "16px",
      lineHeight: "normal",
    },
    body1: {
      fontFamily: "'Inter-Regular', Helvetica",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "normal",
    },
    body2: {
      fontFamily: "'Inter-Regular', Helvetica",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "normal",
    },
    period: {
      color: "#3778a6",
      fontSize: "0.75rem",
      fontFamily: "'Inter-Regular', Helvetica",
      fontWeight: "normal",
    },
    button: {
      fontFamily: "'Roboto-Regular', Helvetica",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "normal",
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "12px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid #e8e8e8",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 40,
          height: 40,
          backgroundColor: "#f5f5f5",
          border: "1px solid #757575",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&$selected": {
            backgroundColor: "#f5f5f5",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "40px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "3px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        head: ({ theme }) => ({
          ...theme.typography.body1,
          fontWeight: 500,
        }),
        body: ({ theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body2,
        }),
      },
    },
    IconLink: {
      height: 32,
      width: 32,
      borderRadius: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #e8e8e8",
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 4,
  },
});

export default theme;
