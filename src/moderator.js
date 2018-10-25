const bindings = require('./data/bindings');
const sequence = require('./data/sequence');
const languages = require('./data/translations');
const firstNight = require('./data/firstNight');

const levels = {
    game: 1,
    deck: 2,
    all: 3,
};

exports.levels = levels;

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

    return seq.map(key => ({ key, call: pack[key] }));
};

exports.fromGame = (gameDeck, deck) => sequence.map((callKey) => {
    const callGeneratingRoles = Object
        .keys(bindings)
        .filter(roleKey => bindings[roleKey].includes(callKey));
    let level = '';
    if (gameDeck.some(c => callGeneratingRoles.includes(c.key))) {
        level = levels.game;
    } else if (deck.some(c => callGeneratingRoles.includes(c.key))) {
        level = levels.deck;
    } else {
        level = levels.all;
    }

    return {
        key: callKey,
        level,
        firstNight: !!firstNight[callKey],
    };
});
