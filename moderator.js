var lang = require('./languages');

exports.getScriptFromGame = function (game) {
    return _getScriptFromDeck(game.deck);
}

exports.getScriptFromDeck = function (deck) {
    return _getScriptFromDeck(deck);
}

function _getScriptFromDeck (deck) {
    var script = '';

    // To take note calls.
    if(deck['Lycan']) script += ' - ' + lang.english['Lycan'] + '\n'; 
    if(deck['Tough Guy']) script += ' - ' + lang.english['Tough Guy'] + '\n'; 
    if(deck['Hunter']) script += ' - ' + lang.english['Hunter'] + '\n'; 
    if(deck['Fruit Brute']) script += ' - ' + lang.english['Fruit Brute'] + '\n'; 
    if(deck['Apprentice Seer']) script += ' - ' + lang.english['Apprentice Seer'] + '\n'; 
    if(deck['Diseased']) script += ' - ' + lang.english['Diseased'] + '\n'; 
    if(deck['Big Bad Wolf']) script += ' - ' + lang.english['Big Bad Wolf'] + '\n'; 

    // Relationships
    if(deck['Cupid']) {
        script += ' - ' + lang.english['Cupid'] + '\n'; 
        script += ' - ' + lang.english['Lovebirds'] + '\n'; 
    }
    if(deck['Doppelgänger']) script += ' - ' + lang.english['Doppelgänger'] + '\n'; 
    if(deck['Hoodlum']) script += ' - ' + lang.english['Hoodlum'] + '\n'; 
    if(deck['Wild Child']) script += ' - ' + lang.english['Wild Child'] + '\n'; 
    if(deck['Dire Wolf']) script += ' - ' + lang.english['Dire Wolf'] + '\n'; 
    if(deck['Nostradamus']) script += ' - ' + lang.english['Nostradamus'] + '\n'; 
    if(deck['Mason']) script += ' - ' + lang.english['Mason'] + '\n'; 

    // Protection + Non-Villagers Intelligence
    if(deck['Bodyguard']) script += ' - ' + lang.english['Bodyguard'] + '\n'; 
    if(deck['Priest']) script += ' - ' + lang.english['Priest'] + '\n'; 
    if(deck['Count Dracula']) script += ' - ' + lang.english['Count Dracula'] + '\n'; 
    if(deck['Cult Leader']) script += ' - ' + lang.english['Cult Leader'] + '\n'; 
    if(deck['Sorcerer']) script += ' - ' + lang.english['Sorcerer'] + '\n'; 

    // Attacks
    if(deck['Vampire']) script += ' - ' + lang.english['Vampire'] + '\n'; 
    if(deck['Big Bad Wolf'] 
        || deck['Fruit Brute']
        || deck['Werewolf'] 
        || deck['Wolf Cub'] 
        || deck['Dream Wolf'] 
        || deck['Lone Wolf'] 
        || deck['Dire Wolf'] 
        || deck['Wolverine'] ) script += ' - ' + lang.english['Werewolves'] + '\n'; 
    if(deck['Leprechaun']) script += ' - ' + lang.english['Leprechaun'] + '\n'; 
    if(deck['Bloody Mary']) script += ' - ' + lang.english['Bloody Mary'] + '\n'; 
    if(deck['Chupacabra']) script += ' - ' + lang.english['Chupacabra'] + '\n'; 
    if(deck['Witch']) script += ' - ' + lang.english['Witch'] + '\n'; 

    // Villagers Intelligence
    if(deck['Aura Seer']) script += ' - ' + lang.english['Aura Seer'] + '\n'; 
    if(deck['Seer']) script += ' - ' + lang.english['Seer'] + '\n'; 
    if(deck['Fortune Teller']) script += ' - ' + lang.english['Fortune Teller'] + '\n'; 
    if(deck['Beholder']) script += ' - ' + lang.english['Beholder'] + '\n'; 
    if(deck['The Count']) script += ' - ' + lang.english['The Count'] + '\n'; 
    if(deck['P.I.']) script += ' - ' + lang.english['P.I.'] + '\n'; 

    // Day Off
    if(deck['Old Hag']) script += ' - ' + lang.english['Old Hag'] + '\n'; 
    if(deck['Spellcaster']) script += ' - ' + lang.english['Spellcaster'] + '\n'; 

    if(deck['Meeting']) script += ' - ' + lang.english['Meeting'] + '\n';

    return script;
}