from django.contrib.auth.models import User
from rest_framework import viewsets
from app.models import *
from app.serializers import *


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


class ProfileView(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


class OperationView(viewsets.ModelViewSet):
    queryset = Operation.objects.all()
    serializer_class = OperationSerializer

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


class TradingView(viewsets.ModelViewSet):
    queryset = Trading.objects.all()
    serializer_class = TradingSerializer

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


class WalletView(viewsets.ModelViewSet):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
