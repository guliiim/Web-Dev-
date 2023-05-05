from datetime import datetime, timedelta
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.utils import jwt_encode_handler, jwt_decode_handler
from django.contrib.auth.hashers import make_password, check_password
from .serializers import *
from .models import *


# Create your views here.

@api_view(['GET', 'POST'])
def book_list(request):
    if request.method == 'GET':
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
            
        if not is_moderator(request) and not is_user(request):
            return Response({'error': 'request is forbidden'}, status=403)
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data, status=200)
    if request.method == 'POST':
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
            
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


@api_view(['GET'])
def book_list_by_category(request, c_id):
    if request.method == 'GET':
        try:
            if is_token_exp(request): 
                return Response({'error': 'status is unauthorized'}, status=403)
            books = Book.objects.filter(category=c_id)
        except Book.DoesNotExist as e:
            return Response({'error': str(e)}, status=400)
        if not is_moderator(request) and not is_user(request):
            return Response({'error': 'request is forbidden'}, status=403)
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data, status=200)


@api_view(['GET', 'PUT', 'DELETE'])
def book_detail(request, b_id):
    try:
        book = Book.objects.get(id=b_id)
    except Book.DoesNotExist as e:
        return Response({'error': str(e)}, status=400)

    if request.method == 'GET':
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
        if not is_moderator(request) and not is_user(request):
            return Response({'error': 'request is forbidden'}, status=403)
        serializer = BookSerializer(book)
        return Response(serializer.data, status=200)

    if request.method == 'PUT':
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
            
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        serializer = BookSerializer(data=request.data, instance=book)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=200)

    if request.method == 'DELETE':
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
            
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        book.delete()
        return Response({'request': 'deleted ' + str(book)})


@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
        if not is_moderator(request) and not is_user(request):
            return Response({'error': 'request is forbidden'}, status=403)
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data, status=200)

    if request.method == 'POST':
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def category_detail(request, c_id):
    try:
        category = Category.objects.get(id=c_id)
    except Category.DoesNotExist as e:
        return Response({'error': str(e)}, status=400)

    if request.method == 'GET':
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
            
        if not is_moderator(request) and not is_user(request):
            return Response({'error': 'request is forbidden'}, status=403)
        serializer = CategorySerializer(category)
        return Response(serializer.data, status=200)

    if request.method == 'PUT':
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
            
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        serializer = CategorySerializer(data=request.data, instance=category)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=200)

    if request.method == 'DELETE':
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        category.delete()
        return Response({'request': 'deleted ' + str(category)})


class OrderListAPIView(APIView):
    def get(self, request):
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        orders = Order.objects.all()
        orders_json = [o.to_json() for o in orders]
        return Response(orders_json, status=200)

    def post(self, request):
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
        if not is_moderator(request) and not is_user(request):
            return Response({'error': 'request is forbidden'}, status=403)
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


@api_view(['GET'])
def order_list_by_user(request, u_id):
    if request.method == 'GET':
        try:
            if is_token_exp(request): 
                return Response({'error': 'status is unauthorized'}, status=403)
            header = request.META.get('HTTP_AUTHORIZATION')
            if header is not None:
                token = header.split()[-1]
                decoded = jwt_decode_handler(token)
                user_id = decoded['user']
                user = User.objects.filter(id=user_id).first()
                if user.id != u_id and not is_moderator(request):
                    return Response({'error': 'request is forbidden'}, status=403)
                orders = Order.objects.filter(user=u_id)
        except Order.DoesNotExist as e:
            return Response({'error': str(e)}, status=400)
        orders_json = [o.to_json() for o in orders]
        return Response(orders_json, status=200)


