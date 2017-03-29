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

export default {
    getAllCards,
    getAllDecks: decks.getAll,
    getInDeck: decks.get,
    getScriptFromDeck: moderator.getScriptFromDeck,
    getBalancedGame,
    getGameFromDeck,
    getChaosGame,
    getChaosGameFromDeck,
    getLanguages: languages.getLanguages,
    translateDeck: languages.translateDeck
};
