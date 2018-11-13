from django.shortcuts import render
from rest_framework import generics
from rest_framework import viewsets

from .models import PersonalityAnswers
from .serializers import PersonalityAnswersSerializer

# Create your views here.
class PersonalityAnswersView(viewsets.ModelViewSet):
  queryset = PersonalityAnswers.objects.all()
  serializer_class = PersonalityAnswersSerializer