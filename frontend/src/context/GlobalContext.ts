import { createContext } from 'react';
import { IGlobalContext } from './types/IGlobalContext';
import { User } from '../types/User';
import { Dayjs } from 'dayjs';
import { Client } from 'types/Client';

export const GlobalContext = createContext<IGlobalContext>({
  user: null,
  setUser: (user: User) => { },
  startDate: null,
  setStartDate: (date: Dayjs) => { },
  endDate: null,
  setEndDate: (date: Dayjs) => { },
  clientSelected: null,
  setClientSelected: (client: Client) => { },
});