from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication
import json

# Create your views here.
class PersonalityApi(APIView):
  def get(self, request, format=None):
    with open('api_data/PersonalityQuestions.json', 'r') as file:
      questions_data = json.load(file)
      return Response(questions_data)

class EnergyFlowApi(APIView):
  def get(self, request, format=None):
    with open('api_data/EnergyFlowQuestions.json', 'r') as file:
      energy_flow_data = json.load(file)
      return Response(energy_flow_data)


class EnergyLevelApi(APIView):
  def get(self, request, format=None):
    with open('api_data/EnergyLevelQuestions.json', 'r') as file:
      energy_flow_data = json.load(file)
      return Response(energy_flow_data)

class EnergyMappingApi(APIView):
  def get(self, request, format=None):
    with open('api_data/EnergyMappingQuestions.json', 'r') as file:
      questions_data = json.load(file)
      return Response(questions_data)