from django.contrib.auth import get_user_model
from rest_framework import generics, status
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from backend.accounts.models import Account
from backend.cases.models import Case
from backend.cases.responses import NotEnoughMoneyResponse, SkinsDoesNotExistResponse
from backend.cases.serializers import CaseSerializer
from backend.cases.utils.skin_dropper import SkinDropper
from backend.skins.models import Skin
from backend.skins.serializers import SkinSerializer, BaseSkinSerializer
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
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        case = Case.objects.get(slug=self.kwargs['case_slug'])
        skins = case.base_skins.all()

        if not skins.exists():
            return SkinsDoesNotExistResponse('No skins available in this case.')

        if case.price > request.user.account.budget:
            return NotEnoughMoneyResponse('Not enough money to open the case.')

        skin_dropper = SkinDropper(skins)

        # Drop skin color based on percent condition
        skin_choices = get_skin_chance_choices()

        # Get skin color based on percent condition
        color = skin_dropper.get_skin_color(skin_choices)

        # Drop the skin
        dropped_skin = skin_dropper.get_dropped_skin(color)

        # Get all quality choices
        quality_choices = get_skin_quality_chance_choices()

        # Drop quality based on percent condition
        quality = skin_dropper.get_skin_quality(quality_choices)

        # Get random wear rating
        wear_rating = skin_dropper.get_random_wear_rating()

        Skin.objects.create(
            quality=quality,
            wear_rating=wear_rating,
            owner=Account.objects.get(user_id=request.user.id),
            base_skin=dropped_skin,
        )

        skin_serializer = BaseSkinSerializer(dropped_skin)
        return Response(skin_serializer.data, status=status.HTTP_200_OK)
