import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredients } from "src/app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('qtyInput') qtyInputRef: ElementRef;
  @ViewChild('priceInput') priceInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredients>();

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingQuantity = this.qtyInputRef.nativeElement.value;
    const ingPrice = this.priceInputRef.nativeElement.value;

    const  newIngredient = new Ingredients(ingName, ingQuantity, ingPrice);
    this.ingredientAdded.emit(newIngredient);
  }
}
