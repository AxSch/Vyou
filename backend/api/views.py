from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from .serializer import UserModelSerializer
from .models import User

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

