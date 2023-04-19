import { Component } from '@angular/core';
import { CompanyService } from './company.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh_front';
  
  constructor(private companyService: CompanyService) {

  }

}
