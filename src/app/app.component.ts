import {
  Component,
  OnInit
} from '@angular/core';

import { RecipeService } from './services/recipe/recipe.service';
import { IRecipe } from './interfaces/irecipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  searchResult: IRecipe[] = [];

  constructor(
    private _RecipeService: RecipeService
  ) { }

  private _getRecipes(ingredientName: string) {
    this._RecipeService.getRecipes(ingredientName)
      .subscribe((recipes: IRecipe[]) => {
        this.searchResult = recipes;
        console.log(this.searchResult);
      });
  }

  ngOnInit() {
    this._RecipeService.subjectIngredientName
      .subscribe( ingredientName => this._getRecipes(ingredientName));
  }
}
