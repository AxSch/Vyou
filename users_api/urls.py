from django.urls import include, path
from .views import UserListView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserListView)

urlpatterns = [
  path('', include(router.urls))
]