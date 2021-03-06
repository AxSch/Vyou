# Generated by Django 2.0.5 on 2018-12-09 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('question_ans', '0002_auto_20181209_1544'),
    ]

    operations = [
        migrations.RenameField(
            model_name='energyflowanswers',
            old_name='questionId',
            new_name='question_id',
        ),
        migrations.RenameField(
            model_name='energylevelanswers',
            old_name='questionId',
            new_name='question_id',
        ),
        migrations.RenameField(
            model_name='energymappinganswers',
            old_name='questionId',
            new_name='question_id',
        ),
        migrations.RemoveField(
            model_name='energyflowanswers',
            name='answer_text',
        ),
        migrations.RemoveField(
            model_name='energylevelanswers',
            name='answer_text',
        ),
        migrations.RemoveField(
            model_name='energymappinganswers',
            name='answer_text',
        ),
        migrations.RemoveField(
            model_name='personalityanswers',
            name='answer_text',
        ),
        migrations.AddField(
            model_name='energyflowanswers',
            name='category_id',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='energylevelanswers',
            name='category_id',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='energymappinganswers',
            name='category_id',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='energymappinganswers',
            name='subcategory_id',
            field=models.IntegerField(default=1),
        ),
    ]
