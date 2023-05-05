import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Book, Order} from '../models';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrls: ['./my-book.component.css']
})
export class MyBookComponent implements OnInit{
  orders: Order[]=[];
  moderator_orders: Order[]=[];
  loaded: boolean = false;

  constructor(private orderService: OrderService,
    private route: ActivatedRoute,
    ) {
  }


  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.getUserOrders()
      this.getOrders()
    }

  }

  getOrders() {
    let role = localStorage.getItem('role');
    if (role === 'moderator') {
      this.orderService.getOrder().subscribe((m_orders) => {
        this.moderator_orders = m_orders;
        this.loaded = true;
      });
    }
  }

  getUserOrders() {
    let user = Number(localStorage.getItem('user'));
    this.orderService.getOrderByUser(user).subscribe((orders) => {
      this.orders = orders;
      this.loaded = true;
    });
  }

  confirmOrder(id: number, book: string, user: string) {
    const data = {
      book: book,
      user: user,
      status: 'successful'
    }
    this.orderService.updateOrder(id, data).subscribe(_ => {
      window.alert('order for book: ' + data.book + ' by user: ' + data.user + ' was confirmed')
      this.ngOnInit()
    });
  }
    
  cancelOrder(id: number, book: string, user: string) {
    const data = {
      book: book,
      user: user,
      status: 'cancelled'
    }
    this.orderService.updateOrder(id, data).subscribe((order) => {
      window.alert('order for book: ' + data.book + ' by user: ' + data.user + ' was cancelled')
      this.ngOnInit()
    });
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrderById(id).subscribe(() => {
      window.alert('order id: ' + id + 'was deleted')
      this.ngOnInit()
    });
  }

}
