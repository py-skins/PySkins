from django.db import models


class SkinCaseMixin(models.Model):
    name = models.CharField(max_length=50)
    image_url = models.URLField()
    price = models.DecimalField(decimal_places=2, max_digits=8)

    class Meta:
        abstract = True
