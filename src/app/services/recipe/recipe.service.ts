import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    Observable,
    Subject
} from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '../../app.constants';
import { IRecipe } from '../../interfaces/irecipe';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    constructor(private _http: HttpClient) { }

    subjectIngredientName = new Subject<string>();

    getRecipes(ingredientName: string): Observable<IRecipe[]> {
        const endpoint = `${Constants.BASE_API_URL}filter.php?i=${ingredientName}`;

        return this._http.get<IRecipe[]>(endpoint)
            .pipe(map((response: any) => response.meals));
    }
}
