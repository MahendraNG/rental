from __future__ import unicode_literals

from django.db import models
from cities.models import City, PostalCode

# Create your models here.

class Car(models.Model):
    name = models.CharField( max_length = 255 )
    

    class Meta:
        verbose_name = "Car"
        verbose_name_plural = "Cars"

    def __str__(self):
        return self.name

class Cateogory(models.Model):
    name = models.CharField( max_length = 255 )
    
    class Meta:
        verbose_name = "Car Type"
        verbose_name_plural = "Car Types"

    def __str__(self):
        return self.name
            

class Brand(models.Model):
    name = models.CharField( max_length = 255 )
    car_name = models.ForeignKey( Car, on_delete=models.CASCADE, )
    category = models.ForeignKey( 'Cateogory', on_delete=models.CASCADE, )
    seating_capacity = models.IntegerField( default = 4 )

    @property
    def get_car_name( self ):
        return "%s %s %s"%(self.name, self.car_name.name, self.category.name)


    class Meta:
        verbose_name = "Brand"
        verbose_name_plural = "Brands"

    def __str__(self):
        return self.name

class RentalCarListing(models.Model):
    """This Model will show listing of Cars that are available"""
    car = models.ForeignKey(Brand, on_delete=models.CASCADE)
    city = models.ForeignKey(City, related_name = 'car_listings')
    minimum_charge = models.FloatField("Minum Fare for Trip", default = 0.0)
    maximum_hours = models.IntegerField("Maxmum  hours for Trip", default = 12)
    maximum_km = models.IntegerField("Maximum KM for Trip", default = 250)
    charge_per_extra_hours = models.FloatField("Extra per hours charge", default = 120)
    night_drive_charge = models.IntegerField("For Night time driving from 11PM to 5 AM", default = 0)
    per_km_charge = models.FloatField("Per KM Charge", default = 9)
    ac_charges = models.FloatField("AC Charge per KM", default = 0)
    details = models.TextField("Extra details")
    tac = models.TextField("Term and condition ")

    class Meta:
        verbose_name = "Car Listing"
        verbose_name_plural = "Cars Listing"

    def __str__(self):
        return self.car.get_car_name