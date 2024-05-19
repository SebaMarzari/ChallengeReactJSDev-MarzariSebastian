import { Dispatch, SetStateAction } from "react";
// Types
import { Dayjs } from "dayjs";
import { User } from "../../types/User";
import { Client } from "types/Client";

export interface IGlobalContext {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  startDate: Dayjs;
  setStartDate: Dispatch<SetStateAction<Dayjs>>;
  endDate: Dayjs;
  setEndDate: Dispatch<SetStateAction<Dayjs>>;
  clientSelected: Client;
  setClientSelected: Dispatch<SetStateAction<Client>>;
}