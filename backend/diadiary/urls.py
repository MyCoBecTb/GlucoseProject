from django.urls import path, include

urlpatterns = [
     path('', include('diary_main.urls')),
]
