const decks = require('./data/decks');

function getDeck(deckName) {
    return decks[deckName.toLowerCase()];
}

exports.get = getDeck;
exports.getAll = () => decks;
exports.exists = deckName => !!getDeck(deckName || '');
