from django.urls import path
from diary_main import views

urlpatterns = [
    path('glucose/', views.GlucoseEntriesList.as_view()),
    path('glucose/<uuid:guid>/', views.GlucoseEntriesDetail.as_view()),
]