import { PRODUCT_TYPE } from "@/app/constants/item";
import { SuggestedItem } from "../interfaces";

/**
 * Custom hook used to get current product brand logo.
 */
const useBrandAsset = (product: SuggestedItem) => {
  let brandLogo = "";
  const basePath = "/img/brands";
  const brand = product.main_attributes?.brand.toLowerCase();

  if (product.item_type === PRODUCT_TYPE.TIRE && brand) {
    brandLogo = `${basePath}/tires/${brand}.jpg`;
  }
  if (product.item_type === PRODUCT_TYPE.BATTERY && brand) {
    brandLogo = `${basePath}/batteries/${brand}.jpg`;
  }
  console.log({ brandLogo, product });

  return brandLogo;
};

export default useBrandAsset;
