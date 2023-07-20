"use client";

// React imports
import { useContext } from "react";

// Next.js imports
import Image from "next/image";

// Material UI imports
import { Dialog, DialogContent, Typography, Button } from "@mui/material";

// Icon imports
import { MdOutlineAddShoppingCart } from "react-icons/md";

// Custom hooks
import useAppTheme from "@/app/Hooks/useAppTheme";
import useCompanyAssets from "@/app/Hooks/useCompanyAssets";

// Context imports
import { ConfigContext } from "@/app/providers";

// Styles imports
import styles from "./productDetailDialog.module.css";

// Interface imports
import { SuggestedItem } from "@/app/interfaces";

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

  // Use context to get state
  const { state } = useContext(ConfigContext);

  // Use custom hooks to get company assets and theme
  const { companyLogo } = useCompanyAssets(state.company);
  const theme = useAppTheme(state.company);

  // Return the dialog component
  return (
    <Dialog
      id={`${id}-dialog-container`}
      maxWidth="md"
      fullWidth
      open={open}
      onClose={onClose}
    >
      <DialogContent
        id={`${id}-dialog-content`}
        className={styles.dialogContentContainer}
      >
        <Image
          id="logo-container"
          className={styles.imgContainer}
          src={companyLogo}
          alt="Logo"
          width={180}
          height={37}
          priority
        />
        <Typography
          className={styles.descriptionContainer}
          color="text.secondary"
        >
          <Typography variant="h6" fontWeight={700}>
            {product.display_name}
          </Typography>
          <Typography variant="body1">{product.display_description}</Typography>
        </Typography>
        <Typography className={styles.priceContainer} color="text.secondary">
          <Typography variant="body1">La unidad por:</Typography>
          <Typography
            color={theme.palette.primary.main}
            className={styles.priceTag}
          >{`${product.total_cost}€`}</Typography>
        </Typography>
        {/* <Button
          className={styles.button}
          id={`${id}-dialog-add-button`}
          variant="contained"
        >
          <MdOutlineAddShoppingCart style={{ fontSize: "2.5rem" }} />
        </Button> */}
      </DialogContent>
    </Dialog>
  );
}

// Export component
export default ProductDetailDialog;
