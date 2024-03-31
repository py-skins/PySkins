from django.db import models


class SkinCaseBaseMixin(models.Model):
    name = models.CharField(max_length=50)
    image_url = models.URLField(max_length=300)

    class Meta:
        abstract = True
