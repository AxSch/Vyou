from django.core.management.base import BaseCommand
# from django.contrib.auth.models import User
from users_api.models import CustomUser

class Command(BaseCommand):

    def handle(self, *args, **options):
        if not CustomUser.objects.filter(username="admin").exists():
            CustomUser.objects.create_superuser("admin", "admin@vyous.com", "admin")