from django.db import models

from backend.cases.mixins import SkinCaseMixin


class Case(SkinCaseMixin):
    pass


class Skin(SkinCaseMixin):
    FACTORY_NEW = "factory new"
    MINIMAL_WEAR = "minimal wear"
    FIELD_TESTED = "field-tested"
    WELL_WORN = "well-worn"
    BATTLE_SCARRED = "battle-scarred"
    STATTRAK_FACTORY_NEW = "stattrak factory new"
    STATTRAK_MINIMAL_WEAR = "stattrak minimal wear"
    STATTRAK_FIELD_TESTED = "stattrak field-tested"
    STATTRAK_WELL_WORN = "stattrak well-worn"
    STATTRAK_BATTLE_SCARRED = "stattrak battle-scarred"

    SKIN_QUALITY_CHOICES = (
        (FACTORY_NEW, FACTORY_NEW),
        (MINIMAL_WEAR, MINIMAL_WEAR),
        (FIELD_TESTED, FIELD_TESTED),
        (WELL_WORN, WELL_WORN),
        (BATTLE_SCARRED, BATTLE_SCARRED),
        (STATTRAK_FACTORY_NEW, STATTRAK_FACTORY_NEW),
        (STATTRAK_MINIMAL_WEAR, STATTRAK_MINIMAL_WEAR),
        (STATTRAK_FIELD_TESTED, STATTRAK_FIELD_TESTED),
        (STATTRAK_WELL_WORN, STATTRAK_WELL_WORN),
        (STATTRAK_BATTLE_SCARRED, STATTRAK_BATTLE_SCARRED),
    )

    quality = models.CharField(max_length=30, choices=SKIN_QUALITY_CHOICES)
    rarity_color = models.CharField(max_length=10)
    weapon_type = models.CharField(max_length=20)
    listings = models.PositiveIntegerField(default=1)
    drop_chance = models.DecimalField(decimal_places=2, max_digits=4)
    preview_image_url = models.URLField()
    case_container = models.ForeignKey(Case, related_name='skins', on_delete=models.DO_NOTHING)
