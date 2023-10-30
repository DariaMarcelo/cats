import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatState } from '../cat.state';
import {selectCatState} from "../cat.state";

@Component({
  selector: 'app-cat-results',
  templateUrl: './cat-results.component.html',
  styleUrls: ['./cat-results.component.css'],
})
export class CatResultsComponent implements OnInit {
  catImages: any[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectCatState).subscribe((state: CatState) => {
      this.catImages = state.catImages;
    });

  }
}

