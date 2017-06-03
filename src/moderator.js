const bindings = require('./data/bindings');
const sequence = require('./data/sequence');
const languages = require('./data/translations');

exports.getScriptFromDeck = (deck, lang = 'en') => {
    const roles = new Set();
    deck.forEach((card) => {
        if (bindings[card.key]) {
            bindings[card.key].forEach((call) => {
                roles.add(call);
            });
        }
    });

    const seq = sequence.filter(call => roles.has(call));
    const pack = languages[lang].calls;

    return seq.map(key => pack[key]);
};

exports.fromGame = (gameDeck, deck) => sequence.map((callKey) => {
    const callGeneratingRoles = Object
        .keys(bindings)
        .filter(roleKey => bindings[roleKey].includes(callKey));
    let level = '';
    if (gameDeck.some(c => callGeneratingRoles.includes(c.key))) {
        level = 'game';
    } else if (deck.some(c => callGeneratingRoles.includes(c.key))) {
        level = 'deck';
    } else {
        level = 'all';
    }

    return {
        key: callKey,
        level
    };
});
