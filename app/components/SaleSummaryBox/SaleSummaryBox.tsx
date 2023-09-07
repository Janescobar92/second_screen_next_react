import { SuggestedItem } from "@/app/interfaces";

import styles from "./saleSummaryBox.module.css";

import { SaleSummaryTable, TotalDivider, BuyButton } from "./components";

function SaleSummaryBox(props: { product: SuggestedItem }) {
  const { product } = props;

  return (
    <div className={styles.container}>
      <SaleSummaryTable product={product} />
      <TotalDivider price={product?.total_cost} />
      <BuyButton product={product} />
    </div>
  );
}

export default SaleSummaryBox;
