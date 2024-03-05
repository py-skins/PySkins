from django.contrib.auth import get_user_model, authenticate, login, logout
from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import views as rest_views

from backend.authentication.serializers import RegisterSerializer, LoginSerializer

UserModel = get_user_model()


class RegisterAPIView(rest_views.APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                data={'message': 'User registered successfully'},
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(rest_views.APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            serializer = LoginSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)

            user = authenticate(
                request,
                username=serializer.validated_data['email'],
                password=serializer.validated_data['password'],
            )

            if user is not None:
                login(request, user)

                return Response(
                    data={'message': 'Login successful'},
                    status=status.HTTP_200_OK,
                )

            else:
                raise ValidationError({'error': 'Invalid email or password'})

        except ValidationError as error:
            return Response(
                data={'error': error.detail},
                status=status.HTTP_400_BAD_REQUEST,
            )


class LogoutAPIView(rest_views.APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            logout(request)
            return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
