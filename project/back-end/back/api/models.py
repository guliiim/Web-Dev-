from django.db import models
from enum import Enum

from rest_framework_simplejwt.tokens import RefreshToken


class UserRole(Enum):
    USER = 'user'
    MODERATOR = 'moderator'


class OrderStatus(Enum):
    SUCCESSFUL = 'successful'
    SHIPPING = 'shipping'
    CANCELLED = 'cancelled'


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.id}: {self.name}'

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    role = models.CharField(max_length=20, choices=[(tag.value, tag.name) for tag in UserRole],
                            default=UserRole.USER.value)

    def __str__(self):
        return f'{self.id}: {self.username}, role: {self.role}'

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class Book(models.Model):
    name = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField(default=0.0)
    year = models.IntegerField()
    image = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id}: {self.name}'

    class Meta:
        verbose_name = 'Book'
        verbose_name_plural = 'Books'


class Order(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=[(tag.value, tag.name) for tag in OrderStatus],
                              default=OrderStatus.SHIPPING.value)

    def __str__(self):
        return f'{self.id}: {self.user.username} -> {self.book.name}. STATUS: {self.status}'
    
    def to_json(self):
        return {
            'id': self.id,
            'book': self.book.name,
            'user': self.user.username,
            'status': self.status
            }

    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'
    
