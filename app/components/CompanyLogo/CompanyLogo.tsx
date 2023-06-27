import Image from "next/image";

import styles from "./logo.module.css";

function CompanyLogo() {
  // TODO: add hook and use client, to render dynamicly the company logo.

  return (
    <Image
      className={styles.logo}
      src="/img/logos/aurgi_logo.svg"
      alt="Logo"
      width={180}
      height={37}
      priority
    />
  );
}

export default CompanyLogo;
