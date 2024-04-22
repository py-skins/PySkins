from django.urls import path, include

from backend.skins import views

urlpatterns = (
    path('base-skin/', include([
        path('create/', views.BaseSkinCreateAPIView.as_view(), name='create-base-skin'),
        path('<slug:skin_slug>/update/', views.BaseSkinCreateAPIView.as_view(), name='update-base-skin'),
    ])),
)
