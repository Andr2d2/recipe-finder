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

  it('search should fetch recipe by id \'52885\' ', () => {
    recipeService.getRecipes(52885)
      .subscribe(recipe => {
        expect(recipe.name).toBeDefined();
      });
  });

});