class OrderDetailAPIView(APIView):
    def get_order(self, o_id):
        try:
            order = Order.objects.get(id=o_id)
            return order
        except Order.DoesNotExist as e:
            return Response({'error': str(e)}, status=400)

    def get(self, request, o_id):
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
        order = self.get_order(o_id)
        if isinstance(order, Response):
            return order
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        serializer = OrderSerializer(order)
        return Response(serializer.data, status=200)

    def put(self, request, o_id):
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
        order = self.get_order(o_id)
        if isinstance(order, Response):
            return order
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)

        user_instance = User.objects.filter(username=request.data.get('user')).first()
        book_instance = Book.objects.filter(name=request.data.get('book')).first()
        data = {
            'book': book_instance.id,
            'user': user_instance.id,
            'status': request.data.get('status')
        }
        serializer = OrderSerializer(instance=order, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, o_id):
        if is_token_exp(request): 
            return Response({'error': 'status is unauthorized'}, status=403)
        order = self.get_order(o_id)
        if isinstance(order, Response):
            return order
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        order.delete()
        return Response({'request': 'deleted ' + str(order)})


class UserListAPIView(APIView):
    def get(self, request):
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=200)

    # def post(self, request):
    #     serializer = UserSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=201)
    #     return Response(serializer.errors, status=400)


class UserDetailAPIView(APIView):
    def get_user(self, u_id):
        try:
            user = User.objects.get(id=u_id)
            return user
        except User.DoesNotExist as e:
            return Response({'error': str(e)}, status=400)

    def get(self, request, u_id):
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        user = self.get_user(u_id)
        if isinstance(user, Response):
            return user
        serializer = UserSerializer(user)
        return Response(serializer.data, status=200)

    def put(self, request, u_id):
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        user = self.get_user(u_id)
        if isinstance(user, Response):
            return user
        password = make_password(request.data.get('password'))
        serializer = UserSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save(password=password)
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, u_id):
        if not is_moderator(request):
            return Response({'error': 'request is forbidden'}, status=403)
        user = self.get_user(u_id)
        if isinstance(user, Response):
            return user
        user.delete()
        return Response({'request': 'deleted ' + str(user)})


class LoginAPIView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = User.objects.filter(username=username).first()
        if not user or not check_password(password, user.password):
            return Response({'error': 'Invalid username or password'}, status=401)

        token = jwt_encode_handler(
            {'user': user.pk, 'exp_time': int((datetime.now() + timedelta(days=1)).timestamp())}
        )

        return Response(
            {
                'token': str(token),
                'user': user.id,
                'role': user.role
            }
            , status=200
        )


class RegisterAPIView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.filter(username=request.data['username']).exists()
            if user:
                return Response({'error': 'Username already exists. Choose different username.'}, status=400)

            user = serializer.save(password=make_password(request.data['password']))
            token = jwt_encode_handler(
                {'user': user.pk, 'exp_time': int((datetime.now() + timedelta(days=1)).timestamp())})

            return Response(
                {
                    'token': str(token),
                    'user': user.id,
                    'role': user.role
                }
                , status=201
            )

        return Response(serializer.errors, status=400)


class TestAPIView(APIView):
    def get(self, request):
        header = request.META.get('HTTP_AUTHORIZATION')
        if header is not None:
            token = header.split()[-1]
            decoded = jwt_decode_handler(token)
            user_id = decoded['user']
            user = User.objects.filter(id=user_id).first()
            serializer = UserSerializer(user)
            return Response(serializer.data, status=200)


def is_moderator(request):
    header = request.META.get('HTTP_AUTHORIZATION')
    if header is not None:
        token = header.split()[-1]
        decoded = jwt_decode_handler(token)
        user_id = decoded['user']
        user = User.objects.filter(id=user_id).first()
        if user.role != 'moderator':
            return False
        return True


def is_user(request):
    header = request.META.get('HTTP_AUTHORIZATION')
    if header is not None:
        token = header.split()[-1]
        decoded = jwt_decode_handler(token)
        user_id = decoded['user']
        user = User.objects.filter(id=user_id).first()
        if user.role != 'user':
            return False
        return True


def is_token_exp(request):
    header = request.META.get('HTTP_AUTHORIZATION')
    if header is not None:
        token = header.split()[-1]
        decoded = jwt_decode_handler(token)
        exp_time = decoded['exp_time']
        if int(datetime.now().timestamp()) > exp_time:
            return True
        return False
