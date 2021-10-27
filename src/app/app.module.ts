import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // not sure about that
import { RouterModule, Routes } from '@angular/router';


import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
//import { HeaderComponent } from './layout/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


const appRoutes: Routes = [
  { path: '', component:  AppComponent},
  { path: '',   redirectTo: '/tutorial', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
   // HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    HeaderComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
