from car.views import *
from django.conf.urls import url

urlpatterns = [
    url( r'^city-autocomplete/$', CityAutocomplete.as_view(), name='city-autocomplete'),
    url( r'^listing/$', CarListing.as_view(), name='car-listing'),
]