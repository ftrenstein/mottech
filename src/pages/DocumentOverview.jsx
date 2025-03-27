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

import ongoingData from "../data/Ongoindata";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
}));

const HeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 500,
  backgroundColor: theme.palette.grey[100],
}));

const TranslationRow = ({ translation }) => (
  <TableRow>
    <TableCell>
      <Typography variant="body2">{translation.source}</Typography>
    </TableCell>
    <TableCell>
      <Typography variant="body2">{translation.french}</Typography>
    </TableCell>
  </TableRow>
);
const DocumentOverview = () => {
  const { id } = useParams();

  const documentId = parseInt(id, 10);

  const project = ongoingData.project[1].document.find(
    (doc) => doc.id === documentId
  );
  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Paper
        elevation={0}
        sx={{ p: 2, border: "1px solid #E8E8E8", borderRadius: 1 }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="subtitle2">Source</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="subtitle2">French</Typography>
            <Typography variant="caption" color="primary">
              Show back translation
            </Typography>
          </Box>
        </Box>

        <StyledTableContainer component={Paper} elevation={0}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <HeaderCell>Source Text</HeaderCell>
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
      </Paper>
    </Box>
  );
};

export default DocumentOverview;
