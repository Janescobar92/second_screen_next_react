export interface ConfigState {
  company: string;
  loading: boolean;
  ws_room: string;
  ws_server_port: string;
}

export interface ActionType {
  type: string;
  payload: string | ConfigState;
}
