import { useMemo } from "react";
import useCompany from "./useCompany";

/**
 * Custom hook used to get current app background and company logo.
 */
const useCompanyAssets = (company: string) => {
  const { isAurgiApp, isMTApp } = useCompany(company);

  let backgroundImage = "";
  let companyLogo = "";

  if (isAurgiApp) {
    backgroundImage = "/img/backgrounds/aurgi/aurgi_background.svg";
    companyLogo = "/img/logos/aurgi_logo.svg";
  }
  if (isMTApp) {
    backgroundImage = "/img/backgrounds/motor_town/mt_background.svg";
    companyLogo = "/img/logos/mt_logo.svg";
  }

  return useMemo(() => {
    return {
      backgroundImage,
      companyLogo,
    };
  }, [backgroundImage, companyLogo, company]);
};

export default useCompanyAssets;
