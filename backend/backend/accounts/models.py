from django.contrib.auth import get_user_model
from django.db import models

UserModel = get_user_model()


class Account(models.Model):
    user = models.OneToOneField(
        UserModel,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    username = models.CharField(max_length=30, null=True, blank=True)
    first_name = models.CharField(max_length=30, null=True, blank=True)
    last_name = models.CharField(max_length=30, null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='media_files/', null=True, blank=True)
    budget = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        null=True, blank=True
    )
