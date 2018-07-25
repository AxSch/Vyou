from django.db import models
from django.contrib.auth.models import AbstractUser

GENDERS = ['Male', 'Female', 'Other']
# Create your models here.
class User(AbstractUser):
  first_name = models.CharField(max_length=100)
  last_name = models.CharField(max_length=100)
  email = models.EmailField(unique=True)
  job_role = models.CharField(max_length=100, blank=True)
  employer = models.CharField(max_length=100, blank=True)
  dob = models.DateField(null=True)
  bio = models.TextField(max_length=500, blank=True)
  address = models.TextField(max_length=200, blank=True)
  date_joined = models.DateTimeField('join date',auto_now_add=True)
  user_img = models.ImageField(upload_to='avatars/', null=True, blank=True)

  def __str__(self):
    return self.email