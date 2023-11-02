import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CatService } from "../services/cat.service";
import { searchCats, setCatImages } from "./cat.action";

@Injectable()
export class CatEffects {

  constructor(private actions$: Actions, private catService: CatService) {}

  searchCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchCats),
      switchMap(({ selectedBreed, resultsQuantity }) => {
          return this.catService.searchCats(selectedBreed, resultsQuantity).pipe(
            map((images: any[]) => setCatImages({images})),
            catchError((error) => {
              console.log('Failed to load cats: ', error);
              return EMPTY;
            }),
          )
        }
      )
    )
  );
}
