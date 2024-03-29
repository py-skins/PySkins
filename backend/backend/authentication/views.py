from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView

from backend.authentication.serializers import RegisterSerializer, MyTokenObtainPairSerializer

UserModel = get_user_model()


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterAPIView(generics.CreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = RegisterSerializer
