"use client";
import { Typography } from "@mui/material";
import { useAppTheme } from "@/app/Hooks";

import styles from "./messageBox.module.css";

interface Props {
  id: string;
  title?: string;
  subTitle?: string;
  content?: string;
}

function MessageBox(props: Props) {
  const { id, title, subTitle, content } = props;
  const theme = useAppTheme();
  const words = content?.split(" ");
  const firstWord = `${words?.[0]} `;
  const restOfText = words?.slice(1).join(" ");

  return (
    <div className={styles.container}>
      {title && (
        <Typography
          id={`${id}-title`}
          data-test={`${id}-title`}
          color={theme.palette.secondary.dark}
          className={styles.title}
        >
          {title}
        </Typography>
      )}

      {subTitle && (
        <Typography
          id={`${id}-subTitle`}
          data-test={`${id}-subTitle`}
          className={styles.subtitle}
        >
          {subTitle}
        </Typography>
      )}
      <div>
        {words && (
          <Typography
            id={`${id}-firts-word`}
            data-test={`${id}-firts-word`}
            className={styles.firstWord}
          >
            {firstWord}
          </Typography>
        )}
        {words && (
          <Typography
            id={`${id}-rest-of-text`}
            data-test={`${id}-rest-of-text`}
            className={styles.restOfText}
          >
            {restOfText}
          </Typography>
        )}
      </div>
    </div>
  );
}

export default MessageBox;
