import backend.test_dev.views as views
from django.urls import path

urlpatterns = [
    path('case/', views.CSGOTestCaseView.as_view()),
    path('skin/', views.CSGOTestSkinView.as_view()),
]
