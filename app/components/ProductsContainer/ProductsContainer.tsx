import { SuggestedItem } from "@/app/interfaces";

import styles from "./productsContainer.module.css";

import { ProductHCard } from "../ProductHCard";
import { MessageBox } from "../MessageBox";

interface Props {
  sugestedItems: SuggestedItem[];
}

function ProductsContainer(props: Props) {
  const { sugestedItems } = props;
  const subTitle = sugestedItems[0]?.item_type;

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
            onAction={() => console.log("Buy button clicked")}
          />
        </ProductHCard>
      ))}
    </div>
  );
}

export default ProductsContainer;
