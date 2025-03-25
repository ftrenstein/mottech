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

const ListDoc = ({ titles = [], rows = [] }) => {
  const theme = useTheme();
  console.log("rows", rows);
  if (!rows || rows.length === 0) return <Typography>Нет данных</Typography>;

  return (
    <TableContainer
      component={Paper}
      elevation={0}
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
                  color: theme.palette.text.secondary,
                  // pl: header === "Documents" ? 4 : 0,
                  pl: 4,
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              hover
              onClick={() => console.log(`Clicked on row ${row.id}`)}
              sx={{
                bgcolor: row.status === "overdue" ? "#fff6f5" : "inherit",
                "&:hover": { cursor: "pointer" },
              }}
            >
              {Object.keys(row)
                .slice(1)
                .map((key) => (
                  <TableCell key={key} sx={{ ...columnConfig[key]?.sx }}>
                    {columnConfig[key]?.render
                      ? columnConfig[key].render(row[key])
                      : row[key]}
                  </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
        {/* <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              hover
              onClick={() => console.log(`Clicked on row ${row.id}`)}
              sx={{
                bgcolor:
                  row.status === "overdue"
                    ? "#fff6f5"
                    : theme.palette.background.paper,
                "&:hover": { cursor: "pointer" },
              }}
            >
              <TableCell
                sx={{ fontSize: theme.typography.body2.fontSize, pl: 4 }}
              >
                {row.name}
              </TableCell>
              <TableCell sx={{ fontSize: theme.typography.body2.fontSize }}>
                {row.category}
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {row.status === "overdue" && (
                    <Alarm sx={{ color: theme.palette.error.main }} />
                  )}
                  {row.status === "warning" && (
                    <Error sx={{ color: "orange" }} />
                  )}
                  <Typography
                    sx={{
                      fontSize: theme.typography.body2.fontSize,
                      color:
                        row.status === "overdue"
                          ? theme.palette.error.main
                          : "inherit",
                    }}
                  >
                    {row.dueDate}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ fontSize: theme.typography.body2.fontSize }}>
                {row.project}
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
};

export default ListDoc;
