import { Children, JSXElementConstructor, isValidElement } from "react";

import styles from "./infoContent.module.css";

type CustomChildType = {
  isSelectionLabel?: boolean;
  isProductTitle?: boolean;
  isPExtraData?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & JSXElementConstructor<any>;

interface Props {
  children: React.ReactElement<CustomChildType>[];
}

function InfoContent(props: Props) {
  const { children } = props;

  const childrenArray = Children.toArray(children);

  const selectionLabel = childrenArray?.find(
    (child) =>
      isValidElement(child) &&
      "isSelectionLabel" in (child.type as CustomChildType)
  );

  const productTitle = childrenArray?.find(
    (child) =>
      isValidElement(child) &&
      "isProductTitle" in (child.type as CustomChildType)
  );

  const isPExtraData = childrenArray?.find(
    (child) =>
      isValidElement(child) && "isPExtraData" in (child.type as CustomChildType)
  );

  return (
    <div className={styles.container}>
      {selectionLabel && <div>{selectionLabel}</div>}
      {productTitle && <div>{productTitle}</div>}
      {isPExtraData && <div>{isPExtraData}</div>}
    </div>
  );
}

const InfoContentSelectionLabel = ({ children }: { children: JSX.Element }) => {
  return <div>{children}</div>;
};

InfoContentSelectionLabel.isSelectionLabel = true;
InfoContent.SelectionLabel = InfoContentSelectionLabel;

const InfoContentProductTitle = ({ children }: { children: JSX.Element }) => {
  return <div>{children}</div>;
};

InfoContentProductTitle.isProductTitle = true;
InfoContent.PTitle = InfoContentProductTitle;

const InfoContentPExtraData = ({ children }: { children: JSX.Element }) => {
  return <div>{children}</div>;
};

InfoContentPExtraData.isPExtraData = true;
InfoContent.PExtraData = InfoContentPExtraData;

export default InfoContent;
