/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CancelRoundedIcon from "@mui/icons-material/Close";
import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";
import { expandWidth, shrinkWidth } from "../../../utils/animationKeyframes";

interface StyledTextFieldProps {
  expand: boolean;
  shrink: boolean;
  width?: string;
}

const fadeIn = keyframes`
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    background-color: #1A2536; 
  }
  100% {
    opacity: 1;
    background-color: transparent;
  }
`;
const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) =>
    prop !== "expand" && prop !== "shrink" && prop !== "width",
})<StyledTextFieldProps>`
  width: 2.5rem;
  background-color: transparent;

  & .MuiOutlinedInput-root {
    & fieldset {
      border: none;
    }

    &:hover fieldset {
      border: none;
    }

    &.Mui-focused fieldset {
      border: none;
    }
  }

  & .MuiInputBase-input {
    opacity: 0;
    ${(props) =>
      props.expand &&
      css`
        animation: ${fadeIn} 0.5s ease-in-out 1s forwards;
      `}
  }

  ${(props) =>
    props.expand &&
    css`
      --text-field-width: ${props.width || "100%"};
      animation: ${expandWidth} 1s forwards, ${fadeIn} 1s forwards;
    `}
  ${(props) =>
    props.shrink &&
    css`
      --text-field-width: ${props.width || "100%"};
      animation: ${shrinkWidth} 1s forwards, ${fadeOut} 1s forwards;
    `}
`;

interface SearchProps {
  value: string;
  width?: string;
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange, width }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const [expand, setExpand] = useState(false);
  const [shrink, setShrink] = useState(false);

  const handleSearchClick = () => {
    if (expand) {
      setExpand(false);
      setShrink(true);
    } else {
      setExpand(true);
      setShrink(false);
    }
  };

  return (
    <>
      <StyledTextField
        expand={expand}
        shrink={shrink}
        width={width}
        value={value}
        onChange={handleSearchChange}
        placeholder="Title, Movies, Keyword"
        variant="outlined"
        sx={{
          borderRadius: "8px",
          "& .MuiInputBase-input": {
            py: { xs: "10px", lg: "16.5px" },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{ color: "#fff", fontSize: 28, cursor: "pointer" }}
                onClick={handleSearchClick}
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {expand && (
                <CancelRoundedIcon
                  sx={{ color: "#fff", cursor: "pointer" }}
                  onClick={handleSearchClick}
                  css={css`
                    opacity: 0;
                    animation: ${fadeIn} 0.5s ease-in-out 1s forwards;
                  `}
                />
              )}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default Search;
