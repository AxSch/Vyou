from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from .serializer import UserModelSerializer
# Create your views here.

class UserView(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserModelSerializer
