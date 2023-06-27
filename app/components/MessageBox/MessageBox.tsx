import styles from "./messageBox.module.css";

interface Props {
  content: string;
}

function MessageBox(props: Props) {
  const { content } = props;
  return <div className={styles.container}>{content}</div>;
}

export default MessageBox;
