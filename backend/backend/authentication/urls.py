from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from backend.authentication import views

urlpatterns = (
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterAPIView.as_view(), name='register'),
    path('logout/', views.LogoutAPIView.as_view(), name='logout'),
    path('profile/', views.get_profile, name='profile'),
)
