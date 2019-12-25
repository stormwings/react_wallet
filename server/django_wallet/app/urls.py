from rest_framework import routers
from django.conf.urls import include
from django.urls import path
from app.views import *

# api router
router = routers.SimpleRouter()
router.register(r'user', UserView)
router.register(r'profile', ProfileView)
router.register(r'operation', OperationView)
router.register(r'trading', TradingView)
router.register(r'wallet', WalletView)

urlpatterns = [
    # main api routes
    path('', include(router.urls)),
    # authentication routes
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/', include('rest_auth.urls')),
]
