from unicodedata import category
from django.db import models


class Product(models.Model):
    id = models.IntegerField(max_length=255)
    name = models.CharField()
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    categoryId = models.ForeignKey(category, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            # 'categoryId': self.categoryId
        }


class Category(models.Model):
    id = models.IntegerField()
    name = models.CharField()

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


