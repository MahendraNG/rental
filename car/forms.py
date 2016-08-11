from dal import autocomplete
from django import forms
from cities.models import City
from .models import RentalCarListing

class CityForm(forms.ModelForm):
    class Meta:
        model = RentalCarListing
        fields = ('__all__')
        widgets = {
            'city': autocomplete.ModelSelect2(url='city-autocomplete')
        }