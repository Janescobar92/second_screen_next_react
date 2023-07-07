import styles from "./page.module.css";

import { SettingsForm } from "./components/";

export default async function SettingsView() {
  return (
    <section className={styles.main}>
      <div className={styles.titleContainer}>
        <h1>Configuración</h1>
      </div>
      <SettingsForm />
    </section>
  );
}
