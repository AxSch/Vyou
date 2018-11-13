from django.urls import include, path
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Vyou Api')

urlpatterns = [
  path('', schema_view),
  path('', include('users_api.urls')),
  path('questions/', include('personality_api.urls')),
  path('', include('user_profile.urls')),
  path('auth/', include('rest_auth.urls')),
  path('registration/', include('rest_auth.registration.urls')),
  path('refresh-token/', refresh_jwt_token),
]