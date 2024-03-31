from django.urls import path, include

from backend.cases import views

urlpatterns = (
    path('', views.ListCasesAPIView.as_view(), name='list-cases'),
    path('<slug:case_slug>/', include([
        path('', views.OpenCasesAPIView.as_view(), name='open-cases'),
    ]))
)
