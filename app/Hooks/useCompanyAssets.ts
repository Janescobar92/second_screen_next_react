import { useContext, useMemo } from "react";
import useCompany from "./useCompany";
import { ConfigContext } from "../providers";

/**
 * Custom hook used to get current app background and company logo.
 */
const useCompanyAssets = () => {
  const { state } = useContext(ConfigContext);
  const { isAurgiApp, isMTApp } = useCompany(state.company);

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
  }, [backgroundImage, companyLogo, state.company]);
};

export default useCompanyAssets;
