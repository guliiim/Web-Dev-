import { Component ,Input ,OnInit} from '@angular/core';
import { Book } from '../models';
import { BookSerService } from '../services/book-ser.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 
  books:Book[]=[];
  loaded: boolean = false;
  
  constructor(private bookserservice: BookSerService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.getBook();
    }

  }

  getBook() {
    this.bookserservice.getBook().subscribe((books) => {
      this.books = books;
      this.loaded = true;
    });
  }

 
}
