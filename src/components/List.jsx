import React from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import Alarm from "@mui/icons-material/Alarm";
import Error from "@mui/icons-material/Error";
import LinearProgress from "@mui/material/LinearProgress";

const ProgressBar = ({ value }) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#E3E6EB",
      }}
    >
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 12,
          borderRadius: 2,
          backgroundColor: "transparent",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#3778a6", // Синий цвет заполнения
            borderRadius: 2,
          },
        }}
      />
    </Box>
  );
};

const columnConfig = {
  status: {
    render: (value) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {value === "overdue" && <Alarm sx={{ color: "red" }} />}
        {value === "warning" && <Error sx={{ color: "orange" }} />}
        <Typography sx={{ color: value === "overdue" ? "red" : "inherit" }}>
          {value}
        </Typography>
      </Box>
    ),
  },
  dueDate: {
    sx: { fontWeight: "bold" },
  },
};

const ListDoc = ({ titles = [], rows = [], columns = [], onRowClick }) => {
  const theme = useTheme();
  console.log("rows", rows);
  if (!rows || rows.length === 0) return <Typography>Нет данных</Typography>;

  return (
    <TableContainer
      sx={{
        border: "none",
      }}
    >
      <Table sx={{ minWidth: 1280 }}>
        <TableHead>
          <TableRow>
            {titles.map((header) => (
              <TableCell
                key={header}
                sx={{
                  fontSize: theme.typography.body2.fontSize,
                  padding: "16px",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ border: "none", bgcolor: "white" }}>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              hover
              onClick={() => onRowClick && onRowClick(row)}
              sx={{
                bgcolor: row.status === "overdue" ? "#fff6f5" : "inherit",
                "&:hover": { cursor: "pointer" },
              }}
            >
              {columns.map((key) => (
                <TableCell
                  key={key}
                  sx={{ ...columnConfig[key]?.sx, padding: "16px" }}
                >
                  {key === "completed" ? (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                      <ProgressBar value={row[key]} />
                      <Typography>{`${row[key]}%`}</Typography>
                    </Box>
                  ) : Array.isArray(row[key]) ? (
                    row[key].join(", ")
                  ) : typeof row[key] === "object" && row[key] !== null ? (
                    JSON.stringify(row[key])
                  ) : (
                    row[key]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListDoc;
