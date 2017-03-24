const decks = require('./decks');
const cards = require('../data/cards');

exports.getAll = () => cards;

exports.inDeck = (deckName) => {
    const deck = decks.get(deckName) || {};
    return cards.filter(c => deck[c.key]).map(c => ({
        key: c.key,
        value: c.value,
        amount: deck[c.key]
    }));
};
