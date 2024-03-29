import { Component } from '@angular/core';
import { Category } from '../models';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  loaded: boolean = false;
  categories: Category[] = [];


  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.getCategories();
    }

  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.loaded = true;
    });
  }
}
