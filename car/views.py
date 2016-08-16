from django.shortcuts import render
from django.views import generic
from dal import autocomplete
from .models import RentalCarListing
from cities.models import City

from .utils import make_query_dict



class CityAutocomplete(autocomplete.Select2QuerySetView):
    def get_queryset(self):
        # Don't forget to filter out results depending on the visitor !
        if not self.request.user.is_authenticated():
            return City.objects.none()

        qs = City.objects.all()

        if self.q:
            qs = qs.filter(name__istartswith=self.q)

        return qs


class CarListing(generic.ListView):
    """docstring for ClassName"""
    context_object_name='cars'
    model = RentalCarListing
    template_name = 'car/listing.html'

    def get_queryset(self):
        # city = self.request.get('city_from', '')
        # city_to = self.request.get('city_to', '')
        # from_date = self.request.get('date_from', '')
        # to_date = self.request.get('date_to', '')

        # from_date = self.request.get('time_from', '')
        # to_date = self.request.get('time_to', '')

        # return_address = self.request.get('return_address', '')
        # from_address = self.request.get('from_address', '')
        # passenger = self.request.get('passengers', '')

        kwargs = make_query_dict(self.request.GET)

        object_list = self.model.objects.filter(**kwargs)
        return object_list

        # def get_queryset(self):
    #     qs = super(CarListing, self).get_queryset()
    #     return qs.namespace(self.namespace)

    # def get_paginate_by(self, queryset):
    #     try:
    #         return self.config.paginate_by
    #     except AttributeError:
    #         return 10
    #     