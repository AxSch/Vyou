from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views as auth_view
from rest_framework_swagger.views import get_swagger_view
from rest_framework import routers
# from .views import UserView

schema_view = get_swagger_view(title='Vyou API')
router = routers.DefaultRouter()
# router.register('users', UserView)

urlpatterns = [
    path('', schema_view),
    path('', include(router.urls)),
    path('auth/', include('rest_auth.urls')),
    # path('auth/signup/', include('rest_auth.registration.urls')),
]