import { createAction, createReducer, on, Action } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';

export const catFeatureKey = 'cat';

export interface CatState {
  breeds: string[];
  selectedBreed: string;
  resultsQuantity: number;
  catImages: any[];
}

const initialState: CatState = {
  breeds: [],
  selectedBreed: 'all',
  resultsQuantity: 10,
  catImages: [],
};
export const selectCatState = createFeatureSelector<CatState>(catFeatureKey);

export const setBreeds = createAction('[Cat] Set Breeds', (breeds: string[]) => ({ breeds }));
export const setSelectedBreed = createAction('[Cat] Set Selected Breed', (breed: string) => ({ breed }));
export const setResultsQuantity = createAction('[Cat] Set Results Quantity', (quantity: number) => ({ quantity }));
export const setCatImages = createAction('[Cat] Set Cat Images', (images: any[]) => ({ images }));

export const catReducer = createReducer(
  initialState,
  on(setBreeds, (state, { breeds }) => ({ ...state, breeds })),
  on(setSelectedBreed, (state, { breed }) => ({ ...state, selectedBreed: breed })),
  on(setResultsQuantity, (state, { quantity }) => ({ ...state, resultsQuantity: quantity })),
  on(setCatImages, (state, { images }) => ({ ...state, catImages: images }))
);
export interface SetCatImagesAction extends Action {
  type: string;
  images: any[];
}

export function reducer(state: CatState | undefined, action: Action) {
  return catReducer(state, action);
}
