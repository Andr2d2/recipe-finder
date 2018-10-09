import {
  Component, 
  OnInit
} from '@angular/core';

import { IngredientService } from '../../services/ingredient/ingredient.service';
import { IIngredients } from '../../interfaces/iingredients';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private _IngredientService: IngredientService) { }
  
  ingredients: IIngredients[] = [];

  private _getIngredients() {
    this._IngredientService.getIngredients()
      .subscribe(fetchedIngredients => this.ingredients = fetchedIngredients);
  }

  ngOnInit() {
    this._getIngredients();
  }

  select($event: IIngredients) {
    if ($event) {
      console.log($event.idIngredient);
    }
  }

}
