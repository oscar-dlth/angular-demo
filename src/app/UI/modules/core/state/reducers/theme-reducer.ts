import { createReducer, on } from "@ngrx/store";
import { updateTheme } from "../actions/theme-actions";

const initialState = false;

export const themeReducer = createReducer( initialState,
  on(updateTheme, ( state, { isDarkTheme } ) => {
    return isDarkTheme
  }
  )
)
