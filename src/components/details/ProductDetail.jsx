import { Box, Typography } from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: `#878787`, fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <Box component="span">
          <img
            src={fassured}
            style={{ width: 77, marginLeft: 20 }}
            alt="assured"
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp; &nbsp; &nbsp;
        <Box component="span" style={{ color: `#878787` }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp; &nbsp; &nbsp;
        <Box component="span" style={{ color: `#388E3C` }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <Box>
        <Typography>
          <Badge />
          Get extra 20% off upto ₹50 on 1 item(s) T&C
        </Typography>
        <Typography>
          <Badge />
          Get extra 13% off (price inclusive of discount) T&C
        </Typography>
        <Typography>
          <Badge />
          Sign up for flipkart Pay Later and get flipkart Gift card worth ₹100.
          Know More
        </Typography>
        <Typography>
          <Badge />
          Buy 2 items save 5% Buy 3 or more save 10% T&C
        </Typography>
        <Typography>
          <Badge />
          Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
        </Typography>
      </Box>
    </>
  );
};

export default ProductDetail;
