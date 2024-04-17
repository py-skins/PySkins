from rest_framework import serializers

from backend.cases.models import Case
from backend.skins.serializers import BaseSkinSerializer


class CaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Case
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        skins = BaseSkinSerializer(instance.base_skins.all(), many=True).data
        representation['skins'] = skins
        return representation
