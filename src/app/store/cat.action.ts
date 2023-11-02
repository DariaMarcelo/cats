import { createAction, props } from "@ngrx/store";

export const setBreeds = createAction('[Cat] Set Breeds', props<{ breeds: { id: string; name: string }[] }>());
export const setSelectedBreed = createAction('[Cat] Set Selected Breed', props<{ breed: string }>());
export const setResultsQuantity = createAction('[Cat] Set Results Quantity', props<{ quantity: number }>());
export const setCatImages = createAction('[Cat] Set Cat Images', props<{ images: any[] }>());
export const searchCats = createAction('[Cats] Search Cats',  props<{ selectedBreed: string; resultsQuantity: number }>());