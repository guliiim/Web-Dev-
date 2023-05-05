import { Component } from '@angular/core';
import { BookSerService } from '../services/book-ser.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  
  loaded: boolean = false;
  name!: string;
  author!: string;
  description!: string;
  price!: number;
  year!: number;
  image!: string;
  category!: number;

  constructor(private bookService:BookSerService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.loaded=true;

    }

  }

  createBook(){
    const data = {
      name: this.name,
      author: this.author,
      description: this.description,
      price: this.price,
      year: this.year,
      image: this.image,
      category: this.category,
      created_by: Number(localStorage.getItem('user'))
    };
    this.bookService.addBook(data).subscribe(_ => {
      window.alert('new book with name: ' + data.name + ' was added by moderator: ' + localStorage.getItem('username'))
      this.name="";
      this.author = ""; 
      this.description = ""; 
      this.price = 0.0;
      this.year = 0;
      this.image = "";
      this.category = 0;
    });
    }
 
  
  

}
