/*
    Coffee notes is a modification of the Coffee Taster's Flavor Wheel from World Coffee Research
    Found here : https://www.scanews.coffee/wp-content/uploads/2016/01/SCAA_FlavorWheel.01.18.15.jpg
*/

const coffeeNotes = {
    'Floral' : {
        color : 'rgb(200,48,104)',
        'Black Tea' : {},
        'Chamomile' : {},
        'Rose' : {},
        'Jasmine' : {}
    },
    'Fruity' : {
        color : 'rgb(201,53,47)',
        'Berry' : {
            'Blackberry' : {},
            'Raspberry' : {},
            'Blueberry' : {},
            'Strawberry' : {}
        },
        'Dried Fruit' : {
            'Raisin' : {},
            'Prune' : {}
        },
        'Other Fruit' : {
            'Coconut' : {},
            'Cherry' : {},
            'Pomegranate' : {},
            'Pineapple' : {},
            'Grape' : {},
            'Apple' : {},
            'Peach' : {},
            'Pear' : {}
        },
        'Citrus Fruit' : {
            'Grapefruit' : {},
            'Orange' : {},
            'Lemon' : {},
            'Lime' : {}
        }
    },
    'Sour' : {
        color : 'rgb(221, 194, 69)',
        'Sour Aromatics' : {},
        'Acetic Acid' : {},
        'Butyric Acid' : {},
        'Isovaleric Acid' : {},
        'Citric Acid' : {},
        'Malic Acid' : {}
    },
    'Fermented' : {
        color : 'rgb(172, 151, 69)',
        'Winey' : {},
        'Whiskey' : {},
        'Overripe' : {}
    },
    'Green/Vegetative' : {
        color : 'rgb(58,119,56)',
        'Olive Oil' : {},
        'Raw' : {},
        'Under-Ripe' : {},
        'Peapod' : {},
        'Fresh' : {},
        'Dark Green' : {},
        'Vegetative' : {},
        'Hay-Like' : {},
        'Herb-Like' : {},
        'Beany' : {}
    },
    'Other' : {
        color : 'rgb(72,160,178)',
        'Papery/Musty' : {
            'Stale' : {},
            'Cardboard' : {},
            'Papery' : {},
            'Woody' : {},
            'Moldy/Damp' : {},
            'Musty/Dusty' : {},
            'Musty/Earthy' : {},
            'Animalic' : {},
            'Meaty Brothy' : {},
            'Phenolic' : {}
        },
        'Chemical' : {
            'Bitter' : {},
            'Salty' : {},
            'Medicinal' : {},
            'Petroleum' : {},
            'Skunky' : {},
            'Rubber' : {}
        }
    },
    'Roasted' : {
        color : 'rgb(187,81,58)',
        'Pipe Tobacco' : {},
        'Tobacco' : {},
        'Burnt' : {
            'Acrid' : {},
            'Ashy' : {},
            'Smoky' : {},
            'Brown Roast' : {},
        },
        'Cereal' : {
            'Grain' : {},
            'Malt' : {}
        }
    },
    'Spices' : {
        color : 'rgb(159,47,64)',
        'Pungent' : {},
        'Pepper' : {},
        'Brown Spice' : {
            'Anise' : {},
            'Nutmeg' : {},
            'Cinnamon' : {},
            'Clove' : {},
        }
    },
    'Nutty' : {
        color : 'rgb(196,138,110)',
        'Peanut' : {},
        'Hazelnut' : {},
        'Almond' : {}
    },
    'Cocoa' : {
        color : 'rgb(177,120,83)',
        'Chocolate' : {},
        'Dark Chocolate' : {}
    },
    'Sweet' : {
        color : 'rgb(214,96,63)',
        'Brown Sugar' : {
            'Molasses' : {},
            'Maple Syrup' : {},
            'Caramelized' : {},
            'Honey' : {}
        },
        'Vanilla' : {},
        'Vanillin' : {},
        'Overall Sweet' : {},
        'Sweet Aromatics' : {},
        'Black Tea' : {}
    }
}

export default coffeeNotes