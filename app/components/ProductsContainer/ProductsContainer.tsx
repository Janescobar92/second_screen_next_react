"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/constants";
import { SuggestedItem } from "@/app/interfaces";

import styles from "./productsContainer.module.css";

import { ProductHCard } from "../ProductHCard";
import { MessageBox } from "../MessageBox";
import { AppContext } from "@/app/providers";
import { setSelectedProduct } from "@/app/providers/AppContextProvider/actions";

interface Props {
  sugestedItems: SuggestedItem[];
}

function ProductsContainer(props: Props) {
  const { sugestedItems } = props;
  const router = useRouter();
  const { dispatch } = useContext(AppContext);
  const subTitle = sugestedItems[0]?.item_type;

  const handleSelectItemToBuy = (item: SuggestedItem) => {
    setSelectedProduct(item, dispatch);
    router.push(`${ROUTES.sale_details}/${item.id}`);
  };

  return (
    <div className={styles.container}>
      <div>
        <MessageBox
          title="Tenemos las MEJORES OPCIONES para ti"
          subTitle={subTitle}
        />
      </div>
      {sugestedItems.map((item) => (
        <ProductHCard key={item.nav_id} id={`${item.id}`} product={item}>
          <ProductHCard.Image
            id={`${item.id}`}
            src={"props.src"}
            alt={`${item.id}-image`}
            width={100}
            height={200}
            priority
          />
          <ProductHCard.ProductInfo />
          <ProductHCard.SellInfo
            actionLabel="comprar"
            layout="row"
            showAction
            onAction={() => handleSelectItemToBuy(item)}
          />
        </ProductHCard>
      ))}
    </div>
  );
}

export default ProductsContainer;
