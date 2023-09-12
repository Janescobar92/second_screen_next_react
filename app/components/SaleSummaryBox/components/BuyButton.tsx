import { Box, Button } from "@mui/material";
import { SUBMIT_LABEL } from "../constants";
import { SuggestedItem } from "@/app/interfaces";

// TODO: DELETE COMPONENT?
function BuyButton(props: { product: SuggestedItem }) {
  const { product } = props;

  const handleAddToCart = () => {
    console.log({ product });
  };

  return (
    <Box display={"flex"} justifyContent={"center"} alignContent={"center"}>
      <Button
        color="primary"
        id="add-to-cart-button"
        variant="contained"
        onClick={handleAddToCart}
      >
        {SUBMIT_LABEL}
      </Button>
    </Box>
  );
}

export default BuyButton;
