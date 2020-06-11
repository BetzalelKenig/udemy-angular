import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is Just a test', 'https://149349705.v2.pressablecdn.com/wp-content/uploads/2015/02/theperfectloaf-top-3-leftover-sourdough-starter-recipes-2.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
