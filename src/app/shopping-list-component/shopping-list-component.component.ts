import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-component',
  templateUrl: './shopping-list-component.component.html'
})
export class ShoppingListComponentComponent implements OnInit{
  ingredients: Ingredients[] = [
    new Ingredients ("Pork", 5, 10),
    new Ingredients ("Beef", 3, 15),
  ];

  constructor() {

  }

  ngOnInit() {

  }
}
