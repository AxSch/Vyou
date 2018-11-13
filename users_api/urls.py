from django.urls import include, path
from . import views
from user_profile.views import ProfileView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', views.UserListView)

urlpatterns = [
  path('', include(router.urls))
]