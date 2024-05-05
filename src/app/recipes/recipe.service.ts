import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =[
        new Recipe(
            'Chopped beef', 
            'Very tasty beef', 
            'https://kitskitchen.com/wp-content/uploads/2021/10/roastbeef2.jpg', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fires', 2)
            ]),
        new Recipe(
            'Chicken chowmin', 
            'Very tasty chicken chwomin', 
            'https://www.wellplated.com/wp-content/uploads/2022/08/chicken-chow-mein-takeaway.jpg', 
            [
                new Ingredient('Noodles', 100),
                new Ingredient('Meat', 20)
            ]),
      ];

    constructor(private shoppingListService: ShoppingListService) {}  
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}