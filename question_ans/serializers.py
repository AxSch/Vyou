from rest_framework import serializers
from .models import PersonalityAnswers

class PersonalityAnswersSerializer(serializers.ModelSerializer):
  class Meta:
   model = PersonalityAnswers
   fields = ('questionId', 'question', 'category_name', 'scale_alpha', 'answer_text', 'answer_score', 'profile')