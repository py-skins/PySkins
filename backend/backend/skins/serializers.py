from rest_framework import serializers

from backend.skins.models import BaseSkin


class SkinSerializer(serializers.ModelSerializer):
    class Meta:
        model = BaseSkin
        fields = '__all__'
