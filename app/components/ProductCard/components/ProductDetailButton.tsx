"use client";
import { useState } from "react";

import { Button } from "@mui/material";

import { ProductDetailDialog } from "../../ProductDetailDialog";

import { SuggestedItem } from "@/app/interfaces";

// Interface for the component props
interface Props {
  product: SuggestedItem;
}

/**
 * This component renders a button that opens a dialog with product details
 * @param props { product: SuggestedItem }
 * @returns JSX.Element
 */
function ProductDetailButton(props: Props) {
  // Destructuring product from props
  const { product } = props;

  // State for controlling the open/close state of the dialog
  const [open, setOpen] = useState<boolean>(false);

  // Handler for opening the dialog
  const handleClick = () => {
    setOpen(!open);
  };

  // Handler for closing the dialog
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Button for opening the dialog */}
      <Button
        id={`${product.nav_id}-product-detail-button`}
        size="small"
        variant="contained"
        onClick={handleClick}
      >
        Ver Producto
      </Button>

      {/* Dialog for showing the product details */}
      <ProductDetailDialog
        id={`${product.nav_id}-product-detail-dialog`}
        open={open}
        product={product}
        onClose={handleCloseDialog}
      />
    </>
  );
}

export default ProductDetailButton;
