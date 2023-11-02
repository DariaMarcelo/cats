import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ICatState } from '../../store/cat.reducer';
import { searchCats} from "../../store/cat.action";
import { selectCatState } from "../../store/cat.selectors";
import { limits } from "../../constants/cat-filter-value";

@Component({
  selector: 'app-cat-filter',
  templateUrl: './cat-filter.component.html',
  styleUrls: ['./cat-filter.component.css'],
})
export class CatFilterComponent implements OnInit {
  filterForm: FormGroup;
  breeds: { id: string, name: string }[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
  ) {
    this.filterForm = this.formBuilder.group({
      resultsQuantity: 10,
      selectedBreed: 'all',
    });

    this.filterForm.valueChanges.subscribe((value) => {
      this.searchCats(value);
    });
  }

  ngOnInit(): void {
    this.store.select(selectCatState).subscribe((state: ICatState) => {
      this.breeds = state.breeds;
    });
  }

  searchCats(value: any) {
    this.store.dispatch(searchCats(value));
  }

  protected readonly limits = limits;
}
