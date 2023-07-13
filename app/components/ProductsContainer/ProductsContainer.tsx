import styles from "./productContainer.module.css";

import { ProductCard } from "../ProductCard";

import { SuggestedItem } from "@/app/interfaces";

interface Props {
  sugestedItems: SuggestedItem[];
}

function ProductsContainer(props: Props) {
  const { sugestedItems } = props;

  return (
    <div id="product-cards-container" className={styles.productsContainer}>
      {sugestedItems.map((item) => {
        return <ProductCard key={item.nav_id} suggestedItem={item} />;
      })}
    </div>
  );
}

export default ProductsContainer;
