import { Client, ClientInfo } from "types/Client";
import { RequestStatus } from "types/ReduxTypes";

export interface ClientsSliceState {
  clients: Client[];
  status: ClientStatus;
  error: string;
  clientInfo: ClientInfo;
}

interface ClientStatus {
  loading: RequestStatus;
  loadingClientInfo: RequestStatus;
}