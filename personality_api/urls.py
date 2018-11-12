from django.urls import include, path
from .views import QuestionsApi, EnergyFlowApi

urlpatterns = [
  path('personality questions/', QuestionsApi.as_view()),
  path('energy flow questions/', EnergyFlowApi.as_view())
]