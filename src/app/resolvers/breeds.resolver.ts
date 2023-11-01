import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { ICatState } from '../store/cat.reducer';
import { CatService } from '../services/cat.service';
import { catchError, Observable, of, switchMap } from "rxjs";
import { setBreeds } from "../store/cat.action";

@Injectable()
export class BreedsResolver implements Resolve<any> {
  constructor(private catService: CatService, private store: Store<ICatState>) {}

  resolve(): Observable<any> {
    return this.catService.getBreeds().pipe(
      switchMap((breeds) => {
        this.store.dispatch(setBreeds({ breeds } ));
        return of(breeds);
      }),
      catchError((error) => {
        console.error('Error getting cat breeds:', error);
        return of([]);
      })
    );
  }
}
