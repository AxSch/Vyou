from rest_framework import serializers
from .models import PersonalityAnswers, EnergyLevelAnswers, EnergyFlowAnswers, EnergyMappingAnswers

class PersonalityAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = PersonalityAnswers
   fields = ('id','questionId', 'question', 'category_name', 'scale_alpha', 'answer_text', 'answer_score', 'answer_last_updated', 'category_id')


class EnergyLevelAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = EnergyLevelAnswers
   fields = ('questionId', 'question', 'category_name', 'answer_text', 'answer_score', 'profile')

class EnergyFlowAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = EnergyFlowAnswers
   fields = ('questionId', 'question', 'category_name', 'subcategory_name','answer_text', 'answer_score', 'profile')


class EnergyMappingAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = EnergyMappingAnswers
   fields = ('questionId', 'question', 'category_name', 'subcategory_name','answer_text', 'answer_score', 'profile')

