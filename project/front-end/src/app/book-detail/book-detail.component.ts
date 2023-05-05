import { Component,OnInit } from '@angular/core';
import { Book } from '../models';
import { BookSerService } from '../services/book-ser.service';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{
  book_id!: number;
  book!: Book;
  loaded: boolean = false;


  constructor(
    private bookSerService: BookSerService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private location: Location
    ) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      
      this.loaded=true;
      this.book_id=this.route.snapshot.params['id'];
      this.bookSerService.getBooks(this.book_id).subscribe((book)=>{
        this.loaded=false;
        this.book=book;
      })

    }

  }
  addToCart(){
    const data = {
      book: this.book.id,
      user: localStorage.getItem('user'),
      status: 'shipping'
    };
    this.orderService.addOrder(data).subscribe(_ => {
      window.alert('book with id: ' + data.book + ' was added by user: ' + data.user)
    });
  }
  goBack(): void {
    this.location.back();
  }

}
