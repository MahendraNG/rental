from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Car(models.Model):
    name = models.CharField( max_length = 255 )
    brand = models.ForeignKey( 'Brand', on_delete=models.CASCADE, )
    category = models.ForeignKey( 'Cateogory', on_delete=models.CASCADE, )

    class Meta:
        verbose_name = "Car"
        verbose_name_plural = "Cars"

    def __str__(self):
        name = self.name

class Cateogory(models.Model):
    name = models.CharField( max_length = 255 )
    
    class Meta:
        verbose_name = "Car"
        verbose_name_plural = "Cars"

    def __str__(self):
        name = self.name
            

class Brand(models.Model):
    name = models.CharField( max_length = 255 )
    seating_capacity = models.IntegerField( default = 4 )


    class Meta:
        verbose_name = "Brand"
        verbose_name_plural = "Brands"

    def __str__(self):
        name = self.name