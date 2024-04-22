from django.http import JsonResponse


class NotEnoughMoneyResponse(JsonResponse):
    def __init__(self, message, **kwargs):
        data = {'error': message}
        super().__init__(data, status=400, **kwargs)


class SkinsDoesNotExistResponse(JsonResponse):
    def __init__(self, message, **kwargs):
        data = {'error': message}
        super().__init__(data, status=404, **kwargs)
