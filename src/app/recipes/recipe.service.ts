import { Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Mexican Taco',
      'This is the best Taco ever!',
      'http://anayasfreshmexicanrestaurant.com/wp-content/uploads/2014/12/tacos-al-pastor.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Tortilla', 3),
      ]),
    new Recipe(
      'Torta Cubana',
      'Huge and delicious torta!',
      'http://www.micocinamexicana.net/images/437_torta_Cubana.JPG',
      [
        new Ingredient('Bun', 1),
        new Ingredient('Meat', 1),
      ]),
    new Recipe(
      'Tamales',
      'A Super-Tasty Green-Pork Tamal',
      'http://www.seriouseats.com/recipes/assets_c/2015/04/20150429-tamales-cooked-joshua-bousel-thumb-1500xauto-422593.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Tamale dough', 1),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
