import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    console.log('Item added!');
  }

  deleteItem() {
    console.log('Item deleted!');
  }

  clearInput() {
    console.log('Input cleared!');
  }
}
