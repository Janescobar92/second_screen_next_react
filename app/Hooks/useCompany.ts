import { useMemo } from "react";

import { AURGI, MOTORTOWN } from "../constants";

/**
 * Custom hook used to get current app company.
 */
const useCompany = (tpvCompany = AURGI) => {
  const isAurgiApp = tpvCompany === AURGI;
  const isMTApp = tpvCompany === MOTORTOWN;

  return useMemo(() => {
    return {
      isAurgiApp,
      isMTApp,
    };
  }, [isAurgiApp, isMTApp]);
};

export default useCompany;
