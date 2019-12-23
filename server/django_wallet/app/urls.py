from rest_framework import routers
from django.conf.urls import include
from django.urls import path
from app.views import UserViewSet, ProfileDataView

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'profiles', ProfileDataView)

urlpatterns = [
    path('', include(router.urls)),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/', include('rest_auth.urls')),
]
