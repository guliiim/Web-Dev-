import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Book } from '../models';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookSerService {
  logged:any;
  
  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private client: HttpClient) {}
  
  getBook(): Observable<Book[]> {
    return this.client.get<Book[]>(
      `${this.BASE_URL}/books/`
    )
  }

  getBooks(id: number): Observable<Book> {
    return this.client.get<Book>(
      `${this.BASE_URL}/books/${id}`
    )
  }

  getBooksByCategory(id: number): Observable<Book[]> {
    return this.client.get<Book[]>(`${this.BASE_URL}/categories/${id}/books/`);
  }

  addBook(data: object): Observable<Book> {
    return this.client.post<Book>(`${this.BASE_URL}/books/`, data);
    }
}
