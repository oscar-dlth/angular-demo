import { createReducer, on } from "@ngrx/store";
import { updateTheme } from "../actions/theme-actions";

const initialState = true;

export const themeReducer = createReducer( initialState,
  on(updateTheme, ( state, { isDarkTheme } ) => {
    return isDarkTheme
  }
  )
)
