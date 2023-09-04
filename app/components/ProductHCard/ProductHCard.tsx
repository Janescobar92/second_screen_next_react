// React imports
import { Children, isValidElement, useContext, useMemo } from "react";

// Next.js imports
import Image, { ImageProps } from "next/image";

import { Box } from "@mui/material";

// Custom hooks
import useAppTheme from "@/app/Hooks/useAppTheme";
import useCompanyAssets from "@/app/Hooks/useCompanyAssets";

// Context imports
import { ConfigContext } from "@/app/providers";

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
  // TODO: REMOVE
  // Use context to get state
  const { state } = useContext(ConfigContext);
  const { companyLogo } = useCompanyAssets(state.company);

  return (
    <Image
      id={props.id}
      src={companyLogo}
      alt={props.alt}
      width={100}
      height={200}
      priority
    />
  );
};
const ProductInfoContent = () => <ProductInfo />;

const SellInfoContent = (props: SellInfoContentProps) => (
  <SellInfoBox
    actionLabel={props.actionLabel}
    layout={props.layout}
    showAction={props.showAction}
    onAction={props.onAction}
  />
);

function ProductHCard(props: Props) {
  const { id, product, children } = props;

  const childrenArray = Children.toArray(children);
  console.log({ childrenArray });

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
  product.main_attributes = {
    rim: "16",
    brand: "1PRECIO",
    model: "TOYO",
    noise: "C",
    dB: "70",
    waves: "2",
    width: "205",
    family: "RUEDAS",
    season: "summer",
    runflat: "0",
    universe: "RUEDAS",
    wet_grip: "B",
    load_index: "094",
    speed_index: "H",
    aspect_ratio: "55",
    fuel_eficiency: "C",
    snow: true,
    ice: true,
  };

  // TODO REMOVE THIS MOCK.
  product.label = "price_ratio";

  // Use context to get state
  const { state } = useContext(ConfigContext);
  const theme = useAppTheme(state.company);

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
