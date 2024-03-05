from django.urls import path

from backend.authentication import views

urlpatterns = (
    path('register/', views.RegisterAPIView.as_view()),
    path('login/', views.LoginAPIView.as_view()),
    path('logout/', views.LogoutAPIView.as_view()),
)
