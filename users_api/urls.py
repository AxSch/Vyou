from django.urls import include, path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', views.UserListView)

urlpatterns = [
  path('', include(router.urls)),
]