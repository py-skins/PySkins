from django.urls import re_path, include

from django.contrib import admin
from django.urls import path
import backend.csgo.views as views
import backend.csgo.views_mitko as mitko_views

urlpatterns = [
    path('case', views.CSGOCaseView.as_view()),
    path('skin', views.CSGOSkinView.as_view()),
    path('model_skin', views.CSGOModelSkinView.as_view()),
    path('case/open', views.CSGOOpenCaseView.as_view()),
    path('sticker', views.CSGOStickerView.as_view()),
    path('casino', mitko_views.Casino.as_view()),
    path('roulette', mitko_views.Roulette.as_view()),
    path('coinflip', mitko_views.CoinFlip.as_view()),
    path('case-battle', mitko_views.CaseBattle.as_view()),
    path('crash', mitko_views.Crash.as_view())
]
