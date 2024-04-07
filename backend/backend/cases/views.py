import random

from django.contrib.auth import get_user_model
from rest_framework import generics, status
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from backend.accounts.models import Account
from backend.cases.models import Case
from backend.cases.serializers import CaseSerializer, SkinSerializer
from backend.skins.models import Skin
from backend.skins.utils.choices import get_skin_quality_chance_choices, get_skin_chance_choices

UserModel = get_user_model()


class CaseListAPIView(generics.ListAPIView):
    serializer_class = CaseSerializer
    queryset = Case.objects.all()


class CaseDetailAPIView(generics.RetrieveAPIView):
    queryset = Case.objects.all()
    serializer_class = CaseSerializer
    lookup_field = 'slug'

    def get_object(self):
        queryset = self.get_queryset()
        slug = self.kwargs['case_slug']
        case = get_object_or_404(queryset, slug=slug)
        return case


class CaseOpenAPIView(generics.CreateAPIView):
    serializer_class = SkinSerializer

    # permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        case = Case.objects.get(slug=self.kwargs['case_slug'])
        skins = case.base_skins.all()

        if not skins.exists():
            return Response(
                data={'detail': 'No skins available in this case.'},
                status=status.HTTP_404_NOT_FOUND,
            )

        # Drop skin color based on percent condition
        skin_choices = get_skin_chance_choices()
        colors, chances = zip(*skin_choices)
        color = random.choices(colors, weights=chances, k=1)[0]

        # Drop the skin
        skins_with_matching_color = skins.filter(rarity_color=color)
        dropped_skin = random.choice(skins_with_matching_color)

        # Drop quality based on percent condition
        quality_choices = get_skin_quality_chance_choices()
        qualities, chances = zip(*quality_choices)
        quality = random.choices(qualities, weights=chances, k=1)[0]

        wear_rating = random.uniform(0.000001, 0.999999)

        Skin.objects.create(
            quality=quality,
            wear_rating=wear_rating,
            owner=Account.objects.get(user_id=request.user.id),
            base_skin=dropped_skin,
        )

        skin_serializer = SkinSerializer(dropped_skin)
        return Response(skin_serializer.data, status=status.HTTP_200_OK)
