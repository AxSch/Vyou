from django.db import models
from datetime import datetime
from user_profile.models import Profile


# Create your models here.

class PersonalityAnswers(models.Model):
  category_id = models.IntegerField()
  category_name = models.CharField(max_length=32)
  question_id = models.IntegerField()
  question = models.CharField(max_length=64)
  question_sign = models.CharField(max_length=16)
  scale_alpha = models.IntegerField()
  answer_score = models.IntegerField()
  answer_last_updated = models.DateField(auto_now=True, blank=True)
  answer_created = models.DateField(auto_now_add=True)
  profile = models.ForeignKey(Profile, on_delete=models.CASCADE, default=1)

  def __str__(self):
    return self.answer_score

class EnergyLevelAnswers(models.Model):
  question_id = models.IntegerField()
  question = models.CharField(max_length=64)
  category_name = models.CharField(max_length=32)
  category_id = models.IntegerField(default=1)
  answer_score = models.IntegerField()
  profile = models.ForeignKey(Profile, on_delete=models.CASCADE)


  def __str__(self):
    return self.answer_score

class EnergyFlowAnswers(models.Model):
  question_id = models.IntegerField()
  question = models.CharField(max_length=64)
  category_name = models.CharField(max_length=32)
  category_id = models.IntegerField(default=1)
  subcategory_name = models.CharField(max_length=32)
  answer_score = models.IntegerField()
  profile = models.ForeignKey(Profile, on_delete=models.CASCADE)


  def __str__(self):
    return self.answer_score

class EnergyMappingAnswers(models.Model):
  question_id = models.IntegerField()
  question = models.CharField(max_length=64)
  category_name = models.CharField(max_length=32)
  category_id = models.IntegerField(default=1)
  subcategory_name = models.CharField(max_length=32)
  subcategory_id = models.IntegerField(default=1)
  answer_score = models.IntegerField()
  profile = models.ForeignKey(Profile, on_delete=models.CASCADE)


  def __str__(self):
    return self.answer_score