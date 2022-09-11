import { Box, Typography, styled } from "@mui/material";
import React from "react";

const cartItem = ({ item }) => {
  return (
    <Box>
      <Box>
        <img src={item.url} alt="product" />
      </Box>
      <Box>
        <Typography>{item.title.longTitle}</Typography>
      </Box>
    </Box>
  );
};

export default cartItem;
