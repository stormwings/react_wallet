from django.contrib.auth.models import User
from rest_framework import serializers
from app.models import Profile, Wallet


class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = ('created', 'updated')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'email')


class ProfileDataSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)
    wallet = WalletSerializer(required=False)

    class Meta:
        model = Profile
        fields = ('user', 'name', 'address', 'phone',
                  'location', 'address', 'wallet')
