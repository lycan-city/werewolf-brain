const bindings = require('../data/bindings');
const sequence = require('../data/sequence');

function getScriptFromDeck(deck) {
    const calls = new Set();

    Object.keys(deck).forEach((role) => {
        if (bindings[role]) {
            bindings[role].forEach((call) => {
                calls.add(call);
            });
        }
    });

    return sequence.filter(call => calls.has(call));
}

exports.getScriptFromDeck = getScriptFromDeck;
