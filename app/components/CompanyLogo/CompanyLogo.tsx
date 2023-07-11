"use client";
import { useContext } from "react";
import Image from "next/image";

import styles from "./logo.module.css";
import useCompanyAssets from "@/app/Hooks/useCompanyAssets";
import { ConfigContext } from "@/app/providers/ConfigProvider/ConfigProvider";

/**
 * Component for displaying the company logo.
 * Uses the `useCompanyAssets` hook to retrieve the company logo image.
 * @returns {JSX.Element} - The rendered component.
 */
function CompanyLogo(): JSX.Element {
  const { state } = useContext(ConfigContext);
  const { companyLogo } = useCompanyAssets(state.company);

  return (
    <Image
      id="logo-container"
      className={styles.logo}
      src={companyLogo}
      alt="Logo"
      width={180}
      height={37}
      priority
    />
  );
}

export default CompanyLogo;
