import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CatFilterComponent } from './components/cat-filter/cat-filter.component';
import { CatResultsComponent } from './components/cat-results/cat-results.component';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { catReducer} from "./store/cat.reducer";
import { StoreModule } from "@ngrx/store";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BreedsResolver } from "./resolvers/breeds.resolver";
import { ApiKeyInterceptor } from "./interceptors/interseptor";
import { CatsPageComponent } from './components/cats-page/cats-page.component';
import { MatRadioModule } from "@angular/material/radio";
import { EffectsModule } from "@ngrx/effects";
import { CatEffects } from "./store/cat.effect";
import { CatService } from "./services/cat.service";

@NgModule({
  declarations: [
    AppComponent,
    CatFilterComponent,
    CatResultsComponent,
    CatsPageComponent,
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
    EffectsModule.forRoot([CatEffects]),
    HttpClientModule,
    MatRadioModule,
  ],
  providers: [
    BreedsResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    },
    CatService,
],
  bootstrap: [AppComponent],
})
export class AppModule { }
