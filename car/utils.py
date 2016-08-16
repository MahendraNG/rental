SEARCH_FIELD =['city_from','city_to','date_from','date_to','time_from','time_to','return_address','from_address','passengers']


def make_query_dict(vals):
    kwargs = {}
    
    if vals.get('city_from',None):
        kwargs.update({'city__name__icontains':vals.get('city_from')})

    if vals.get('passengers',None):
        kwargs.update({'car__seating_capacity__gte':vals.get('passengers')})
    return  kwargs