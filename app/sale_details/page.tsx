"use client";
import { useContext } from "react";
import { MessageBox } from "../components";
import styles from "./page.module.css";
import { AppContext } from "../providers";
import { ProductHCard } from "../components/ProductHCard";

export default function SaleDetail() {
  const { state } = useContext(AppContext);
  const { selected_product: product } = state?.sale_details || {};
  const subTitle = product?.item_type;

  return (
    <section className={styles.main}>
      <div>
        <MessageBox
          title="Tenemos las MEJORES OPCIONES para ti"
          subTitle={subTitle}
        />
      </div>
      {product && (
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
      )}
    </section>
  );
}
