from django.contrib import admin

from backend.cases.models import Case


# Register your models here.

@admin.register(Case)
class CaseAdmin(admin.ModelAdmin):
    pass
