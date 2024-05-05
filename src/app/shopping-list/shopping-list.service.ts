
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Bananas', 10),
      ];
    
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // check if ingredient already exists
        ingredients.forEach(newIngredient => {
            const existingIngredient = this.ingredients.find(
                ingredient => ingredient.name === newIngredient.name
            );
            if (existingIngredient) {
                existingIngredient.amount += newIngredient.amount;
            } else {
                this.ingredients.push(newIngredient);
            }
        });
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
}