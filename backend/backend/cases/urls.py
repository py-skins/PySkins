from django.urls import path, include

from backend.cases import views

urlpatterns = (
    path('', views.CaseListAPIView.as_view(), name='case-list'),
    path('<slug:case_slug>/', include([
        path('', views.CaseDetailAPIView.as_view(), name='open-details'),
        path('open/', views.CaseOpenAPIView.as_view(), name='open-cases'),
    ]))
)
