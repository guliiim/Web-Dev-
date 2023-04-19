import { Component } from '@angular/core';
import { VacancyService } from '../vacancy.service';
import { Vacancy } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy-by-com',
  templateUrl: './vacancy-by-com.component.html',
  styleUrls: ['./vacancy-by-com.component.css']
})
export class VacancyByComComponent {
  company_id!: number;
  vacancies: Vacancy[] = [];
  loading = false;

  constructor(
    private vacancyService: VacancyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loading = true;
    this.company_id = this.route.snapshot.params['id'];
    this.vacancyService.getCompanyVacancies(this.company_id).subscribe((vacancies) => {
      this.loading = false;
      this.vacancies = vacancies;
    }); 
  }
}
