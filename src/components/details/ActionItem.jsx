import { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { AddShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
  width: "90%",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: "50px",
  borderRadius: "2",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("md")]: {
    width: "48%",
  },
}));

const ActionItem = ({ product }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
        }}
      >
        <Image src={product.detailUrl} alt="productUrl" />
      </Box>
      <br />
      <StyledButton
        onClick={() => addItemToCart()}
        variant="contained"
        style={{ marginRight: 10, background: `#ff9f00` }}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: `#fb541b` }}>
        <Flash /> But Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
