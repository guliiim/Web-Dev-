import { Component,OnInit } from '@angular/core';
import { Product,products } from '../products';
import {categories} from '../categories';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  
  categories =categories;
  choice='';
  products=products;
  ngOnInit():void{}
  selectItem(name:string){
    this.choice=name;
  }
}
