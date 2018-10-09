import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { IRecipe } from '../../interfaces/irecipe';
import { RecipeService } from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() recipe: IRecipe;
  @Output() moreInfo =  new EventEmitter();

  collapse: boolean = false;

  constructor(private _RecipeService: RecipeService) { }

  ngOnInit() {
  }

  toggle(recipe: IRecipe) {
    if (!this.collapse) {
      this._RecipeService.getRecipesInfo(recipe.strMeal)
        .subscribe((fetchedRecipe: IRecipe) => {
          recipe.strInstructions = fetchedRecipe.strInstructions;
          this.collapse = true;
        });
    } else {
      this.collapse = !this.collapse;
    }
  }
  
  openModal() {
    this.moreInfo.emit({ showMoreInfo: true });
    this.collapse = false;
  }
}
