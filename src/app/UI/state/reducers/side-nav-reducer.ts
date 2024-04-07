import { createReducer, on } from "@ngrx/store";
import { collapse, expand, toggle } from "../actions/side-nav-actions";

export const initialState = true;

export const sideNavReducer = createReducer(
  initialState,
  on(expand, () => false),
  on(collapse, () => true),
  on(toggle, (state) => !state)
);
