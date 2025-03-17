import { createReducer, on } from '@ngrx/store';
import { decreaseCounter, increaseCounter } from './counter.actions';
const initialState = 0;
export const counterReduceer = createReducer(
  initialState,
  on(increaseCounter, (state) => state + 1),
  on(decreaseCounter, (state) => state - 1)
);
