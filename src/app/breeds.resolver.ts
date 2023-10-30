import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { CatState, setBreeds } from './cat.state';
import { CatService } from './cat.service';

@Injectable()
export class BreedsResolver implements Resolve<any> {
  constructor(private catService: CatService, private store: Store<CatState>) {}

  resolve() {
    return this.catService.getBreeds().subscribe((breeds: string[]) => {
      this.store.dispatch(setBreeds( breeds ));
    });
  }
}
