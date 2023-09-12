import { Order } from "@/app/interfaces";

import styles from "./saleSummaryBox.module.css";

import { SaleSummaryTable, TotalDivider } from "./components";

function SaleSummaryBox(props: { order: Order }) {
  const { order } = props;

  return (
    <div className={styles.container}>
      <SaleSummaryTable order={order} />
      <TotalDivider price={order?.total_cost} />
    </div>
  );
}

export default SaleSummaryBox;
