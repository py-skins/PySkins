from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.csgo.urls')),
    path('api/test/', include('backend.test_dev.urls'))
]
