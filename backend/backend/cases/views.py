import random

from django.contrib.auth import get_user_model
from rest_framework import generics, status
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from backend.accounts.models import Account
from backend.cases.models import Case
from backend.cases.serializers import CaseSerializer, SkinSerializer
from backend.skins.models import Skin
from backend.skins.utils.choices import get_skin_quality_chance_choices

UserModel = get_user_model()


class ListCasesAPIView(generics.ListAPIView):
    serializer_class = CaseSerializer
    queryset = Case.objects.all()


class OpenCasesAPIView(generics.RetrieveAPIView):
    queryset = Case.objects.all()
    serializer_class = CaseSerializer
    lookup_field = 'slug'

    def get_object(self):
        queryset = self.get_queryset()
        slug = self.kwargs['case_slug']
        case = get_object_or_404(queryset, slug=slug)
        return case

    def post(self, request, *args, **kwargs):
        case = self.get_object()
        skins = case.base_skins.all()

        if not skins.exists():
            return Response(
                data={"detail": "No skins available in this case."},
                status=status.HTTP_404_NOT_FOUND,
            )

        random_skin = random.choice(skins)
        wear_rating = random.uniform(0.000001, 0.999999)

        quality_choices = get_skin_quality_chance_choices()
        qualities, chances = zip(*quality_choices)
        quality = random.choices(qualities, weights=chances, k=1)[0]

        Skin.objects.create(
            quality=quality,
            wear_rating=wear_rating,
            owner=Account.objects.get(user_id=request.user.id),
            base_skin=random_skin,
        )

        skin_serializer = SkinSerializer(random_skin)
        return Response(skin_serializer.data, status=status.HTTP_200_OK)
