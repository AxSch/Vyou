from django.db import models

# Create your models here.
class Profile(models.Model):
  name = models.CharField(max_length=100)
  gender = models.CharField(max_length=32)
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

