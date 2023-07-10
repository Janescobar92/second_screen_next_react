import styles from "./page.module.css";

import { CompanyLogo, MessageBox } from "./components";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <CompanyLogo />
        <MessageBox content="Hola mundo, esto es una prueba" />
      </div>
    </main>
  );
}
