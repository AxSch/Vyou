from django.shortcuts import render
from rest_framework import generics
from rest_framework import viewsets

from . import models
from . import serializers

# Create your views here.
class UserListView(viewsets.ModelViewSet):
  queryset = models.CustomUser.objects.all()
  serializer_class = serializers.UserSerializer