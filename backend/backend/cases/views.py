from rest_framework import generics

from backend.cases.models import Case
from backend.cases.serializers import CaseSerializer


class ListCasesView(generics.ListAPIView):
    serializer_class = CaseSerializer
    queryset = Case.objects.all()


