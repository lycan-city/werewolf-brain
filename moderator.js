var lang = require('./languages');

var bindings = {
    'Apprentice Seer': ['Apprentice Seer'],
    'Aura Seer': ['Aura Seer'],
    'Beholder': ['Beholder'],
    'Big Bad Wolf': ['Big Bad Wolf', 'Werewolves'],
    'Bloody Mary': ['Bloody Mary'],
    'Bodyguard': ['Bodyguard'],
    'Bogeyman': ['Bogeyman'],
    'Chupacabra': ['Chupacabra'],
    'Count Dracula': ['Count Dracula'],
    'Cult Leader': ['Cult Leader'],
    'Cupid': ['Cupid', 'Lovebirds'],
    'Cursed': ['Cursed'],
    'Dire Wolf': ['Dire Wolf', 'Werewolves'],
    'Diseased': ['Diseased'],
    'Doppelgänger': ['Doppelgänger'],
    'Dream Wolf': ['Werewolves'],
    'Drunk': ['Drunk'],
    'Fortune Teller': ['Fortune Teller'],
    'Fruit Brute': ['Fruit Brute', 'Werewolves'],
    'Hoodlum': ['Hoodlum'],
    'Hunter': ['Hunter'],
    'Insomniac': ['Insomniac'],
    'Leprechaun': ['Leprechaun'],
    'Lone Wolf': ['Werewolves'],
    'Lycan': ['Lycan'],
    'Mason' : ['Mason', 'Meeting'],
    'Minion': ['Minion'],
    'Nostradamus' : ['Nostradamus'],
    'Old Hag': ['Old Hag'],
    'P.I.': ['P.I.'],
    'Priest': ['Priest'],
    'Seer': ['Seer'],
    'Sorcerer': ['Sorcerer'],
    'Spellcaster': ['Spellcaster'],
    'The Count': ['The Count'],
    'Tough Guy': ['Tough Guy'],
    'Vampire': ['Vampire'],
    'Werewolf': ['Werewolves'],
    'Wild Child': ['Wild Child'],
    'Witch': ['Witch'],
    'Wolf Cub': ['Werewolves'],
    'Wolf Man': ['Wolf Man', 'Werewolves'],
    'Wolverine': ['Wolverine', 'Werewolves']
};

var secuence = [
    'Lycan',
    'Tough Guy',
    'Cursed',
    'Hunter',
    'Fruit Brute',
    'Apprentice Seer',
    'Diseased', 
    'Big Bad Wolf',
    'Wolf Man',
    'Minion',
    'Cupid',
    'Lovebirds',
    'Doppelgänger', 
    'Hoodlum', 
    'Wild Child',
    'Dire Wolf',
    'Nostradamus',
    'Mason',
    'Bodyguard',
    'Priest',
    'Count Dracula',
    'Cult Leader',
    'Sorcerer',
    'Vampire',
    'Werewolves', 
    'Bogeyman',
    'Leprechaun', 
    'Bloody Mary', 
    'Chupacabra', 
    'Witch', 
    'Aura Seer', 
    'Seer', 
    'Fortune Teller', 
    'Beholder', 
    'The Count', 
    'Insomniac',
    'P.I.', 
    'Old Hag', 
    'Spellcaster', 
    'Meeting'
];

exports.getScriptFromDeck = function (deck) {
    return _getScriptFromDeck(deck);
}

function _getScriptFromDeck (deck) {
    var script = '';
    var calls = new Set();
    Object.keys(deck).forEach(function(role) {
        if(bindings[role]) bindings[role].forEach(function (call) {
            calls.add(call);
        });
    });
    secuence.forEach(function (call){
        if(calls.has(call)){
            script += '- ' + lang.default[call] + '\n';
        }
    });
    return script;
}