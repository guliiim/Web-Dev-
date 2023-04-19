import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyComponent } from './company/company.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { HomeComponent } from './home/home.component';
import { TopTenComponent } from './top-ten/top-ten.component';
import { VacancyByComComponent } from './vacancy-by-com/vacancy-by-com.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    VacancyComponent,
    HomeComponent,
    TopTenComponent,
    VacancyByComComponent,
    VacancyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
