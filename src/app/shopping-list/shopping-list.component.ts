import { Component, OnInit } from '@angular/core';
import { Ingridient } from './../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [
    new Ingridient('Garlic', 10, 'cloves'),
    new Ingridient('Salt', 1, 'Tbsp')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
