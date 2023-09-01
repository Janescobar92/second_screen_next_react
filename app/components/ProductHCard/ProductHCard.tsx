// React imports
import { useContext, useMemo } from "react";

// Next.js imports
import Image from "next/image";

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

interface Props {
  id: string;
  product: SuggestedItem;
}

function ProductHCard(props: Props) {
  const { id, product } = props;

  // Use context to get state
  const { state } = useContext(ConfigContext);

  // Use custom hooks to get company assets and theme
  const { companyLogo } = useCompanyAssets(state.company);
  const theme = useAppTheme(state.company);

  const contextValue = useMemo(() => {
    return {
      ...product,
    };
  }, [product]);

  return (
    <ProductContext.Provider value={contextValue}>
      <div
        id={`${id}-product-horizontal-card`}
        className={styles.productHCardContainer}
      >
        <Image
          id="logo-container"
          src={companyLogo}
          alt="Logo"
          width={100}
          height={200}
          priority
        />
        <ProductInfo />
        <SellInfoBox
          layout="row"
          showAction
          onAction={() => console.log("Buy button clicked")}
        />
      </div>
    </ProductContext.Provider>
  );
}

export default ProductHCard;
