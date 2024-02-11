from django.urls import path

from backend.cases import views

urlpatterns = (
    path('', views.ListCasesView.as_view(), name='list cases'),
    path('skins/', views.ListSkinsView.as_view(), name='list skins'),
)
