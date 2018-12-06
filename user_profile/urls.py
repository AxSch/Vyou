from django.urls import include, path
from .views import ProfileView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('profiles', ProfileView)

urlpatterns = [
  path('', include(router.urls))
]