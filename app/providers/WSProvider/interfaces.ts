import { SuggestedItem } from "@/app/interfaces";

export enum WSPayloadTypes {
  text = "text",
  products = "products",
}

export type WSPayloadType = WSPayloadTypes.text | WSPayloadTypes.products;

export interface ActionType {
  type: string;
  payload: WSPayload | null;
}

export interface WSPayload {
  data: null | number | string | Record<string, unknown> | SuggestedItem[];
  room: string;
  roomEvent: string;
  trasnmitter: string;
  type: WSPayloadType;
}

export interface WSState {
  incoming: WSPayload | null;
  outgoing: WSPayload | null;
}
