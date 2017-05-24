import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a simply recipe',
      'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1-300x300.jpeg'),
    new Recipe('Another test Recipe', 'This is a simply recipe',
      'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1-300x300.jpeg'),
    new Recipe('A third test Recipe', 'This is a simply recipe',
      'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1-300x300.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
