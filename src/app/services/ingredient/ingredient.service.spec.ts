import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { IngredientService } from './ingredient.service';

describe('IngredientService', () => {

  let ingredientService: IngredientService = null;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    ingredientService = TestBed.get(IngredientService);
    expect(ingredientService).toBeTruthy();
  });

  it('should fetch all ingredients', () => {
    ingredientService.getIngredients()
      .subscribe(ingredients => {
        expect(ingredients.length).toBeTruthy()
      });
  });
});
