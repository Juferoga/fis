# Generated by Django 4.2.1 on 2023-05-27 18:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('unity', '0002_unity_fk_type'),
        ('user', '0003_employee_client'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='fk_unity',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='unity.unity'),
        ),
    ]
