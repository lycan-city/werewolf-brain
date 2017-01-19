exports.getAll = () => templates;

exports.get = (template) => {
    return templates[template.toLowerCase()];
};

const templates = {
    basic: [
        'Werewolf',
        'Villager',
    ],
    novice: [
        'Werewolf',
        'Villager',
        'Seer',
        'Mayor'
    ],
    amateur: [
        'Werewolf',
        'Wolf Cub',
        'Villager',
        'Mayor',
        'Seer',
        'Witch',
        'Prince',
        'Tanner'
    ],
    wolfpack: [
        'Werewolf',
        'Big Bad Wolf',
        'Wolf Cub',
        'Lone Wolf',
        'Fruit Brute',
        'Dire Wolf',
        'Virginia Woolf',
        'Wolverine',
        'Villager',
        'Seer',
        'Prince',
        'Mayor',
        'Martyr'
    ],
    competent: [
        'Werewolf',
        'Wolf Cub',
        'Sorcerer',
        'Cursed',
        'Minion',
        'Wild Child',
        'Villager',
        'Mayor',
        'Seer',
        'Dire Wolf',
        'Virginia Woolf',
        'Witch',
        'Prince',
        'Cult Leader',
        'Cupid',
        'Diseased',
        'Doppelgänger',
        'Lycan',
        'Spellcaster',
        'Tanner',
        'Mason',
        'Bodyguard',
        'Apprentice Seer',
        'Drunk'
    ],
    vampires: [
        'Vampire',
        'Sorcerer',
        'Cursed',
        'Villager',
        'Mayor',
        'Prince',
        'Tanner',
        'Spellcaster',
        'Mason',
        'Seer',
        'Dire Wolf',
        'Virginia Woolf',
        'Witch',
        'Werewolf',
        'Wolf Cub',
        'Drunk'
    ]
}