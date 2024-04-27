from rest_framework import serializers

from backend.skins.models import Skin, BaseSkin

class BaseSkinSerializer(serializers.ModelSerializer):
    class Meta:
        model = BaseSkin
        fields = '__all__'


class SkinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skin
        fields = '__all__'