import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RecipeComponentComponent } from './recipe-component/recipe-component.component';
import { RecipeDetailComponent } from './recipe-component/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-component/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-component/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListEditComponent } from './shopping-list-component/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponentComponent } from './shopping-list-component/shopping-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponentComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListEditComponent,
    ShoppingListComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
