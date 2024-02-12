from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from backend.test_dev.test_data.skin_data import SKIN_DATA
from backend.test_dev.test_data.cases_data import CASES_DATA


# Create your views here.

class CSGOTestSkinView(APIView):

    def get(self, request):
        return Response(SKIN_DATA)


class CSGOTestCaseView(APIView):

    def get(self, request):
        return Response(CASES_DATA)
