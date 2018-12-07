from rest_framework import serializers
from . import models

class ProfileSerializer(serializers.ModelSerializer):
  class Meta:
   model = models.Profile
   fields = ('user', 'name', 'sex', 'dob', 'address_no', 'address_street', 'address_city', 'address_postcode', 'address_country', 
   'job_title', 'job_industry', 'bio', 'education', 'user_img', 'creation_date', 'last_update', 'facebook_profile', 
   'linkedIn_profile', 'twitter_profile', 'gitHub_profile', 'instagram_profile')