import { JSXElementConstructor } from "react";
import { Label } from "./constants";

export type SelectionLabel = keyof typeof Label;

export type SellInfoLayout = "column" | "row";

export interface ImageProps {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  priority: boolean;
}

export interface SellInfoContentProps {
  actionLabel: string;
  layout: SellInfoLayout;
  showAction: boolean;
  onAction: () => void;
}

export type CustomChildType = {
  hasImage?: boolean;
  hasProductInfo?: boolean;
  hasSellInfo?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & JSXElementConstructor<any>;
