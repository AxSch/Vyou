from django.shortcuts import render
from rest_framework.views import APIView
import numpy as np
from django.http import JsonResponse
from question_ans.models import ( 
  PersonalityAnswers,
  EnergyLevelAnswers, 
  EnergyFlowAnswers, 
  EnergyMappingAnswers
)
# Create your views here.
def checkModelExists(queryset):
  if queryset.exists():
    result = [answer.answer_score for answer in queryset]
    return result
  else:
    result = 0
    return result


class EnergyAnswersScoreView(APIView):
  def get(self, request, format=None, *args,**kwargs):
    profile = self.kwargs['profile']
    queryset = EnergyLevelAnswers.objects.all()
    queryset2 = EnergyFlowAnswers.objects.all()
    queryset3 = EnergyMappingAnswers.objects.all()
    
    energy_level_scores = checkModelExists(queryset)
    energy_flow_scores = checkModelExists(queryset2)
    energy_mapping_scores = checkModelExists(queryset3)
    result = int(np.sum(energy_level_scores)) + int(np.sum(energy_flow_scores)) + int(np.sum(energy_mapping_scores))
    
    return JsonResponse({'result': result})

class PersonalityAnswersScoreView(APIView):
  def get(self, request, format=None, *args,**kwargs):
    profile = self.kwargs['profile']
    queryset = PersonalityAnswers.objects.filter(profile=profile, question_sign="negative")
    queryset2 = PersonalityAnswers.objects.filter(profile=profile, question_sign="positive")
    
    neg_scores = []
    pos_scores = []
    if queryset.exists():
      neg_scores = [answer.answer_score * -1 for answer in queryset]
      total_neg_score = int(np.sum(neg_scores))
    else:
      total_neg_score = 0

    if queryset2.exists():
      pos_scores = [answer.answer_score for answer in queryset]
      total_pos_score = int(np.sum(pos_scores))
    else:
      total_pos_score = 0

    result = total_pos_score + total_neg_score
    return JsonResponse({'result': result})
  
