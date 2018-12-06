from django.db import models
from users_api.models import CustomUser
# Create your models here.
class Profile(models.Model):
  user = models.OneToOneField(
    CustomUser,
    on_delete=models.CASCADE,
    primary_key=True,
    default=1
  )
  name = models.CharField(max_length=100)
  sex = models.CharField(max_length=32)
  dob = models.CharField(max_length=16)
  address = models.TextField()
  job_title = models.CharField(max_length=64)
  job_industry = models.CharField(max_length=64)
  bio = models.TextField()
  education = models.CharField(max_length=64)
  user_img = models.URLField(max_length=200)
  creation_date = models.DateField(auto_now_add=True)
  last_update = models.DateField(auto_now=True)
  facebook_profile = models.URLField(max_length=200)
  linkedIn_profile = models.URLField(max_length=200)
  twitter_profile = models.URLField(max_length=200)
  gitHub_profile = models.URLField(max_length=200)
  instagram_profile = models.URLField(max_length=200)

  def __str__(self):
    return self.name
