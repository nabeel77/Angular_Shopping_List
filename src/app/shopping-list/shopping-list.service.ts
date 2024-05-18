import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Bananas', 10),
      ];
    
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
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
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
}