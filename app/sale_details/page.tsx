"use client";
import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

import styles from "./page.module.css";

import { AppContext } from "../providers";

import { ROUTES } from "../constants";
import { MessageBox, SaleSummaryBox } from "../components";
import { ProductHCard } from "../components/ProductHCard";
import { setSelectedProduct } from "../providers/AppContextProvider";

//TODO: check the need of a custom hook to handle the state of the page.
export default function SaleDetail() {
  const { state, dispatch } = useContext(AppContext);
  const pathname = usePathname();
  const { selected_product: product } = state?.sale_details || {};
  const subTitle = product?.item_type;

  useEffect(() => {
    if (pathname !== ROUTES.sale_details) {
      setSelectedProduct(undefined, dispatch);
    }
  }, [pathname]);

  return (
    <section className={styles.main}>
      <div>
        <MessageBox
          title="Tenemos las MEJORES OPCIONES para ti"
          subTitle={subTitle}
        />
      </div>
      {product && (
        <>
          <ProductHCard id={`${product.id}`} product={product}>
            <ProductHCard.Image
              id={`${product.id}`}
              src={"props.src"}
              alt={`${product.id}-image`}
              width={100}
              height={200}
              priority
            />
            <ProductHCard.ProductInfo />
          </ProductHCard>
          <SaleSummaryBox product={product} />
        </>
      )}
    </section>
  );
}
