import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsResolver } from './resolvers/breeds.resolver';
import { CatsPageComponent } from "./components/cats-page/cats-page.component";

const routes: Routes = [
  {
    path: '',
    component: CatsPageComponent,
    resolve: { breeds: BreedsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
