from django.urls import include, path
from .views import PersonalityQuestionsApi, EnergyFlowApi, EnergyLevelApi

urlpatterns = [
  path('personality questions/', PersonalityQuestionsApi.as_view()),
  path('energy flow questions/', EnergyFlowApi.as_view()),
  path('energy level questions/', EnergyLevelApi.as_view()),
]