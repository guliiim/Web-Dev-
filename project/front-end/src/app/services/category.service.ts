import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Category} from "../models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private client: HttpClient) {}
  
  getCategories(): Observable<Category[]> {
    return this.client.get<Category[]>(
      `${this.BASE_URL}/categories/`
    )
  }

}
