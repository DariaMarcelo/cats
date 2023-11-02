import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICatState } from "./cat.reducer";

export const catFeatureKey = 'cat';
export const selectCatState = createFeatureSelector<ICatState>(catFeatureKey);
export const selectCatImages = createSelector(selectCatState, (state: ICatState) => state.catImages);