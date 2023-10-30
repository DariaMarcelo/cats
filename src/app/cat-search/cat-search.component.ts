import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CatState, setResultsQuantity, setSelectedBreed, setCatImages, SetCatImagesAction } from '../cat.state';
import { CatService } from '../cat.service';
import { selectCatState } from '../cat.state';
import { Action } from '@ngrx/store';

@Component({
  selector: 'app-cat-search',
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.css'],
})
export class CatSearchComponent implements OnInit {
  filterForm: FormGroup;
  breeds: string[] = [];

  constructor(private formBuilder: FormBuilder, private store: Store, private catService: CatService) {
    this.filterForm = this.formBuilder.group({
      resultsQuantity: 10,
      selectedBreed: 'all',
    });
  }

  ngOnInit(): void {
    this.store.select(selectCatState).subscribe((state: CatState) => {
      this.breeds = state.breeds;
    });
  }

  searchCats() {
    const { resultsQuantity, selectedBreed } = this.filterForm.value;
    this.catService.searchCats(selectedBreed, resultsQuantity).subscribe((images: any[]) => {
      this.store.dispatch<SetCatImagesAction>(setCatImages(images));
    });

  }
}
