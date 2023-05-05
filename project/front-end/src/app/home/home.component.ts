import { Component ,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loaded: boolean = false;

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.loaded = true;
    }
  }
  


}
