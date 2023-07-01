import React, { useState } from "react";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CancelRoundedIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
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
          width: { sm: "100%", lg: active ? "100%" : "0px" },
          p: 0,
          backgroundColor: {
            xs: "#1A2536",
            lg: active ? "#1A2536" : "transparent",
          },
          transition: "width 0.4s ease-out",
          borderRadius: "8px",
        },
        "& input": {
          opacity: { sm: 1, lg: active ? 1 : 0 },
          transition: "0.5s",
          transitionDelay: active ? "0.2s" : "0s",
        },
        "& .MuiInputAdornment-root": {
          cursor: "pointer",
          padding: "0px 10px 0px 10px",
        },
        "& .MuiButtonBase-root": {
          visibility: { sm: "visible", lg: active ? "visible" : "hidden" },
          opacity: { sm: 1, lg: active ? 1 : 0 },
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
          <>
            {matches && (
              <IconButton
                onClick={() => {
                  onChange("");
                  setActive(!active);
                }}
              >
                <CancelRoundedIcon sx={{ color: "#fff" }} />
              </IconButton>
            )}
            {!matches && value && (
              <IconButton
                onClick={() => {
                  onChange("");
                  setActive(!active);
                }}
              >
                <CancelRoundedIcon sx={{ color: "#fff" }} />
              </IconButton>
            )}
          </>
        ),
      }}
    />
  );
};

export default Search;
