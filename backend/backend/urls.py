from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.api.urls')),
    path('api/test/', include('backend.test_dev.urls')),
    path('cases/', include('backend.cases.urls'))
]
