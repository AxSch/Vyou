from django.urls import include, path
from .views import PersonalityApi, EnergyFlowApi, EnergyLevelApi, EnergyMappingApi

urlpatterns = [
  path('personality questions/', PersonalityApi.as_view()),
  path('energy flow questions/', EnergyFlowApi.as_view()),
  path('energy level questions/', EnergyLevelApi.as_view()),
  path('energy mapping questions/', EnergyMappingApi.as_view()),
]