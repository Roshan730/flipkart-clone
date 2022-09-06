import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase, styled } from "@mui/material";

const SearchContainer = styled(Box)`
  background: #fff;
  display: flex;
  width: 30rem;
  border-radius: 2px;
  margin-left: 10px;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brand and many more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
