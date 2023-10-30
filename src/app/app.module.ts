import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CatSearchComponent } from './cat-search/cat-search.component';
import { CatResultsComponent } from './cat-results/cat-results.component';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { catReducer} from "./cat.state";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";
import { BreedsResolver } from "./breeds.resolver";

@NgModule({
  declarations: [
    AppComponent,
    CatSearchComponent,
    CatResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    StoreModule.forFeature('cat', catReducer),
    StoreModule.forRoot(catReducer),
    HttpClientModule
  ],
  providers: [BreedsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
