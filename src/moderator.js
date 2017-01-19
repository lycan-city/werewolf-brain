var moderatorScript = require('./script');
var bindings = require('../data/bindings');
var sequence = require('../data/sequence');

exports.getScriptFromDeck = function (deck, selectedLanguage) {
    var script = '';
    var calls = new Set();
    var language = moderatorScript.getScript(selectedLanguage);
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