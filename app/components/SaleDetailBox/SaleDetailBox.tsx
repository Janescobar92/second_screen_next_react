import { Box } from "@mui/material";
import { SaleSummaryBox } from "../SaleSummaryBox";
import { Order } from "@/app/interfaces";
import { ProductsCarousel } from "../ProductsCarousel";

function SaleDetailBox(props: { order: Order }) {
  const { order } = props;

  return (
    <Box>
      <ProductsCarousel items={order.items} hideDots />
      <SaleSummaryBox order={order} />
    </Box>
  );
}

export default SaleDetailBox;
