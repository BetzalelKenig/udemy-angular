import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is Just a test', 'https://www.wholesomeyum.com/wp-content/uploads/2017/03/wholesomeyum_low-carb-bread-recipe-almond-flour-bread-paleo-gluten-free.jpg'),
    new Recipe('A Test Recipe', 'This is Just a test', 'https://www.wholesomeyum.com/wp-content/uploads/2017/03/wholesomeyum_low-carb-bread-recipe-almond-flour-bread-paleo-gluten-free.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
