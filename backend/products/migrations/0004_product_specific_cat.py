# Generated by Django 3.2.3 on 2021-10-19 12:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_rename_categorie_categories'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='specific_cat',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.categories'),
        ),
    ]
