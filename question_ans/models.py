from django.db import models
from user_profile.models import Profile

# Create your models here.
class PersonalityAnswers(models.Model):
  questionId = models.IntegerField()
  question = models.CharField(max_length=64)
  category_name = models.CharField(max_length=32)
  scale_alpha = models.IntegerField()
  answer_text = models.CharField(max_length=16)
  answer_score = models.IntegerField()
  profile = models.ForeignKey(Profile, on_delete=models.CASCADE)


  def __str__(self):
    return self.answer_score

class EnergyLevelAnswers(models.Model):
  questionId = models.IntegerField()
  question = models.CharField(max_length=64)
  category_name = models.CharField(max_length=32)
  answer_text = models.CharField(max_length=16)
  answer_score = models.IntegerField()
  profile = models.ForeignKey(Profile, on_delete=models.CASCADE)


  def __str__(self):
    return self.answer_score

class EnergyFlowAnswers(models.Model):
  questionId = models.IntegerField()
  question = models.CharField(max_length=64)
  category_name = models.CharField(max_length=32)
  subcategory_name = models.CharField(max_length=32)
  answer_text = models.CharField(max_length=16)
  answer_score = models.IntegerField()
  profile = models.ForeignKey(Profile, on_delete=models.CASCADE)


  def __str__(self):
    return self.answer_score

class EnergyMappingAnswers(models.Model):
  questionId = models.IntegerField()
  question = models.CharField(max_length=64)
  category_name = models.CharField(max_length=32)
  subcategory_name = models.CharField(max_length=32)
  answer_text = models.CharField(max_length=16)
  answer_score = models.IntegerField()
  profile = models.ForeignKey(Profile, on_delete=models.CASCADE)


  def __str__(self):
    return self.answer_score