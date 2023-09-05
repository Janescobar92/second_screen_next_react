"use client";

// React imports
import { useState, useEffect } from "react";

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
import { ProductCard } from "../ProductCard";

// Destructuring styles for easier access
const {
  buttonBackGround,
  carousel,
  dot,
  dotActive,
  productsContainer,
  stepperBackgorund,
} = styles;

// Props interface for the ProductsContainer component
interface Props {
  sugestedItems: SuggestedItem[];
}

/**
 * The ProductsContainer component displays a carousel of product cards.
 * @param props { sugestedItems: SuggestedItem[] }
 * @returns JSX.Element.
 */
function ProductsContainer(props: Props) {
  const { sugestedItems } = props;
  const [currentItem, setCurrentItem] = useState(0);
  const [cardsPerview, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        return setCardsPerView(1);
      } else if (window.innerWidth <= 1024) {
        return setCardsPerView(2);
      } else {
        return setCardsPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goNext = () => {
    setCurrentItem((oldItem) => {
      let newItem = oldItem + 1;
      if (newItem >= sugestedItems.length) {
        newItem = 0;
      }
      return newItem;
    });
  };

  const goPrev = () => {
    setCurrentItem((oldItem) => {
      let newItem = oldItem - 1;
      if (newItem < 0) {
        newItem = sugestedItems.length - 1;
      }
      return newItem;
    });
  };

  let itemsToShow = [];
  if (sugestedItems.length === 1) {
    itemsToShow = [sugestedItems[currentItem]];
  } else if (sugestedItems.length === 2 || cardsPerview === 2) {
    itemsToShow = [
      sugestedItems[currentItem],
      sugestedItems[(currentItem + 1) % sugestedItems.length],
    ];
  } else {
    itemsToShow = [
      sugestedItems[
        (currentItem - 1 + sugestedItems.length) % sugestedItems.length
      ],
      sugestedItems[currentItem],
      sugestedItems[(currentItem + 1) % sugestedItems.length],
    ];
  }

  return (
    <>
      <div id="container" className={carousel}>
        <div>
          <ContainedIconButton
            backGroundColor={buttonBackGround}
            id="prev-products-carousel-button"
            onClick={goPrev}
          >
            <ArrowBackIosIcon id="prev-button-icon" />
          </ContainedIconButton>
        </div>
        <div className={productsContainer}>
          {itemsToShow.map((item) => (
            <ProductCard key={item.nav_id} suggestedItem={item} />
          ))}
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
      </div>
      <MobileStepper
        color="primary"
        activeStep={currentItem}
        backButton={null}
        className={stepperBackgorund}
        position="static"
        nextButton={null}
        steps={sugestedItems.length}
        classes={{ dot, dotActive }}
      />
    </>
  );
}

export default ProductsContainer;
