var cards = require('./src/cards');
var decks = require('./src/decks');
var moderator = require('./src/moderator');
var game = require('./src/game');

exports.getAllCards = function () {
    return cards.getAll();
}

exports.getAllDeckss = decks.getAll;

exports.getScriptFromDeck = moderator.getScriptFromDeck;

exports.getBalancedGame = function (players, chosenCards) {
    chosenCards = chosenCards || cards.getAll();
    return game.create(players, chosenCards, game.mode.NORMAL);
}

exports.getGameFromDeck = function (players, deckName) {
    var chosenCards = cards.inDeck(deckName);
    return game.create(players, chosenCards, game.mode.NORMAL);
}

exports.getChaosGame = function (players, chosenCards) {
    chosenCards = chosenCards || cards.getAll();
    return game.create(players, chosenCards, game.mode.CHAOS);
}

exports.getChaosGameFromDeck = function (players, deckName) {
    var chosenCards = cards.inDeck(deckName);
    return game.create(players, chosenCards, game.mode.CHAOS);
}