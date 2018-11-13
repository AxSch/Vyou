from django.db import models

# Create your models here.
class PersonalityAnswers(models.Model):
  questionId = models.IntegerField()
  question = models.CharField(max_length=64)
  category_name = models.CharField(max_length=32)
  scale_alpha = models.IntegerField()
  answer_text = models.CharField(max_length=16)
  answer_score = models.IntegerField()


  def __str__(self):
    return self.answer_score