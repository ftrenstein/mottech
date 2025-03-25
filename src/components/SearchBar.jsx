import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const textFieldSx = {
    bgcolor: "white",
    fontSize: "14px",
    color: "#616161",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e8e8e8",
      borderRadius: "5px",
    },
  };

  return (
    <TextField
      placeholder="Search"
      variant="outlined"
      fullWidth
      size="small"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" sx={{ color: "#616161" }} />
            </InputAdornment>
          ),
          sx: textFieldSx,
        },
      }}
    />
  );
};

export default SearchBar;
