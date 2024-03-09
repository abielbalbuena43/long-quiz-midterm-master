import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() recipe: {
    name: string,
    image: string,
    description: string,
    ingredients: string[]
  };

  constructor() { }

  addToShoppingList() {
    console.log('Added to Shopping List:', this.recipe.ingredients);
  }

  editRecipe() {
    console.log('Editing Recipe:', this.recipe.name);
  }

  deleteRecipe() {
    console.log('Deleting Recipe:', this.recipe.name);
  }
}
