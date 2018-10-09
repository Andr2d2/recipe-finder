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
  ingredientName: string = '';
  showModal: boolean = false;

  constructor(
    private _RecipeService: RecipeService
  ) { }

  private _getRecipes(ingredientName: string) {
    this._RecipeService.getRecipes(ingredientName)
      .subscribe((recipes: IRecipe[]) => {
        this.searchResult = recipes;
      });
  }

  ngOnInit() {
    this._RecipeService.subjectIngredientName
      .subscribe(ingredientName => {
        this._getRecipes(ingredientName);
        this.ingredientName = ingredientName;
      });
  }

  openModal($event: any) {
    this.showModal = true;    
  }
}
