import { useMemo } from "react";

/**
 * Custom hook used to get current app background and company logo.
 */
const useServicesAssets = () => {
  const nInflateAsset = "/img/services_assets/nitrogen_inflate.webp";

  return useMemo(() => {
    return {
      nInflateAsset,
    };
  }, [nInflateAsset]);
};

export default useServicesAssets;
