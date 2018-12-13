from rest_framework import serializers
from .models import PersonalityAnswers, EnergyLevelAnswers, EnergyFlowAnswers, EnergyMappingAnswers

class PersonalityAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = PersonalityAnswers
   fields = ('id', 'question_id', 'question', 'question_sign','category_name', 'category_id', 'scale_alpha', 'answer_score', 'profile', 'answer_last_updated', 'answer_created')


class EnergyLevelAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = EnergyLevelAnswers
   fields = ('id', 'question_id', 'question', 'category_name', 'category_id','answer_score', 'profile')

class EnergyFlowAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = EnergyFlowAnswers
   fields = ('id','question_id', 'question', 'category_name', 'category_id', 'subcategory_name', 'answer_score', 'profile')


class EnergyMappingAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = EnergyMappingAnswers
   fields = ('id', 'question_id', 'question', 'category_name', 'category_id', 'subcategory_name', 'subcategory_id', 'answer_score', 'profile')

