import { Component } from '@angular/core';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent {
  @Input()
  vacancies: Vacancy[] = [];
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.vacancyService.getVacancies().subscribe((vacancies) => {
      this.loading = false;
      this.vacancies = vacancies;
    });
  }
  viewDetails(vacancy: Vacancy) {
    this.router.navigate(['/vacancies', vacancy.id]);
  }
}
