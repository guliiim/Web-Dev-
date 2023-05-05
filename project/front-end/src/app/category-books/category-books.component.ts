import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models';
import { BookSerService } from '../services/book-ser.service';
@Component({
  selector: 'app-category-books',
  templateUrl: './category-books.component.html',
  styleUrls: ['./category-books.component.css']
})
export class CategoryBooksComponent implements OnInit {
  books: Book[] = [];
  loaded: boolean = false;


  constructor(private bookService: BookSerService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.getBooksByCategory();
    }

  }

  getBooksByCategory() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.bookService.getBooksByCategory(id).subscribe((books) => {
        this.books = books;
        this.loaded = true;
      });
    });
  }

}
