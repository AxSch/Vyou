from rest_framework import serializers
from . import models

class ProfileSerializer(serializers.ModelSerializer):
  class Meta:
   model = models.Profile
   fields = ('id', 'name', 'sex', 'dob', 'address', 'job_title', 'job_industry', 
   'bio', 'education', 'user_img', 'creation_date', 'last_update', 'facebook_profile', 'linkedIn_profile',
   'twitter_profile', 'gitHub_profile', 'instagram_profile')