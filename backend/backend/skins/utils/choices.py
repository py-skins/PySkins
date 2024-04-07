def get_skin_quality_chance_choices():
    FACTORY_NEW = 'factory new'
    MINIMAL_WEAR = 'minimal wear'
    FIELD_TESTED = 'field-tested'
    WELL_WORN = 'well-worn'
    BATTLE_SCARRED = 'battle-scarred'
    STATTRAK_FACTORY_NEW = 'stattrak factory new'
    STATTRAK_MINIMAL_WEAR = 'stattrak minimal wear'
    STATTRAK_FIELD_TESTED = 'stattrak field-tested'
    STATTRAK_WELL_WORN = 'stattrak well-worn'
    STATTRAK_BATTLE_SCARRED = 'stattrak battle-scarred'

    return (
        (FACTORY_NEW, 5),
        (MINIMAL_WEAR, 21),
        (FIELD_TESTED, 44),
        (WELL_WORN, 34),
        (BATTLE_SCARRED, 15),
        (STATTRAK_FACTORY_NEW, 1),
        (STATTRAK_MINIMAL_WEAR, 3),
        (STATTRAK_FIELD_TESTED, 6),
        (STATTRAK_WELL_WORN, 7),
        (STATTRAK_BATTLE_SCARRED, 11),
    )


def get_skin_chance_choices():
    LIGHT_BLUE = '#4B69FF'
    BLUE = '#8847FF'
    PURPLE = '#D32EE6'
    RED = '#EB4B4B'

    return (
        (LIGHT_BLUE, 30),
        (BLUE, 30),
        (PURPLE, 30),
        (RED, 5),
    )
