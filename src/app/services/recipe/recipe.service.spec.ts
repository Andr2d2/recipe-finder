import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { RecipeService } from '../recipe/recipe.service';

describe('RecipeService', () => {

  let recipeService: RecipeService = null;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    recipeService = TestBed.get(RecipeService);
    expect(recipeService).toBeTruthy();
  });

  it('should have subject property defined', () => {
    recipeService = TestBed.get(RecipeService);
    expect(recipeService.subjectIngredientName).toBeDefined();
  });

  it('search should fetch recipe by id \'Almond Milk\' ', () => {
    recipeService.getRecipes('Almond Milk')
      .subscribe(recipe => {
        expect(recipe).toBeDefined();
      });
  });

  it('should fetch recipe description', () => {
    recipeService.getRecipesInfo('Almond Milk')
      .subscribe(recipe => {
        expect(recipe.idMeal).toBeDefined();
      });
  });

});
