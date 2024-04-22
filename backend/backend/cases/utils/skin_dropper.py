import random


class SkinDropper:
    def __init__(self, skins):
        self.skins = skins

    @staticmethod
    def get_skin_color(skin_choices):
        colors, chances = zip(*skin_choices)
        color = random.choices(colors, weights=chances, k=1)[0]
        return color

    def get_dropped_skin(self, color):
        skins_with_matching_color = self.skins.filter(rarity_color=color)
        dropped_skin = random.choice(skins_with_matching_color)
        return dropped_skin

    @staticmethod
    def get_skin_quality(quality_choices):
        qualities, chances = zip(*quality_choices)
        quality = random.choices(qualities, weights=chances, k=1)[0]
        return quality

    @staticmethod
    def get_random_wear_rating():
        return random.uniform(0.000001, 0.999999)
