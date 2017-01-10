var lang = require('./languages');
var bindings = require('./bindings');
var secuence = require('./secuence');

exports.getScriptFromDeck = function (deck) {
    return _getScriptFromDeck(deck);
}

function _getScriptFromDeck (deck) {
    var script = '';
    var calls = new Set();
    Object.keys(deck).forEach(function(role) {
        if(bindings[role]) bindings[role].forEach(function (call) {
            calls.add(call);
        });
    });
    secuence.forEach(function (call){
        if(calls.has(call)){
            script += '- ' + lang.default[call] + '\n';
        }
    });
    return script;
}