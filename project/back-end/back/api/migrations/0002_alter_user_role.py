# Generated by Django 3.2.16 on 2023-04-29 05:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[('user', 'USER'), ('moderator', 'MODERATOR')], default='user', max_length=20),
        ),
    ]