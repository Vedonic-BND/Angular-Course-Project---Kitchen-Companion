import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Name', 'Test Desc', 'https://picsum.photos/1920/1080/?random'),
    new Recipe('Test Name', 'Test Desc', 'https://picsum.photos/1920/1080/?random'),

  ];

  constructor() {

  }

  ngOnInit() {

  }
}
