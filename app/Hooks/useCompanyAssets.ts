import { useMemo } from "react";
import useCompany from "./useCompany";
// TODO: REMOVE MOCK
import { AURGI, MOTORTOWN } from "../constants";

/**
 * Custom hook used to get current app background and company logo.
 */
const useCompanyAssets = (tpvCompany = AURGI) => {
  const { isAurgiApp, isMTApp } = useCompany(tpvCompany);

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
    return { backgroundImage, companyLogo };
  }, [backgroundImage, companyLogo]);
};

export default useCompanyAssets;
