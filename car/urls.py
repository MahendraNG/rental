from car.views import CityAutocomplete
from django.conf.urls import url

urlpatterns = [
    url( r'^city-autocomplete/$', CityAutocomplete.as_view(), name='city-autocomplete',),
]