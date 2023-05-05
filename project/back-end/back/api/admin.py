from django.contrib import admin
from .models import Category, Book, User, Order


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'author', 'price', 'category']


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'username', 'role']


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'book', 'user']
