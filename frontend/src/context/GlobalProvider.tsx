import { useState } from "react";
// Context
import { GlobalContext } from "./GlobalContext";
// Types
import { User } from "../types/User";
// Dayjs
import dayjs, { Dayjs } from 'dayjs';
import { Client } from "types/Client";

interface IProps {
  children: React.ReactNode;
}

const GlobalProvider = ({ children }: IProps) => {
  const currentDate = dayjs();
  const [user, setUser] = useState<User>(null);
  const [startDate, setStartDate] = useState<Dayjs>(currentDate);
  const [endDate, setEndDate] = useState<Dayjs>(currentDate);
  const [clientSelected, setClientSelected] = useState<Client>();

  return (
    <GlobalContext.Provider value={{
      user,
      setUser,
      startDate,
      setStartDate,
      endDate,
      setEndDate,
      clientSelected,
      setClientSelected,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;