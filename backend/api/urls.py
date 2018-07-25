from django.contrib import admin
from django.urls import path, include
from api import views
from rest_framework_swagger.views import get_swagger_view
from rest_framework import routers

schema_view = get_swagger_view(title='test API')
router = routers.DefaultRouter()
router.register('users', views.UserView)
# router.register('auth', include('django.contrib.auth.urls')),

urlpatterns = [
    path('', schema_view),
    path('', include(router.urls)),
]