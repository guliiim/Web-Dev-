import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit{
  vacancies: Vacancy[] = [];
  loading = false;

  constructor(private vacancyService: VacancyService) {}

  ngOnInit() {
    this.loading = true;
    this.vacancyService.getTopTen().subscribe((vacancies) => {
      this.loading = false;
      this.vacancies = vacancies;
    });
  }
}
