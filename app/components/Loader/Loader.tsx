"use client";
import { GiCartwheel } from "react-icons/gi";

import styles from "./loader.module.css";

interface Props {
  color?: string;
  fontSize?: string;
  LoadingText?: string;
  showText?: boolean;
}

/**
 * Loader is a React component that displays a spinning wheel icon and a "Loading..." text.
 * It is used to indicate to the user that some content is being loaded.
 *
 * @component
 * @example
 * // The wheel icon and text will be black, the icon size will be 3rem, and the text will not be displayed.
 * <Loader color="black" fontSize="3rem" showText={false} />
 *
 * @param {Object} props - The properties passed to the Loader component.
 * @param {string} props.color - The color of the wheel icon and text. Defaults to "3rem", which seems to be a mistake. You probably want a default color like "black" or "blue".
 * @param {string} props.fontSize - The size of the wheel icon. Defaults to "3rem".
 * @param {string} props.LoadingText - The text to be displayed when loading. Defaults to "Cargando...".
 * @param {boolean} props.showText - A boolean that determines whether the "Loading..." text should be displayed. Defaults to false, meaning the text will not be displayed unless otherwise specified.
 *
 * @returns {React.Element} The React element representing the Loader component.
 */
function Loader({
  color = "#ffffff",
  fontSize = "3rem",
  LoadingText = "Cargando...",
  showText = false,
}: Props): JSX.Element {
  return (
    <div className={styles.loaderContianer}>
      <GiCartwheel className={styles.wheel} style={{ color, fontSize }} />
      <p style={{ color, visibility: showText ? "visible" : "hidden" }}>
        {LoadingText}
      </p>
    </div>
  );
}

export default Loader;
