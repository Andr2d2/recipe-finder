import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { IngredientService } from './services/ingredient/ingredient.service';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
