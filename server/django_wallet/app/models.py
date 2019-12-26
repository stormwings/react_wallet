from django.contrib.auth.models import User
from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save


class Operation(models.Model):
    operation_type = models.CharField(max_length=100, default='')
    date = models.CharField(max_length=100, default='')
    currencyStart = models.CharField(max_length=100, default='', null=True)
    currencyEnd = models.CharField(max_length=100, default='')
    substractionAmount = models.FloatField(default=0)
    ingressAmount = models.FloatField(default=0)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True)


class Trading(models.Model):
    currencyStart = models.CharField(max_length=100, default='')
    currencyEnd = models.CharField(max_length=100, default='')
    trading_type = models.CharField(max_length=100, default='')
    date = models.CharField(max_length=100, default='')
    substractionAmount = models.FloatField(default=0)
    ingressAmount = models.FloatField(default=0)
    publisher = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, default='')
    address = models.CharField(max_length=100, default='')
    phone = models.CharField(max_length=100, default='')
    location = models.CharField(max_length=100, default='')
    address = models.CharField(max_length=100, default='')

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()


class Wallet(models.Model):
    BTC = models.FloatField(default=0)
    USD = models.FloatField(default=0)
    profile_id = models.OneToOneField(
        Profile, on_delete=models.CASCADE, null=True)

    @receiver(post_save, sender=Profile)
    def create_wallet(sender, instance, created, **kwargs):
        if created:
            Wallet.objects.create(profile_id=instance)

    @receiver(post_save, sender=Profile)
    def save_profile_wallet(sender, instance, **kwargs):
        instance.wallet.save()
