const languages = require('./languages');
const bindings = require('../data/bindings');
const sequence = require('../data/sequence');

exports.getScriptFromDeck = function (deck, selectedLanguage) {
    let script = '';
    let calls = new Set();
    
    const language = languages.get(selectedLanguage);

    Object.keys(deck).forEach(function(role) {
        if(bindings[role]) bindings[role].forEach(function (call) {
            calls.add(call);
        });
    });

    sequence.forEach(function (call){
        if(calls.has(call)){
            script += '- ' + language[call] + '\n';
        }
    });
    
    return script;
}