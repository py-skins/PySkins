from django.urls import path

from backend.accounts import views
from backend.accounts.views import AccountUpdateAPIView

urlpatterns = (
    path('', views.AccountListSkinsAPIView.as_view(), name='account-skins'),
    path('update/', AccountUpdateAPIView.as_view(), name='account-update'),
)
