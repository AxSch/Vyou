from rest_framework import serializers
from .models import PersonalityAnswers, EnergyLevelAnswers, EnergyFlowAnswers, EnergyMappingAnswers

class PersonalityAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = PersonalityAnswers
   fields = ('question_id', 'question', 'question_sign','category_name', 'category_id', 'scale_alpha', 'answer_score', 'profile', 'answer_last_updated', 'answer_created')


class EnergyLevelAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = EnergyLevelAnswers
   fields = ('question_id', 'question', 'category_name', 'answer_score', 'profile')

class EnergyFlowAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = EnergyFlowAnswers
   fields = ('question_id', 'question', 'category_name', 'subcategory_name', 'answer_score', 'profile')


class EnergyMappingAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = EnergyMappingAnswers
   fields = ('question_id', 'question', 'category_name', 'subcategory_name', 'answer_score', 'profile')

