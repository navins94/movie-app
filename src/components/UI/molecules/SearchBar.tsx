import React, { useState } from "react";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CancelRoundedIcon from "@mui/icons-material/Close";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  const [active, setActive] = useState(false);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      id="search"
      type="text"
      placeholder="Title, Movies, Keyword"
      variant="outlined"
      value={value}
      onChange={handleSearchChange}
      sx={{
        width: "100%",
        borderRadius: "4px",
        "& fieldset": { border: "none" },
        "& .MuiInputBase-root": {
          width: active ? "100%" : "0px",
          p: 0,
          background: active ? "#1A2536" : "transparent",
          transition: "width 0.4s ease-out",
          borderRadius: "8px",
        },
        "& input": {
          opacity: active ? 1 : 0,
          transition: "0.5s",
          transitionDelay: active ? "0.2s" : "0s",
        },
        "& .MuiInputAdornment-root": {
          cursor: "pointer",
          padding: "0px 10px 0px 10px",
        },
        "& .MuiButtonBase-root": {
          visibility: active ? "visible" : "hidden",
          opacity: active ? 1 : 0,
          transition: active ? "0.5s" : "0s",
          transitionDelay: active ? "0.4s" : "0s",
        },
      }}
      InputLabelProps={{
        shrink: false,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" onClick={() => setActive(!active)}>
            <SearchIcon sx={{ color: "#fff", fontSize: 28 }} />
          </InputAdornment>
        ),
        endAdornment: (
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => {
              onChange("");
              setActive(!active);
            }}
          >
            <CancelRoundedIcon sx={{ color: "#fff" }} />
          </IconButton>
        ),
      }}
    />
  );
};

export default Search;
