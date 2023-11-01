import { createReducer, on, Action } from '@ngrx/store';
import { setBreeds, setCatImages, setResultsQuantity, setSelectedBreed } from "./cat.action";

export interface ICatState {
  breeds: { id: string, name: string }[];
  selectedBreed: string;
  resultsQuantity: number;
  catImages: any[];
}
const initialState: ICatState = {
  breeds: [],
  selectedBreed: 'all',
  resultsQuantity: 10,
  catImages: [],
};

export const catReducer = createReducer(
  initialState,
  on(setBreeds, (state, { breeds }) => ({ ...state, breeds })),
  on(setSelectedBreed, (state, { breed }) => ({ ...state, selectedBreed: breed })),
  on(setResultsQuantity, (state, { quantity }) => ({ ...state, resultsQuantity: quantity })),
  on(setCatImages, (state, { images }) => ({ ...state, catImages: images }))
);

export function reducer(state: ICatState | undefined, action: Action) {
  return catReducer(state, action);
}
