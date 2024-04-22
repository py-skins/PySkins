from rest_framework import generics as views, status
from rest_framework.response import Response

from backend.skins.serializers import BaseSkinSerializer


class BaseSkinCreateAPIView(views.CreateAPIView):
    serializer_class = BaseSkinSerializer

    def create(self, request, *args, **kwargs):
        serializer = BaseSkinSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class BaseSkinUpdateAPIView(views.RetrieveUpdateAPIView):
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
