import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import React from "react";

function ToggleButtons({ filterOptions }) {
  const [filter, setFilter] = React.useState(
    Array.isArray(filterOptions) ? filterOptions[0] : ""
  );

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <ToggleButtonGroup
      value={filter}
      exclusive
      onChange={handleFilterChange}
      aria-label="filter options"
      sx={{
        height: "auto",
        borderRadius: "5px 0px 0px 0px",
        width: "auto",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid #e8e8e8",
          borderLeft: 0,
          padding: "10px",
          fontSize: "14px",
          textTransform: "none",
          "&:not(:first-of-type)": { borderLeft: 0 },
        },
      }}
    >
      {Array.isArray(filterOptions) &&
        filterOptions.map((value) => (
          <ToggleButton
            key={value}
            value={value}
            sx={{
              bgcolor: filter === value ? "white" : "#f5f5f5",
              color: "black",
              "&.Mui-selected": { bgcolor: "white" },
            }}
          >
            {value}
          </ToggleButton>
        ))}
    </ToggleButtonGroup>
  );
}

export default ToggleButtons;
