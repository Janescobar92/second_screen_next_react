import { ComparativeQuote, Order, SuggestedItem } from "@/app/interfaces";

export enum WSPayloadTypes {
  text = "text",
  sale = "sale",
  comparative = "comparative",
  loading = "loading",
}

export type WSPayloadType =
  | WSPayloadTypes.text
  | WSPayloadTypes.sale
  | WSPayloadTypes.comparative
  | WSPayloadTypes.loading;

export interface ActionType {
  type: string;
  payload?: WSPayload | null;
}

export type WSData =
  | null
  | number
  | string
  | boolean
  | Record<string, unknown>
  | SuggestedItem[]
  | ComparativeQuote
  | Order;

export interface WSPayload {
  data: WSData;
  room: string;
  roomEvent: string;
  trasnmitter: string;
  type: WSPayloadType;
}

export interface WSState {
  incoming: WSPayload | null;
  outgoing: WSPayload | null;
}
