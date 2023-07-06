import styles from "./page.module.css";

import { SettingsForm } from "./components/";
import { getGlobalConfig } from "../utils/config";

export default async function SettingsView() {
  const config = await getGlobalConfig();

  console.log({ config }, "CONFIG");

  return (
    <section className={styles.main}>
      <div className={styles.titleContainer}>
        <h1>Configuración</h1>
      </div>
      <SettingsForm config={config} />
    </section>
  );
}
