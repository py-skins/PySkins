from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.

class SkinModel(models.Model):
    CONSUMER_GRADE = "CONSUMER_GRADE"
    INDUSTRIAL_GRADE = "INDUSTRIAL_GRADE"
    MIL_SPEC = "MIL_SPEC"
    RESTRICTED = "RESTRICTED"
    CLASSIFIED = "CLASSIFIED"
    COVERT = "COVERT"
    CONTRABAND = "CONTRABAND"
    KNIFE = "KNIFE"

    name = models.CharField(max_length=100)
    price = models.FloatField()
    stattrak = models.BooleanField(default=False)

    RARITY_CHOICES = (
        (CONSUMER_GRADE, "CONSUMER_GRADE"),
        (INDUSTRIAL_GRADE, "INDUSTRIAL_GRADE"),
        (MIL_SPEC, "MIL_SPEC"),
        (RESTRICTED, "RESTRICTED"),
        (CLASSIFIED, "CLASSIFIED"),
        (COVERT, "COVERT"),
        (CONTRABAND, "CONTRABAND"),
        (KNIFE, "KNIFE"),
    )
