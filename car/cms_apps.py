from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool
from django.utils.translation import ugettext_lazy as _


class RentalCarsApphook(CMSApp):
    name = _("Rental Car Listing")
    urls = ["car.urls"]

apphook_pool.register(RentalCarsApphook) # register the application