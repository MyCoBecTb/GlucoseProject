# Generated by Django 4.1.7 on 2023-04-13 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diary_main', '0002_remove_glucoseentry_customer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='glucoseentry',
            name='measure_time',
            field=models.BigIntegerField(),
        ),
    ]
