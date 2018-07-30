from django.contrib import admin
from django.urls import path, include
from api import views
from rest_framework.authtoken import views as auth_view
from rest_framework_swagger.views import get_swagger_view
from rest_framework import routers

schema_view = get_swagger_view(title='test API')
router = routers.DefaultRouter()
router.register('users', views.UserView)
# router.register('auth', views.AuthToken, 'api'),

urlpatterns = [
    path('', schema_view),
    path('', include(router.urls)),
    # path('auth', auth_view.obtain_auth_token),
    path('auth/', include('rest_auth.urls'))
]
# router.register('auth', auth_view.obtain_auth_token)