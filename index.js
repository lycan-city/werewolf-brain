const cards = require('./src/cards');
const decks = require('./src/decks');
const moderator = require('./src/moderator');
const game = require('./src/game');

function getAllCards() {
    return cards.getAll();
}

function getBalancedGame(players, language = 'en', chosenCards = cards.getAll()) {
    return game.create(players, language, chosenCards, game.mode.NORMAL);
}

function getGameFromDeck(players, language = 'en', deckName) {
    const chosenCards = cards.inDeck(deckName);
    return game.create(players, language, chosenCards, game.mode.NORMAL);
}

function getChaosGame(players, language = 'en', chosenCards = cards.getAll()) {
    return game.create(players, language, chosenCards, game.mode.CHAOS);
}

function getChaosGameFromDeck(players, language = 'en', deckName) {
    const chosenCards = cards.inDeck(deckName);
    return game.create(players, language, chosenCards, game.mode.CHAOS);
}

exports.getAllCards = getAllCards;
exports.getAllDecks = decks.getAll;
exports.getScriptFromDeck = moderator.getScriptFromDeck;
exports.getBalancedGame = getBalancedGame;
exports.getGameFromDeck = getGameFromDeck;
exports.getChaosGame = getChaosGame;
exports.getChaosGameFromDeck = getChaosGameFromDeck;
