# Generated by Django 3.0.1 on 2020-02-06 23:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cerveceria', '0010_bash_folio'),
    ]

    operations = [
        migrations.AddField(
            model_name='deliveries',
            name='user',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
