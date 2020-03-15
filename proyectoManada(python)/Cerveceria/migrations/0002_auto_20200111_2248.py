# Generated by Django 3.0.1 on 2020-01-12 01:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cerveceria', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='checkins',
            old_name='input_id',
            new_name='input',
        ),
        migrations.RenameField(
            model_name='deliveries',
            old_name='bash_id',
            new_name='bash',
        ),
        migrations.RenameField(
            model_name='deliveries',
            old_name='client_id',
            new_name='client',
        ),
        migrations.RenameField(
            model_name='inventory',
            old_name='input_id',
            new_name='input',
        ),
        migrations.AlterField(
            model_name='deliveries',
            name='type_beer',
            field=models.CharField(choices=[('s', 'Sangre de Lobo'), ('p', 'Pelolais'), ('c', 'Caperuza'), ('n', 'Bala de Plata'), ('e', 'Serie experimental')], default='s', max_length=1),
        ),
    ]