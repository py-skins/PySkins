import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

# Import your models here
from backend.cases.models import Skin, Case
from backend.test_dev.test_data.cases_data import CASES_DATA

Skin.objects.all().delete()
Case.objects.all().delete()

for json_data in CASES_DATA:
    case_data = json_data["case_data"]

    case_name = case_data["name"]
    case_image_url = case_data["image_url"]
    case_price = case_data["price"]

    case_instance = Case.objects.create(
        name=case_name,
        image_url=case_image_url,
        price=case_price,
    )

    for skin_data in json_data['skins']:
        skin_rarity_name = skin_data['skin_rarity']['rarity_name']
        skin_weapon_type = skin_data['skin_rarity']['weapon_type']
        skin_rarity_color = skin_data['skin_rarity']['rarity_color']
        skin_chance = skin_data['skin_rarity']['chance']

        skin_name = skin_data['name']
        skin_preview_image_url = skin_data['preview_image_url']
        skin_main_image_url = skin_data['main_image_url']
        skin_item_type = skin_data['item_type']

        for skin_quality, info in skin_data['quality_prices'].items():
            skin_price = info.get('price')
            if not skin_price:
                continue

            skin_listing = info.get('listings')
            if not skin_listing:
                continue

            skin_instance = Skin(
                name=skin_name,
                image_url=skin_main_image_url,
                price=skin_price,
                quality=skin_quality,
                rarity_color=skin_rarity_color,
                weapon_type=skin_weapon_type,
                listings=skin_listing,
                drop_chance=skin_chance,
                preview_image_url=skin_preview_image_url,
                case_container=case_instance,
            )

            try:
                skin_instance.full_clean()
                skin_instance.save()
            except Exception as e:
                print(e)
