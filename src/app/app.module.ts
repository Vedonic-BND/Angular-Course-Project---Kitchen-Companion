import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeComponentComponent } from "./recipe-component/recipe-component.component";
import { RecipeDetailComponent } from "./recipe-component/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-component/recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-component/recipe-list/recipe-list.component";
import { DropdownDirective } from "./shared/dropdown.directive";
import { ShoppingListComponentComponent } from "./shopping-list-component/shopping-list-component.component";
import { ShoppingListEditComponent } from "./shopping-list-component/shopping-list-edit/shopping-list-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponentComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListEditComponent,
    ShoppingListComponentComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
