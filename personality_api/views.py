from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication
import json

# Create your views here.
class QuestionsApi(APIView):
  def get(self, request, format=None):
    with open('api_data/Questions.json', 'r') as file:
      questions_data = json.load(file)
      return Response(questions_data)
