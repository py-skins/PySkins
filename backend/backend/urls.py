from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.api.urls')),
    path('authentication/', include('backend.authentication.urls')),
    path('api/test/', include('backend.test_dev.urls')),
    path('cases/', include('backend.cases.urls')),
]
