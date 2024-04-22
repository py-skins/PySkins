from django.db import models


class SkinCaseBaseMixin(models.Model):
    name = models.CharField(max_length=50, unique=True)
    image_url = models.URLField(max_length=300)
    slug = models.SlugField(unique=True)

    class Meta:
        abstract = True
