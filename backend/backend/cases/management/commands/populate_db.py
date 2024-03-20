from django.core.management import BaseCommand

from backend.cases.utils.data import inject_skins_and_cases_data


class Command(BaseCommand):
    help = 'Populate the database with initial data'

    def handle(self, *args, **kwargs):
        inject_skins_and_cases_data()
        self.stdout.write(
            self.style.SUCCESS('Successfully populated the database')
        )
