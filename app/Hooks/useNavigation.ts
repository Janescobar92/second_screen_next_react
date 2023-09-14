import { useMemo } from "react";

import { usePathname, useRouter } from "next/navigation";

/**
 * Custom hook used to get navigation data.
 */
const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  return useMemo(() => {
    return {
      router,
      pathname,
    };
  }, [router, pathname]);
};

export default useNavigation;
