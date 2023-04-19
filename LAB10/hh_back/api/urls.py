from django.urls import path
from api import views


urlpatterns = [
    path('companies/',views.CompanyListAPIView.as_view()),
    path('companies/<int:company_id>/', views.CompanyDetailAPIView.as_view()),
    path('companies/<int:company_id>/vacancies/', views.VacancyByCompany.as_view()),
    path('vacancies/', views.VacancyListAPIView.as_view()),
    path('vacancies/<int:vacancy_id>/', views.VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', views.TopTenVacanciesView().as_view())

]