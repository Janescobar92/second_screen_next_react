import styles from "./page.module.css";

import { WSMsgHandler } from "./components";

export default function Home() {
  return (
    <main className={styles.main}>
      <WSMsgHandler />
    </main>
  );
}
