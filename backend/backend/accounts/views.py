from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from backend.accounts.models import Account
from backend.accounts.serializers import AccountSerializer
from backend.skins.models import Skin
from backend.skins.serializers import SkinSerializer


class AccountListSkinsAPIView(generics.ListAPIView):
    serializer_class = SkinSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Skin.objects.filter(owner=self.request.user)
        return queryset


class AccountUpdateAPIView(generics.RetrieveUpdateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.account
