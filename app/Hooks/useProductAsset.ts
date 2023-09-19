import { PRODUCT_TYPE } from "@/app/constants/item";

/**
 * Custom hook used to get current product asset.
 */
const useProductAsset = (item_type: string) => {
  let productAsset = "";
  const basePath = "/img/products";

  if (item_type === PRODUCT_TYPE.TIRE) {
    productAsset = `${basePath}/tire.png`;
  }

  return productAsset;
};

export default useProductAsset;
