import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { selectCatImages } from "../../store/cat.selectors";

@Component({
  selector: 'app-cat-results',
  templateUrl: './cat-results.component.html',
  styleUrls: ['./cat-results.component.css'],
})
export class CatResultsComponent {
  catImages$: Observable<any[]>;

  constructor(private store: Store) {
    this.catImages$ = this.store.select(selectCatImages);
  }
}

