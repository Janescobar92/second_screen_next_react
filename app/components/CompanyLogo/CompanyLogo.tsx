"use client";
import Image from "next/image";

import styles from "./logo.module.css";
import { useCompanyAssets } from "@/app/Hooks";

/**
 * Component for displaying the company logo.
 * Uses the `useCompanyAssets` hook to retrieve the company logo image.
 * @returns {JSX.Element} - The rendered component.
 */
function CompanyLogo(): JSX.Element {
  const { companyLogo } = useCompanyAssets();

  return (
    <Image
      id="logo-container"
      className={styles.logo}
      data-test="logo-container"
      src={companyLogo}
      alt="Logo"
      width={180}
      height={37}
      priority
    />
  );
}

export default CompanyLogo;
