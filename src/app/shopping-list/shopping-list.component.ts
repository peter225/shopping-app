import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];
  private ingredientsChanged: Subscription;

  constructor(private shoppingListService: ShoppingListService){ }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsChanged = this.shoppingListService.ingredientChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(): any {
    
  }
}
