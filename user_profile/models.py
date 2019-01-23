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
  name = models.CharField(max_length=100, default="n/a")
  sex = models.CharField(max_length=32, default="n/a")
  dob = models.CharField(max_length=16, default="n/a")
  address_no = models.IntegerField(default=1)
  address_street = models.CharField(max_length=128, default="n/a")
  address_city = models.CharField(max_length=128, default="n/a")
  address_postcode = models.CharField(max_length=32, default="n/a")
  address_country = models.CharField(max_length=128, default="n/a")
  job_title = models.CharField(max_length=64, default="n/a")
  job_industry = models.CharField(max_length=64, default="n/a")
  bio = models.TextField()
  education = models.CharField(max_length=64, default="n/a")
  user_img = models.TextField(max_length=200, default="")
  creation_date = models.DateField(auto_now_add=True)
  last_update = models.DateField(auto_now=True)
  facebook_profile = models.URLField(max_length=200)
  linkedIn_profile = models.URLField(max_length=200)
  twitter_profile = models.URLField(max_length=200)
  gitHub_profile = models.URLField(max_length=200)
  instagram_profile = models.URLField(max_length=200)

  def __str__(self):
    return self.name
