import styles from "./messageBox.module.css";

interface Props {
  content: string;
}

function MessageBox(props: Props) {
  const { content } = props;
  const words = content.split(" ");
  const firstWord = `${words[0]} `;
  const restOfText = words.slice(1).join(" ");

  return (
    <div className={styles.container}>
      <p>
        <span className={styles.firstWord}>{firstWord}</span>
        <span className={styles.restOfText}>{restOfText}</span>
      </p>
    </div>
  );
}

export default MessageBox;
