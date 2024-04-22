from django.db import models
from django.utils.text import slugify

from backend.accounts.models import Account
from backend.cases.models import Case
from backend.cases.utils.mixins import SkinCaseBaseMixin
from backend.skins.utils.choices import get_skin_quality_chance_choices


class BaseSkin(SkinCaseBaseMixin):
    rarity_color = models.CharField(max_length=10)
    weapon_type = models.CharField(max_length=20)
    preview_image_url = models.URLField()
    case_container = models.ForeignKey(Case, related_name='base_skins', on_delete=models.DO_NOTHING)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Skin(models.Model):
    SKIN_QUALITY_CHOICES = get_skin_quality_chance_choices()
    quality = models.CharField(max_length=30, choices=SKIN_QUALITY_CHOICES, editable=False)
    wear_rating = models.DecimalField(max_digits=7, decimal_places=6, editable=False)
    price = models.DecimalField(decimal_places=2, max_digits=8, default=0, editable=False)
    owner = models.ForeignKey(Account, on_delete=models.CASCADE, editable=False)
    base_skin = models.ForeignKey(BaseSkin, on_delete=models.CASCADE, editable=False)
