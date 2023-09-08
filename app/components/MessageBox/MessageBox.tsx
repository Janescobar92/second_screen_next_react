"use client";
import { Typography } from "@mui/material";
import { useAppTheme } from "@/app/Hooks";

import styles from "./messageBox.module.css";

interface Props {
  title?: string;
  subTitle?: string;
  content?: string;
}

function MessageBox(props: Props) {
  const { title, subTitle, content } = props;
  const theme = useAppTheme();
  const words = content?.split(" ");
  const firstWord = `${words?.[0]} `;
  const restOfText = words?.slice(1).join(" ");

  return (
    <div className={styles.container}>
      {title && (
        <Typography
          color={theme.palette.secondary.dark}
          className={styles.title}
        >
          {title}
        </Typography>
      )}

      {subTitle && <Typography className={styles.subtitle}>{subTitle}</Typography>}
      <div>
        {words && (
          <Typography className={styles.firstWord}>{firstWord}</Typography>
        )}
        {words && (
          <Typography className={styles.restOfText}>{restOfText}</Typography>
        )}
      </div>
    </div>
  );
}

export default MessageBox;
