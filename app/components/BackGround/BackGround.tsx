import Image from "next/image";
import styles from "./background.module.css";

function Background() {
  // TODO: add hook and use client, to render dynamicly the background.

  return (
    <Image
      className={styles.container}
      src="/img/backgrounds/aurgi/mobile_2@3x.webp"
      fill
      alt="Background"
    />
  );
}

export default Background;
