# Generated by Django 3.0.1 on 2020-01-12 01:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cerveceria', '0004_auto_20200111_2250'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bash',
            name='type_beer',
            field=models.CharField(choices=[('s', 'Sangre de Lobo'), ('p', 'Pelolais'), ('c', 'Caperuza'), ('n', 'Bala de Plata'), ('e', 'Serie experimental')], default='s', max_length=1),
        ),
    ]
