from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authentication/', include('backend.authentication.urls')),
    path('accounts/', include('backend.accounts.urls')),
    path('cases/', include('backend.cases.urls')),
]
