import { Component, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("Mampfburger", "Horse Meat with delicious bread for slow people", "https://i.imgur.com/VgDdJ8R.jpg"),
    new Recipe("Double Mampfburger", "Double bread with whale meat for fat people", "https://i.imgur.com/6a2GBVO.jpg")
  ];
  constructor() {
   }

  ngOnInit(): void {
  }

}
