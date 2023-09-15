import { Order } from "@/app/interfaces";

import styles from "./saleSummaryBox.module.css";

import { SavingsLabel } from "../SavingsLabel";
import { SaleSummaryTable, TotalDivider } from "./components";

function SaleSummaryBox(props: { order: Order }) {
  const { order } = props;
  const { calculate_payload: calculatePayload } = order;
  const renderPromos = !!calculatePayload?.total_discounts;

  return (
    <>
      <div className={styles.container}>
        <SaleSummaryTable order={order} />
        {renderPromos && (
          <div className={styles.savingsContainer}>
            <SavingsLabel savingTotal={calculatePayload?.total_discounts} />
          </div>
        )}
      </div>
      <div className={styles.totalContainer}>
        <TotalDivider price={order?.total_cost} />
      </div>
    </>
  );
}

export default SaleSummaryBox;
