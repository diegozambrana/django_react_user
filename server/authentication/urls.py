from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import pingPublic, pingPrivate


urlpatterns = [
    path('auth/token/', TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(),
         name='token_refresh'),

    # test API ping
    path('ping_public/', pingPublic, name="ping_public"),
    path('ping_private/', pingPrivate, name="ping_private"),
]
