from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.decorators import api_view
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
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        return Response(
            data={'user_id': user.pk, 'email': user.email},
            status=status.HTTP_200_OK,
        )


'''
{
  "email": "koko@gmail.com",
  "password": "1234qwer"
}
'''
