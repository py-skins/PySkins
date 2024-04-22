from django.db import models
from django.utils.text import slugify

from backend.accounts.models import Account
from backend.cases.utils.mixins import SkinCaseBaseMixin


class Case(SkinCaseBaseMixin):
    price = models.DecimalField(decimal_places=2, max_digits=8)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
