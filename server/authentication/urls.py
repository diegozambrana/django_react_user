from django.urls import path
from .views import (
    pingPublic,
    pingPrivate,
)


urlpatterns = [
    # test API ping
    path('ping_public/', pingPublic, name="ping_public"),
    path('ping_private/', pingPrivate, name="ping_private"),
]
