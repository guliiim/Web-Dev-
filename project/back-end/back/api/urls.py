from django.urls import path
from .views import *
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('books/', book_list),      # added to postman
    path('books/<int:b_id>/', book_detail),     # added to postman
    path('categories/', category_list),     # added to postman
    path('categories/<int:c_id>/', category_detail),    # added to postman
    path('categories/<int:c_id>/books/', book_list_by_category),    # added to postman
    path('orders/', OrderListAPIView.as_view()),
    path('orders/<int:o_id>/', OrderDetailAPIView.as_view()),
    path('users/', UserListAPIView.as_view()),
    path('users/<int:u_id>/', UserDetailAPIView.as_view()),
    path('users/<int:u_id>/orders/', order_list_by_user),
    path('login', LoginAPIView.as_view()),
    path('register', RegisterAPIView.as_view()),
    path('test', TestAPIView.as_view())
]
