from django.contrib import admin
from django.urls import path, include
from api import views
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='test API')

urlpatterns = [
    path('', schema_view),
]