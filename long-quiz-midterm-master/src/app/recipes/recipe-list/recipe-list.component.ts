import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: any[] = [];

  createNewRecipe() {
    console.log('Navigating to create new recipe page');
  }
}
