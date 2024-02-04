from django.contrib import admin

from backend.csgo.models import SkinModel


# Register your models here.

class UserAdmin(admin.ModelAdmin):
    pass


admin.site.register(SkinModel, UserAdmin)