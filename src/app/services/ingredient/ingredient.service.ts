import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '../../app.constants';
import { IIngredients } from '../../interfaces/iingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private _http: HttpClient) { }

  getIngredients(): Observable<IIngredients[]> {
    const endpoint = `${Constants.BASE_API_URL}list.php?i=list`;

    return this._http.get<IIngredients[]>(endpoint)
      .pipe(map((response: any) => response.meals));
  }
}
