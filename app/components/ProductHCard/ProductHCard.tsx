// React imports
import { Children, isValidElement, useMemo } from "react";

// Next.js imports
import Image, { ImageProps } from "next/image";

import { Box } from "@mui/material";

// Custom hooks
import { useAppTheme, useProductAsset } from "@/app/Hooks";

// Styles imports
import styles from "./productHCard.module.css";

// Interface imports
import { SuggestedItem } from "@/app/interfaces";

import ProductContext from "./context";

import { ProductInfo, SellInfoBox } from "./components";
import { Label } from "./constants";
import { CustomChildType, SellInfoContentProps } from "./interfaces";

interface Props {
  id: string;
  product: SuggestedItem;
  children:
    | React.ReactElement<CustomChildType>[]
    | React.ReactElement<CustomChildType>;
}

const ProductImage = (props: ImageProps) => {
  // TODO: CHECK PROP AN INTERFACES
  const img = useProductAsset(props.src as string);

  return (
    <>
      {img && (
        <Image
          style={{ padding: "0.5rem" }}
          id={props.id}
          src={img}
          alt={props.alt}
          width={100}
          height={150}
          priority
        />
      )}
    </>
  );
};
const ProductInfoContent = () => <ProductInfo />;

const SellInfoContent = (props: SellInfoContentProps) => (
  <SellInfoBox
    actionLabel={props.actionLabel}
    id={props.id}
    layout={props.layout}
    price={props?.price}
    showAction={props.showAction}
    onAction={props.onAction}
  />
);

function ProductHCard(props: Props) {
  const { id, product, children } = props;

  const childrenArray = Children.toArray(children);

  const image = childrenArray?.find(
    (child) =>
      isValidElement(child) && "hasImage" in (child.type as CustomChildType)
  );

  const productInfo = childrenArray?.find(
    (child) =>
      isValidElement(child) &&
      "hasProductInfo" in (child.type as CustomChildType)
  );

  const sellInfo = childrenArray?.find(
    (child) =>
      isValidElement(child) && "hasSellInfo" in (child.type as CustomChildType)
  );

  // TODO REMOVE THIS MOCK.
  product.label = "price_ratio";

  const theme = useAppTheme();

  const contextValue = useMemo(() => {
    return {
      ...product,
    };
  }, [product]);

  const handleBorder = () => {
    switch (product.label) {
      case Label.recommended:
        return `solid 0.2rem ${theme.palette.secondary.main}`;

      case Label.price_ratio:
        return `solid 0.2rem ${theme.palette.warning.main}`;
      default:
        return "";
    }
  };

  const borderStyle = handleBorder();

  return (
    <ProductContext.Provider value={contextValue}>
      <Box
        boxShadow={3}
        id={`${id}-product-horizontal-card`}
        className={styles.productHCardContainer}
        sx={{ border: borderStyle }}
      >
        <>
          {image && <>{image}</>}
          {productInfo && <>{productInfo}</>}
          {sellInfo && <>{sellInfo}</>}
        </>
      </Box>
    </ProductContext.Provider>
  );
}

ProductImage.hasImage = true;
ProductHCard.Image = ProductImage;

ProductInfoContent.hasProductInfo = true;
ProductHCard.ProductInfo = ProductInfoContent;

SellInfoContent.hasSellInfo = true;
ProductHCard.SellInfo = SellInfoContent;

export default ProductHCard;
