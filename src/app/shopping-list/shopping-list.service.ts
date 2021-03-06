// import { Ingredient } from '../shared/Ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';
// import { Ingredient } from '../shared/Ingredient.model';


export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  ingredientChanged = new Subject<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
