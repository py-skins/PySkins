from django.apps import AppConfig


class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'backend.accounts'

    def ready(self):
        import backend.accounts.signals
