from django.db import models

from backend.cases.utils.choices import get_skin_quality_choices
from backend.cases.utils.mixins import SkinCaseMixin


class Case(SkinCaseMixin):
    pass


class Skin(SkinCaseMixin):
    SKIN_QUALITY_CHOICES = get_skin_quality_choices()

    quality = models.CharField(max_length=30, choices=SKIN_QUALITY_CHOICES)
    rarity_color = models.CharField(max_length=10)
    weapon_type = models.CharField(max_length=20)
    listings = models.PositiveIntegerField(default=1)
    drop_chance = models.DecimalField(decimal_places=2, max_digits=4)
    preview_image_url = models.URLField()
    case_container = models.ForeignKey(Case, related_name='skins', on_delete=models.DO_NOTHING)
