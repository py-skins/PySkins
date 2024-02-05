from django.urls import path
import backend.api.views as views


urlpatterns = [
    path('case/', views.CSGOCaseView.as_view()),
    path('skin/', views.CSGOSkinView.as_view()),
    path('model_skin/', views.CSGOModelSkinView.as_view()),
    path('case/open/', views.CSGOOpenCaseView.as_view()),
    path('sticker/', views.CSGOStickerView.as_view()),
]
