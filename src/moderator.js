const bindings = require('./data/bindings');
const sequence = require('./data/sequence');
const languages = require('./data/translations');

function getScriptFromDeck(deck, lang = 'en') {
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
}

exports.getScriptFromDeck = getScriptFromDeck;
