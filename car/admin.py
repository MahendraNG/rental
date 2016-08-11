from django.contrib import admin
from car.models import RentalCarListing, Car, Cateogory, Brand
from cities.models import City
from car.forms import CityForm


class CityAdmin(admin.ModelAdmin):
    form = CityForm
admin.site.register(RentalCarListing, CityAdmin)
admin.site.register(Car)
admin.site.register(Cateogory)
admin.site.register(Brand)




