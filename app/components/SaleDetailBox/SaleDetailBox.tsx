import { Order } from "@/app/interfaces";

import { SaleSummaryBox } from "../SaleSummaryBox";
import { ProductsCarousel } from "../ProductsCarousel";

import styles from "./saleDetailBox.module.css";

function SaleDetailBox(props: { order: Order }) {
  const { order } = props;

  return (
    <section>
      <div className={styles.carouselContainer}>
        <ProductsCarousel items={order.items} hideDots />
      </div>
      <div className={styles.saleSummaryContainer}>
        <span>
          <SaleSummaryBox order={order} />
        </span>
      </div>
    </section>
  );
}

export default SaleDetailBox;
