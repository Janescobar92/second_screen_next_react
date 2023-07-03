import { SettingsButton } from "./components";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div id="app-footer" className={styles.container}>
      <SettingsButton />
    </div>
  );
}

export default Footer;
