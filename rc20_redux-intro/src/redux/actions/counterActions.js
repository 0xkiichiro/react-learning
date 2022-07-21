import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes";

export const increase = () => {
  return { type: INCREMENT };
};
export const decrease = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
