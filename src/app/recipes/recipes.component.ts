import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe;

  constructor(private recipeSservice: RecipeService) {}

  ngOnInit() {
    this.recipeSservice.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
