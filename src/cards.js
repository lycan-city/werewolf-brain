const decks = require('./decks');
const cards = require('./data/cards');

exports.getAll = () => cards;

exports.inDeck = (deckName) => {
    const deck = decks.get(deckName) || {};
    return Object.keys(cards).filter(k => deck[k]).map(k => ({
        key: k,
        value: cards[k],
        amount: deck[k]
    }));
};

exports.inCustomDeck = deck => Object.keys(cards).filter(k => deck[k]).map(k => ({
    key: k,
    value: cards[k],
    amount: deck[k]
}));
