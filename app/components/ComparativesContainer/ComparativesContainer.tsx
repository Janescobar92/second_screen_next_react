"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ROUTES } from "@/app/constants";
import { ComparativeQuote, Order } from "@/app/interfaces";

import styles from "./comparativesContainer.module.css";

import { ProductHCard } from "../ProductHCard";
import { MessageBox } from "../MessageBox";
import { WSServerContext } from "@/app/providers";
import { setTPVComparativeTab } from "@/app/providers/WSProvider";

interface Props {
  comparativeQuote: ComparativeQuote;
}

function ComparativesContainer(props: Props) {
  const { comparativeQuote } = props;
  const router = useRouter();
  const { dispatch } = useContext(WSServerContext);
  const subTitle = comparativeQuote.quotes[0]?.items[0]?.item_type;

  const handleSelectItemToBuy = (order: Order) => {
    router.push(`${ROUTES.sale_details}/${order.id}`);
    setTPVComparativeTab(order, dispatch);
  };

  return (
    <div className={styles.container}>
      <div>
        <MessageBox
          title="Tenemos las MEJORES OPCIONES para ti"
          subTitle={subTitle}
        />
      </div>
      {comparativeQuote.quotes.map((order) => (
        <ProductHCard
          key={order.id}
          id={`${order.id}`}
          product={order.items[0]}
        >
          {/* <ProductHCard.Image
            id={`${order.id}`}
            src={"props.src"}
            alt={`${order.id}-image`}
            width={100}
            height={200}
            priority
          /> */}
          <ProductHCard.ProductInfo />
          <ProductHCard.SellInfo
            id={order.id}
            actionLabel="seleccionar"
            layout="row"
            price={order?.total_cost}
            showAction
            onAction={() => handleSelectItemToBuy(order)}
          />
        </ProductHCard>
      ))}
    </div>
  );
}

export default ComparativesContainer;
