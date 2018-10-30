from rest_framework.views import APIView
from users_api.models import CustomUser
from rest_framework import authentication
# Create your models here.

class QuestionsAPI(APIView):
  authentication_classes = (authentication.TokenAuthentication,)

  def get(self, request, format=None):
    
