export interface ActionType {
  type: string;
  payload: WSPayload | null;
}

export interface WSPayload {
  data: null | number | string | Record<string, unknown>;
  room: string;
  room_event: string;
  trasnmitter: string;
}

export interface WSState {
  incoming: WSPayload | null;
  outgoing: WSPayload | null;
}
