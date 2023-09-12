"use client";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./page.module.css";

import { AppContext } from "../../providers";

import { ROUTES } from "../../constants";
import {
  MessageBox,
  SaleSummaryBox,
  ServicesSelectionDialog,
} from "../../components";
import { ProductHCard } from "../../components/ProductHCard";
import { setComparativeQuote } from "../../providers/AppContextProvider";
import { ExtraItem } from "../../interfaces";

//TODO: check the need of a custom hook to handle the state of the page.
export default function SaleDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const { state, dispatch } = useContext(AppContext);
  const [showServicesSelection, setShowServicesSelection] = useState(false);
  const pathname = usePathname();
  const order = state?.sale_details?.comparative_quote?.quotes.find(
    (quote) => `${quote.id}` === id
  );

  //TODO: CHECK PRODUCT CONST
  const product = order?.items[0];
  const subTitle = product?.item_type;
  const pageRendered = pathname.includes(ROUTES.sale_details);

  //TODO: CHECK BOOLEAN and add logic of allready added services.
  const hasServices = !!product?.extra_items?.length;

  useEffect(() => {
    if (!pageRendered) {
      setComparativeQuote(undefined, dispatch);
    }
  }, [pageRendered]);

  useEffect(() => {
    if (hasServices && pageRendered) {
      setShowServicesSelection(hasServices);
    }
  }, [hasServices, pageRendered]);

  const handleCloseServicesSelection = () => {
    setShowServicesSelection(false);
  };

  const handleSubmit = (services: ExtraItem[]) => {
    console.log("submit", { services });
  };

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
          <SaleSummaryBox order={order} />
        </>
      )}

      {hasServices && (
        <ServicesSelectionDialog
          open={showServicesSelection}
          services={product?.extra_items}
          onClose={handleCloseServicesSelection}
          onSubmit={handleSubmit}
        />
      )}
    </section>
  );
}
