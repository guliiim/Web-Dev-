import { Component,OnInit} from '@angular/core';
import { products }from '../products'
import { PhoneService } from '../services/phone/phone.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements  OnInit {
  products: any =products;
  phones:String[]=[];
  constructor(private phoneService:PhoneService){}

  ngOnInit():void{
    this.phones=this.phoneService.getAll();
  }
}


