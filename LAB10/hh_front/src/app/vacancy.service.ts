import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company, Vacancy} from "./models";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private http: HttpClient) { }

  getVacancies(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies`);
  }
  getVacancy(vacancy_id:number): Observable<Vacancy>{
    return this.http.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${vacancy_id}`);
  }
  getCompanyVacancies(company_id:number): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${company_id}/vacancies`);
  }
  getTopTen(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/top_ten`);
  }
}
