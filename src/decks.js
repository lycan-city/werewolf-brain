const decks = require('../data/decks');

exports.getAll = () => decks;

exports.get = deckName => decks[deckName.toLowerCase()];
