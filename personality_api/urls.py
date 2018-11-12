from django.urls import include, path
from .views import QuestionsApi

urlpatterns = [
  path('questions/', QuestionsApi.as_view())
]