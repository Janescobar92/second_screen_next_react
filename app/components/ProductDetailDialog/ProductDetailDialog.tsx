"use client";

// Material UI imports
import { Dialog, DialogContent } from "@mui/material";

// Interface imports
import { SuggestedItem } from "@/app/interfaces";

// Component imports
import { ProductHCard } from "../ProductHCard";

// Interface for component props
interface Props {
  id: string;
  open: boolean;
  product: SuggestedItem;
  onClose: () => void;
}

/**
 * ProductDetailDialog component
 * @param props
 * @returns
 */
function ProductDetailDialog(props: Props) {
  // Destructure props
  const { id, open, product, onClose } = props;

  // Return the dialog component
  return (
    <Dialog
      id={`${id}-dialog-container`}
      maxWidth="xl"
      fullWidth
      open={open}
      onClose={onClose}
    >
      <DialogContent id={`${id}-dialog-content`}>
        <ProductHCard id={id} product={product} />
      </DialogContent>
    </Dialog>
  );
}

// Export component
export default ProductDetailDialog;
