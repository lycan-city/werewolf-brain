const bindings = require('../data/bindings');
const sequence = require('../data/sequence');

function getScriptFromDeck(deck) {
    const calls = new Set();

    Object.keys(deck).forEach((key) => {
        if (bindings[key]) {
            bindings[key].forEach((call) => {
                calls.add(call);
            });
        }
    });

    return sequence.filter(call => calls.has(call));
}

exports.getScriptFromDeck = getScriptFromDeck;
