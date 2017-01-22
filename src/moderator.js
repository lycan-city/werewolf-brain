const bindings = require('../data/bindings');
const sequence = require('../data/sequence');

exports.getScriptFromDeck = function (deck) {
    let calls = new Set();

    Object.keys(deck).forEach(function(role) {
        if(bindings[role])
            bindings[role].forEach(function (call) {
                calls.add(call);
            });
    });

    return sequence.filter(function (call) {
        return calls.has(call);
    });
}