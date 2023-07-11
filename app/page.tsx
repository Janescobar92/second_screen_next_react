import styles from "./page.module.css";

import { CompanyLogo, WSMsgHandler } from "./components";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <CompanyLogo />
        <WSMsgHandler />
      </div>
    </main>
  );
}
