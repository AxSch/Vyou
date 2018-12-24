from django.urls import path
from .views import PersonalityAnswersScoreView, EnergyAnswersScoreView
from django.conf.urls import url

urlpatterns = [
  url('^personality_score/(?P<profile>.+)/$', PersonalityAnswersScoreView.as_view()),
  url('^energy_score/(?P<profile>.+)/$', EnergyAnswersScoreView.as_view())
]