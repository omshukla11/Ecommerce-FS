# Generated by Django 3.2.3 on 2021-10-19 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0008_alter_product_specific_cat'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
        migrations.AlterField(
            model_name='product',
            name='specific_cat',
            field=models.ManyToManyField(to='products.Categories'),
        ),
    ]
