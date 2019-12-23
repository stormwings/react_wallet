from django.contrib.auth.models import User
from rest_framework import viewsets
from app.models import Profile
from app.serializers import UserSerializer, ProfileDataSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ProfileDataView(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileDataSerializer
