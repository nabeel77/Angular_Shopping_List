import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit  {
  recipes: Recipe[] = [];
  constructor(private recipeSerivce: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeSerivce.getRecipes();
  }

}
