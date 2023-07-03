import styles from "./page.module.css";

import { CompanyLogo, Footer, MessageBox } from "./components";

export default function Root() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <CompanyLogo />
        <MessageBox content="HOLA MUNDO" />
      </div>
      <Footer />
    </main>
  );
}
