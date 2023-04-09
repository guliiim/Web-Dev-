from django.shortcuts import render
from django.http import JsonResponse
from api.models import Company, Vacancy
# Create your views here.

def company_list(request):
    companies = Company.objects.all()
    company_list = [company.to_json() for company in companies]
    
    return JsonResponse(company_list, safe=False)

def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=404)
    
    return JsonResponse(company.to_json())

def vacancy_by_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=404)
    
    vacancies = company.vacancies.all()
    vacancies_list = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_list, safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancy_list = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancy_list, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=404)
    
    return JsonResponse(vacancy.to_json())


def vacancy_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancy_list = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancy_list, safe=False)