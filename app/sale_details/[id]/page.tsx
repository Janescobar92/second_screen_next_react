"use client";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./page.module.css";

import { ROUTES } from "../../constants";
import {
  MessageBox,
  SaleSummaryBox,
  ServicesSelectionDialog,
} from "../../components";
import { ProductHCard } from "../../components/ProductHCard";
import {
  ComparativeQuote,
  ExtraItem,
  Order,
  SuggestedItem,
} from "../../interfaces";
import {
  WSServerContext,
  updateTPVComparativeTab,
} from "@/app/providers/WSProvider";

//TODO: check the need of a custom hook to handle the state of the page.
export default function SaleDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  // TODO : UNIFY CONTEXTS.
  const { state: wsState, dispatch: wsDispatch } = useContext(WSServerContext);
  const [showServicesSelection, setShowServicesSelection] = useState(false);
  const pathname = usePathname();
  const order = (wsState?.incoming?.data as ComparativeQuote)?.quotes?.find(
    (quote) => `${quote.id}` === id
  );

  console.log({ order, pathname, id, wsState });

  //TODO: CHECK PRODUCT CONST
  const product = order?.items[0];
  const subTitle = product?.item_type;
  const pageRendered = pathname.includes(ROUTES.sale_details);

  //TODO: CHECK BOOLEAN and add logic of allready added services.
  const hasServices = !!product?.extra_items?.length;

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
    if (!product || !order) return;
    const updateProduct: SuggestedItem = {
      ...product,
      extra_items: services,
    };
    const updatedOrder: Order = { ...order, items: [updateProduct] };
    updateTPVComparativeTab(updatedOrder, wsDispatch);
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
