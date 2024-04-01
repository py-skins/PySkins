from django.db import models
from django.utils.text import slugify

from backend.accounts.models import Account
from backend.cases.utils.choices import get_skin_quality_chance_choices
from backend.cases.utils.mixins import SkinCaseBaseMixin


class Case(SkinCaseBaseMixin):
    price = models.DecimalField(decimal_places=2, max_digits=8)
    slug = models.SlugField(unique=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class SkinBase(SkinCaseBaseMixin):
    rarity_color = models.CharField(max_length=10)
    weapon_type = models.CharField(max_length=20)
    preview_image_url = models.URLField()
    case_container = models.ForeignKey(Case, related_name='base_skins', on_delete=models.DO_NOTHING)


class Skin(models.Model):
    SKIN_QUALITY_CHOICES = get_skin_quality_chance_choices()
    quality = models.CharField(max_length=30, choices=SKIN_QUALITY_CHOICES)
    price = models.DecimalField(decimal_places=2, max_digits=8, default=0)
    owner = models.ForeignKey(Account, on_delete=models.CASCADE)
    base_skin = models.ForeignKey(SkinBase, on_delete=models.CASCADE)
