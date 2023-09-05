import { SuggestedItem } from "@/app/interfaces";

import styles from "./productsContainer.module.css";

import { ProductHCard } from "../ProductHCard";

interface Props {
  sugestedItems: SuggestedItem[];
}

function ProductsContainer(props: Props) {
  const { sugestedItems } = props;

  return (
    <div className={styles.container}>
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
            onAction={() => console.log("Buy button clicked")}
          />
        </ProductHCard>
      ))}
    </div>
  );
}

export default ProductsContainer;
