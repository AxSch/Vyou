# Generated by Django 2.0.5 on 2019-02-21 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0009_auto_20181207_0412'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='user_img',
            field=models.TextField(default='', max_length=200),
        ),
    ]