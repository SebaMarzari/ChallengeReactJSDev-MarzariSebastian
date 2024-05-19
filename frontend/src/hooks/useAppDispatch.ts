import { useDispatch } from "react-redux";
// Types
import type { AppDispatch } from "redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();