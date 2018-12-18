from django.urls import include, path
from .views import (
  PersonalityAnswersView,
  EnergyLevelAnswersView,
  EnergyFlowAnswersView,
  EnergyMappingAnswersView
)
from rest_framework.routers import DefaultRouter
from django.conf.urls import url


router = DefaultRouter()
router.register('personality_answers', PersonalityAnswersView)
router.register('energy_level_answers', EnergyLevelAnswersView)
router.register('energy_flow_answers', EnergyFlowAnswersView)
router.register('energy_mapping_answers', EnergyMappingAnswersView)

urlpatterns = [
  path('', include(router.urls))
]