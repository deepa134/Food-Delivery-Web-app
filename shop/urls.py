from django.urls import path
from . import views
urlpatterns=[
    path("api/items/",views.get_items),
    path("api/create-order/",views.create_order),
    path("api/orders/<int:user_id>/",views.user_orders),
]