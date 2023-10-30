import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatSearchComponent } from './cat-search/cat-search.component';
import { CatResultsComponent } from './cat-results/cat-results.component';
import { BreedsResolver } from './breeds.resolver';

const routes: Routes = [
  {
    path: '',
    component: CatSearchComponent,
    resolve: { breeds: BreedsResolver },
  },
  {
    path: 'results',
    component: CatResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
