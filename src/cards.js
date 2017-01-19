const decks = require('./decks');
const cards = require('../data/cards');

exports.getAll = () => cards;

exports.getAllDecks = decks.getAll;

exports.inDeck = (deckName) => {
    const deck = decks.get(deckName) || [];
    return cards.filter(c => ~deck.indexOf(c.role));
}