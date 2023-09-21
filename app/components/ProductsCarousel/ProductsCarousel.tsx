"use client";
// React imports
import { useState } from "react";

// Material UI imports
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { MobileStepper } from "@mui/material";

// Local component imports
import { ContainedIconButton } from "../ContainedIconButton";

// Local interfaces imports
import { SuggestedItem } from "@/app/interfaces";

// Styles imports
import styles from "./productsCarousel.module.css";
import { ProductHCard } from "../ProductHCard";

// Destructuring styles for easier access
const {
  buttonBackGround,
  carousel,
  stepperBackgorund,
  dot,
  dotHidden,
  dotActive,
} = styles;

// Props interface for the ProductsCarousel component
interface Props {
  items: SuggestedItem[];
  hideDots?: boolean;
}

/**
 * The ProductsCarousel component displays a carousel of product cards.
 * @param props { items: SuggestedItem[] }
 * @returns JSX.Element.
 */
function ProductsCarousel(props: Props) {
  const { hideDots, items } = props;
  const [currentItem, setCurrentItem] = useState(0);

  const goNext = () => {
    setCurrentItem((oldItem) => (oldItem + 1) % items.length);
  };

  const goPrev = () => {
    setCurrentItem((oldItem) => (oldItem - 1 + items.length) % items.length);
  };

  return (
    <div id="products-carousel-container" className={carousel}>
      <div>
        <ContainedIconButton
          backGroundColor={buttonBackGround}
          id="prev-products-carousel-button"
          onClick={goPrev}
        >
          <ArrowBackIosIcon id="prev-button-icon" />
        </ContainedIconButton>
      </div>
      <div className={stepperBackgorund}>
        <ProductHCard
          id={`${items[currentItem].id}`}
          product={items[currentItem]}
        >
          <ProductHCard.Image
            id={`${items[currentItem].id}`}
            src={items[currentItem].item_type}
            alt={`${items[currentItem].id}-image`}
            width={100}
            height={200}
            priority
          />
          <ProductHCard.ProductInfo />
        </ProductHCard>
      </div>
      <div>
        <ContainedIconButton
          backGroundColor={buttonBackGround}
          id="next-products-carousel-button"
          onClick={goNext}
        >
          <ArrowForwardIosIcon id="next-button-icon" />
        </ContainedIconButton>
      </div>
      <MobileStepper
        color="primary"
        activeStep={currentItem}
        backButton={null}
        className={stepperBackgorund}
        position="static"
        nextButton={null}
        steps={items.length}
        classes={{ dot: hideDots ? dotHidden : dot, dotActive }}
      />
    </div>
  );
}

export default ProductsCarousel;
