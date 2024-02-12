from rest_framework import generics

from backend.cases.models import Case, Skin
from backend.cases.serializers import CaseSerializer, SkinSerializer


class ListCasesView(generics.ListAPIView):
    serializer_class = CaseSerializer
    queryset = Case.objects.all()


class ListSkinsView(generics.ListAPIView):
    serializer_class = SkinSerializer
    queryset = Skin.objects.order_by('id')[:2]
