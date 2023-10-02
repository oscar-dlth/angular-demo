import { createAction, props } from "@ngrx/store";

export const THEME_SERVICE_UPDATE = '[Theme Service] update';
export const updateTheme =  createAction(THEME_SERVICE_UPDATE, props<{isDarkTheme: boolean }>())
