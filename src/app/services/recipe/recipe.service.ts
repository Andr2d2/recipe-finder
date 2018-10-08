import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '../../app.constants';
import { Recipe } from '../../models/recipe';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    constructor(private _http: HttpClient) { }

    getRecipes(id: number): Observable<Recipe> {
        const endpoint = `${Constants.BASE_API_URL}lookup.php?i${id}`;

        return this._http.get<Recipe>(endpoint)
            .pipe(map((response: any) => {
                return new Recipe().parseFromJson(response);
            }));
    }
}
