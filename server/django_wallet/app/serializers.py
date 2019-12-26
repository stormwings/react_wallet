from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import serializers
from app.models import *


class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = ('key', 'user')


class UserSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = User
        fields = ('id', 'first_name', 'email')


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model = Profile
        fields = ('id', 'user', 'wallet', 'name', 'address', 'phone',
                  'location', 'address')


class OperationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Operation
        fields = ('id', 'operation_type', 'date', 'currencyStart',
                  'currencyEnd', 'substractionAmount', 'ingressAmount', 'user')


class TradingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trading
        fields = ('id', 'currencyStart', 'currencyEnd', 'trading_type',
                  'date', 'substractionAmount', 'ingressAmount', 'user')


class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = ('id', 'profile_id', 'BTC', 'USD')
