# Generated by Django 5.0.3 on 2024-03-26 20:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='course',
            options={'verbose_name_plural': '3.Course'},
        ),
        migrations.AlterModelOptions(
            name='coursecategory',
            options={'verbose_name_plural': '2.CourseCategory'},
        ),
        migrations.AlterModelOptions(
            name='student',
            options={'verbose_name_plural': '4.Student'},
        ),
        migrations.AlterModelOptions(
            name='teacher',
            options={'verbose_name_plural': '1.Teacher'},
        ),
    ]
