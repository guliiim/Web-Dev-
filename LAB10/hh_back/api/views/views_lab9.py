from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Company, Vacancy
from api.serializers import CompanySerializer
import json

# Create your views here.
@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies,many= True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)

@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)
    
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, status=200)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CompanySerializer(instance=company,data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message':'deleted'},status = 204)

def vacancy_by_company(request, company_id):
    try:
        company_name = Company.objects.get(id=company_id)
        vacancies = Vacancy.objects.filter(company=company_name)
        vacancies_list = [vacancy.to_json() for vacancy in vacancies]
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(vacancies_list, safe=False)

def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancy_list = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancy_list, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)

    if request.method == 'GET': 
        return JsonResponse(vacancy.to_json(), status=200)


def vacancy_top_ten(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        vacancy_list = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancy_list, safe=False)