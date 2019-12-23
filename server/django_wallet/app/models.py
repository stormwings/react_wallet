from django.contrib.auth.models import User
from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.shortcuts import render, redirect, get_object_or_404, reverse


class Currency(models.Model):
    BTC = models.FloatField(default=0)
    USD = models.FloatField(default=0)


class Operation(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True)
    currency_type = models.CharField(max_length=100, default='')
    date = models.CharField(max_length=100, default='')
    currencyStart = models.CharField(max_length=100, default='')
    currencyEnd = models.CharField(max_length=100, default='')
    substractionAmount = models.FloatField(default=0)
    ingressAmount = models.FloatField(default=0)


class Trading(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True)
    currencyStart = models.CharField(max_length=100, default='')
    currencyEnd = models.CharField(max_length=100, default='')
    trading_type = models.CharField(max_length=100, default='')
    date = models.CharField(max_length=100, default='')
    substractionAmount = models.FloatField(default=0)
    ingressAmount = models.FloatField(default=0)


class Wallet(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True)
    created = models.DateTimeField(auto_now_add=True, null=True)
    updated = models.DateTimeField(auto_now=True, null=True)

    currency = models.ManyToManyField(Currency)
    operations = models.ManyToManyField(Operation)
    tradings = models.ManyToManyField(Trading)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, default='')
    address = models.CharField(max_length=100, default='')
    phone = models.CharField(max_length=100, default='')
    location = models.CharField(max_length=100, default='')
    address = models.CharField(max_length=100, default='')

    # wallet = models.ForeignKey(Wallet, on_delete=models.CASCADE)

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()
