import { RequestStatus } from "types/ReduxTypes";
import { User } from "types/User";

export interface UserSliceState {
  user: User | null;
  status: UserStatus;
  error: string;
}

interface UserStatus {
  loading: RequestStatus;
}