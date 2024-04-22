import os

import django
from django.db import connection

from backend.skins.models import BaseSkin

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

# Import your models here
from backend.cases.models import Case
from backend.test_dev.test_data.cases_data import CASES_DATA


def inject_skins_and_cases_data():
    truncate_tables(['cases_case', 'skins_baseskin'])

    for json_data in CASES_DATA:
        case_data = json_data['case_data']

        case_name = case_data['name']
        case_image_url = case_data['image_url']
        case_price = case_data['price']

        case_instance = Case.objects.create(
            name=case_name,
            image_url=case_image_url,
            price=case_price,
        )

        for skin_data in json_data['skins']:
            skin_weapon_type = skin_data['skin_rarity']['weapon_type']
            skin_rarity_color = skin_data['skin_rarity']['rarity_color']

            skin_name = skin_data['name']
            skin_preview_image_url = skin_data['preview_image_url']
            skin_main_image_url = skin_data['main_image_url']

            try:
                BaseSkin.objects.create(
                    name=skin_name,
                    image_url=skin_main_image_url,
                    rarity_color=skin_rarity_color,
                    weapon_type=skin_weapon_type,
                    preview_image_url=skin_preview_image_url,
                    case_container=case_instance,
                )
            except Exception as e:
                raise Exception(e)


def truncate_tables(tables):
    with connection.cursor() as cursor:
        for table_name in tables:
            cursor.execute(f'TRUNCATE TABLE {table_name} CASCADE;')
