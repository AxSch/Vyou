from django.urls import include, path
from .views import PersonalityAnswersView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('answers', PersonalityAnswersView)

urlpatterns = [
  path('', include(router.urls))
]