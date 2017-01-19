const decks = require('../data/decks');

exports.getAll = () => decks;

exports.get = (deckName) => {
    return decks[deckName.toLowerCase()] || [];
};