import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html'
})
export class RecipeComponentComponent {
  selectedRecipe: Recipe;
}
