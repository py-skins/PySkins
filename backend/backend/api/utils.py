import itertools

skin_rarity_data = {'consumer grade': '#B0C3D9',
                    'industrial grade': '#5E98D9',
                    'mil spec': {
                        'color': '#4B69FF',
                        'chance': 79.92,
                    },
                    'restricted': {
                        'color': '#8847FF',
                        'chance': 15.98,
                    },
                    'classified': {
                        'color': '#D32EE6',
                        'chance': 3.2
                    },
                    'covert': {
                        'color': '#EB4B4B',
                        'chance': 0.64
                    },
                    'knives': {
                        'color': '#EB4B4B',
                        'chance': 0.26
                    },
                    'contraband': {
                        'color': '#FFAE39',
                        'chance': 0.26,
                    }
                    }

FACTORY_NEW_CHANCE = 5
MINIMAL_WEAR_CHANCE = 15
FIELD_TESTED_CHANCE = 25
WELL_WORN_CHANCE = 25
BATTLE_SCARRED = 30
skin_condition_data = {
    'factory new': FACTORY_NEW_CHANCE,
    'minimal wear': MINIMAL_WEAR_CHANCE,
    'field-tested': FIELD_TESTED_CHANCE,
    'well-worn': WELL_WORN_CHANCE,
    'battle-scarred': BATTLE_SCARRED
}

d = skin_condition_data
skin_condition_data_list = [
    ['factory new'] * FACTORY_NEW_CHANCE,
    ['minimal wear'] * MINIMAL_WEAR_CHANCE,
    ['field-tested'] * FIELD_TESTED_CHANCE,
    ['well-worn'] * WELL_WORN_CHANCE,
    ['battle-scarred'] * BATTLE_SCARRED,
]

skin_condition_data_list = list(itertools.chain(*skin_condition_data_list))
