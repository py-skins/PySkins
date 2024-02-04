from django.urls import re_path, include
import backend.test_dev.views as views
from django.contrib import admin
from django.urls import path
import backend.csgo.views_mitko as mitko_views

urlpatterns = [
    path('case', views.CSGOTestCaseView.as_view()),
    path('skin', views.CSGOTestSkinView.as_view()),

]
