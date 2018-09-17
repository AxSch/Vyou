from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .serializer import UserModelSerializer
from .models import User
from datetime import datetime

# Create your views here.
def home(request):
  return render(request, '../templates/base.html')

# @api_view(["GET"])
# def get_user(request, pk):
#   user = User.objects.get(id=pk)
#   serializer = UserModelSerializer(user)
#   return Response(serializer.data)

class UserView(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserModelSerializer

class AuthToken(ObtainAuthToken):
  def post(self, request, *args, **kwargs):
    serializer = self.serializer_class(data=request.data ,context={'request': request})
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data['user']
    token, created = Token.objects.get_or_create(user=user)
    return Response({
        'token': token.key,
        'user_id': user.pk,
        'email': user.email,
        'timestamp': datetime.now(),
    })