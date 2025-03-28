import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import { translations } from "../data/documentDataOverview";
import RightPanel from "../components/RightPanel";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
}));

const HeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 500,
  backgroundColor: theme.palette.grey[100],
}));

const TranslationRow = ({ translation }) => {
  console.log("Rendering row for:", translation); // Debugging log
  return (
    <TableRow>
      <TableCell>
        <Typography variant="body2">{translation.source}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{translation.french}</Typography>
      </TableCell>
    </TableRow>
  );
};

const DocumentOverview = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        gap: 2,
      }}
    >
      <Typography
        sx={{ flex: 1, fontSize: 30, fontWeight: 400, fontFamily: "Inter" }}
      >
        {`Document: "name"`} {/* Отображаем ID проекта */}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "800px",
            overflowY: "auto",
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {translations.length === 0 ? ( // Fallback for empty data
            <Typography variant="body2" color="textSecondary">
              No translations available.
            </Typography>
          ) : (
            <StyledTableContainer component={Paper} elevation={0}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <HeaderCell>Source</HeaderCell>
                    <HeaderCell>Translation</HeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {translations.map((translation) => (
                    <TranslationRow
                      key={translation.id}
                      translation={translation}
                    />
                  ))}
                </TableBody>
              </Table>
            </StyledTableContainer>
          )}
        </Box>
        <Box
          sx={{
            width: "30%",
            height: "100%",
            gap: 3,
            p: 3,
            flexDirection: "column",
          }}
        >
          <RightPanel />
        </Box>
      </Box>
    </Box>
  );
};

export default DocumentOverview;
