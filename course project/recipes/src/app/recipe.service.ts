import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is Just a test', 'https://www.wholesomeyum.com/wp-content/uploads/2017/03/wholesomeyum_low-carb-bread-recipe-almond-flour-bread-paleo-gluten-free.jpg'),
    new Recipe('A Test Recipe 2', 'This is Just a test', 'https://www.wholesomeyum.com/wp-content/uploads/2017/03/wholesomeyum_low-carb-bread-recipe-almond-flour-bread-paleo-gluten-free.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
