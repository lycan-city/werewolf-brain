const cards = require('./src/cards');
const decks = require('./src/decks');
const moderator = require('./src/moderator');
const game = require('./src/game');
const languages = require('./src/languages');

function getAllCards() {
    return cards.getAll();
}

function getBalancedGame(players, language = 'en', chosenCards = cards.getAll()) {
    return game.create(players, language, chosenCards, game.mode.NORMAL);
}

function getGameFromDeck(players, deckName, language = 'en') {
    const chosenCards = cards.inDeck(deckName);
    return game.create(players, language, chosenCards, game.mode.NORMAL);
}

function getChaosGame(players, language = 'en', chosenCards = cards.getAll()) {
    return game.create(players, language, chosenCards, game.mode.CHAOS);
}

function getChaosGameFromDeck(players, deckName, language = 'en') {
    const chosenCards = cards.inDeck(deckName);
    return game.create(players, language, chosenCards, game.mode.CHAOS);
}

function getGameFromCustomDeck(players, deck, language = 'en') {
    const chosenCards = cards.inCustomDeck(deck);
    return game.create(players, language, chosenCards, game.mode.NORMAL);
}

exports.getAllCards = getAllCards;
exports.getAllDecks = decks.getAll;
exports.getInDeck = decks.get;
exports.getScriptFromDeck = moderator.getScriptFromDeck;
exports.getBalancedGame = getBalancedGame;
exports.getGameFromDeck = getGameFromDeck;
exports.getChaosGame = getChaosGame;
exports.getChaosGameFromDeck = getChaosGameFromDeck;
exports.getLanguages = languages.getLanguages;
exports.translateDeck = languages.translateDeck;
exports.getGameFromCustomDeck = getGameFromCustomDeck;
