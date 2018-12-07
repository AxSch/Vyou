from django.shortcuts import render
from rest_framework import generics
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .models import PersonalityAnswers, EnergyLevelAnswers, EnergyFlowAnswers, EnergyMappingAnswers
from .serializers import PersonalityAnswersSerializer, EnergyLevelAnswersSerializer, EnergyFlowAnswersSerializer, EnergyMappingAnswersSerializer

# Create your views here.
class PersonalityAnswersView(viewsets.ModelViewSet):
  queryset = PersonalityAnswers.objects.all()
  serializer_class = PersonalityAnswersSerializer
  filter_backends = (DjangoFilterBackend,)
  filter_fields = ('profile',)


class EnergyLevelAnswersView(viewsets.ModelViewSet):
  queryset = EnergyLevelAnswers.objects.all()
  serializer_class = EnergyLevelAnswersSerializer

class EnergyFlowAnswersView(viewsets.ModelViewSet):
  queryset = EnergyFlowAnswers.objects.all()
  serializer_class = EnergyFlowAnswersSerializer

class EnergyMappingAnswersView(viewsets.ModelViewSet):
  queryset = EnergyMappingAnswers.objects.all()
  serializer_class = EnergyMappingAnswersSerializer

