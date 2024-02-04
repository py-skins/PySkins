# from django.contrib.auth import get_user_model
# from django.db import models
#
# # Create your models here.
#
# UserModel = get_user_model()
#
#
# class Profile(models.Model):
#     user = models.OneToOneField(
#         UserModel,
#         on_delete=models.RESTRICT,
#     )
#
#     budget = models.DecimalField(
#         max_length=2,
#         max_digits=8,
#         decimal_places=2
#     )
#
#     inventory = models.ForeignKey(
#         'Skin',
#         on_delete=models.RESTRICT
#     )
#
#
# class Skin(models.Model):
#     name = models.CharField(
#         max_length=200,
#     )
#
#     price = models.DecimalField(
#         max_digits=8,
#         decimal_places=2
#     )
#
#     # factory new, battle scared, etc.
#     skin_type = models.CharField(
#         max_length=30,
#     )
#
