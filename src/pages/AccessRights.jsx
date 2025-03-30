import React from "react";
import SearchBar from "../components/SearchBar";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import UniversalButton from "../components/UniversalButton";
import theme from "../theme/theme";

const userData = [
  {
    id: 1,
    login: "t.bernard",
    email: "thomas.bernard@gmail.com",
    accessProfiles: ["External translator"],
  },
  {
    id: 2,
    login: "t.bernard",
    email: "thomas.bernard@gmail.com",
    accessProfiles: ["Validator"],
  },
  {
    id: 3,
    login: "t.bernard",
    email: "thomas.bernard@gmail.com",
    accessProfiles: ["External translator", "Validator"],
  },
];

const tableCellStyles = {
  fontFamily: "Inter, Helvetica",
  fontSize: "12px",
  color: "#616161",
  fontWeight: 400,
};

const chipStyles = {
  fontFamily: "SB_Sans_Display, Helvetica",
  fontSize: "12px",
  fontWeight: 400,
  backgroundColor: "white",
  borderRadius: "5px",
  height: "23px",
  padding: "1px 8px",
  border: "1px solid #e8e8e8",
};

const AccessRights = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "1280px",
        gap: 2,
        Height: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4">Access Rights</Typography>
        <UniversalButton>Add user</UniversalButton>
      </Box>
      <SearchBar />
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "5px",
          boxShadow: "none",
          border: "1px solid #e8e8e8",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#f5f5f5" }}>
              <TableCell sx={{ ...tableCellStyles, paddingLeft: "32px" }}>
                Login
              </TableCell>
              <TableCell sx={{ ...tableCellStyles, paddingLeft: "56px" }}>
                E-mail
              </TableCell>
              <TableCell sx={tableCellStyles}>Access profiles</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td": { borderBottom: 0 } }}
              >
                <TableCell sx={{ ...tableCellStyles, paddingLeft: "32px" }}>
                  {user.login}
                </TableCell>
                <TableCell sx={{ ...tableCellStyles, paddingLeft: "56px" }}>
                  {user.email}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    {user.accessProfiles.map((profile, index) => (
                      <Chip
                        key={index}
                        label={profile}
                        variant="outlined"
                        size="small"
                        sx={chipStyles}
                      />
                    ))}
                  </Stack>
                </TableCell>
                <TableCell align="right">
                  <EditIcon
                    sx={{
                      width: 24,
                      height: 24,
                      cursor: "pointer",
                      color: theme.palette.mainblue,
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AccessRights;
