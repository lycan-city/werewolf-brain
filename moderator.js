var lang = require('./languages');
var bindings = require('./bindings');
var sequence = require('./sequence');

exports.getScriptFromDeck = function (deck, selectedLanguage) {
    var script = '';
    var calls = new Set();
    var language = lang.english;
    if (selectedLanguage.toLowerCase() == 'spanish') language = lang.spanish;
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