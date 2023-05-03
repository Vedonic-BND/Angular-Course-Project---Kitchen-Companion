import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Name 01', 'Test Desc 01', 'https://picsum.photos/1920/1080/?01'),
    new Recipe('Test Name 02', 'Test Desc 02', 'https://picsum.photos/1920/1080/?02'),

  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {

  }

  ngOnInit() {

  }
}
