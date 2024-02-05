from rest_framework import serializers

from backend.api.models import SkinModel


class SkinSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkinModel
        fields = ['name', 'price', 'float']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance
