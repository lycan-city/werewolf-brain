var templates = require('./templates');

exports.getAll = () => cards;

exports.getAllTemplates = templates.getAll;

exports.fromTemplate = (template) => {
    const templateCards = templates.get(template);
    return cards.filter(c => !~templateCards.indexOf(c.role));
}

const cards  = [
    { role: 'Wolf Man', value: -9, amount: 1 },
    { role: 'Big Bad Wolf', value: -9, amount: 1 },
    { role: 'Wolf Cub', value: -8, amount: 1 },
    { role: 'Vampire', value: -7, amount: 8 },
    { role: 'Bogeyman', value: -6, amount: 1 },
    { role: 'Minion', value: -6, amount: 1 },
    { role: 'Werewolf', value: -6, amount: 12 },
    { role: 'Dream Wolf', value: -5, amount: 1 },
    { role: 'Lone Wolf', value: -4, amount: 1 },
    { role: 'Fruit Brute', value: -3, amount: 1 },
    { role: 'Sorcerer', value: -3, amount: 1 },
    { role: 'Cursed', value: -3, amount: 1 },
    { role: 'Count Dracula', value: -2, amount: 1 },
    { role: 'Cupid', value: -2, amount: 1 },
    { role: 'Doppelgänger', value: -2, amount: 1 },
    { role: 'Sasquatch', value: -2, amount: 1 },
    { role: 'Lycan', value: -1, amount: 1 },
    { role: 'Pacifist', value: -1, amount: 1 },
    { role: 'Old Man', value: 0, amount: 1 },
    { role: 'Hoodlum', value: 0, amount: 1 },
    { role: 'Little Girl', value: 0, amount: 1 },
    { role: 'Wild Child', value: 0, amount: 1 },
    { role: 'Moderator', value: 0, amount: 1 },
    { role: 'Villager', value: 1, amount: 20 },
    { role: 'Old Hag', value: 1, amount: 1 },
    { role: 'Cult Leader', value: 1, amount: 1 },
    { role: 'Spellcaster', value: 1, amount: 1 },
    { role: 'Tanner', value: 1, amount: 1 },
    { role: 'Bloody Mary', value: 1, amount: 1 },
    { role: 'Nostradamus', value: 1, amount: 1 },
    { role: 'Beeholder', value: 2, amount: 1 },
    { role: 'Ghost', value: 2, amount: 1 },
    { role: 'Village Idiot', value: 2, amount: 1 },
    { role: 'Mason', value: 2, amount: 3 },
    { role: 'Mayor', value: 2, amount: 1 },
    { role: 'Troublemaker', value: 2, amount: 1 },
    { role: 'Bodyguard', value: 3, amount: 1 },
    { role: 'Diseased', value: 3, amount: 1 },
    { role: 'Hunter', value: 3, amount: 1 },
    { role: 'Insomniac', value: 3, amount: 1 },
    { role: 'Martyr', value: 3, amount: 1 },
    { role: 'P.I.', value: 3, amount: 1 },
    { role: 'Priest', value: 3, amount: 1 },
    { role: 'Prince', value: 3, amount: 1 },
    { role: 'Tough Guy', value: 3, amount: 1 },
    { role: 'Thing', value: 3, amount: 1 },
    { role: 'Drunk', value: 3, amount: 1 },
    { role: 'Apprentice Seer', value: 4, amount: 1 },
    { role: 'Witch', value: 4, amount: 1 },
    { role: 'Chupacabra', value: 4, amount: 1 },
    { role: 'The Count', value: 5, amount: 1 },
    { role: 'Leprechaun', value: 5, amount: 1 },
    { role: 'Seer', value: 7, amount: 1 }
];