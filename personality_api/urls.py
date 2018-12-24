from django.urls import include, path
from .views import PersonalityApi, EnergyFlowApi, EnergyLevelApi, EnergyMappingApi

urlpatterns = [
  path('personality/', PersonalityApi.as_view()),
  path('energy_flow/', EnergyFlowApi.as_view()),
  path('energy_level/', EnergyLevelApi.as_view()),
  path('energy_mapping/', EnergyMappingApi.as_view()),
]