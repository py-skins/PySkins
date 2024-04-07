from rest_framework import serializers

from .models import Account


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['username', 'first_name', 'last_name', 'date_of_birth', 'profile_picture']
