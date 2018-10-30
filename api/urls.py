from django.urls import include, path
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Vyou Api')

urlpatterns = [
  path('', schema_view),
  path('', include('users_api.urls')),
  path('auth/', include('rest_auth.urls')),
  path('register/', include('rest_auth.registration.urls')),
  path('refresh-token/', refresh_jwt_token),
]