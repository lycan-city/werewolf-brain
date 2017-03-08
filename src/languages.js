const languages = require('../data/translations');

exports.get = (lang = 'en') => languages[lang] || {};
exports.translateDeck = function translateDeck(deck, lang = 'en') {
    const pack = languages[lang].roles;
    const roles = Object.keys(deck);
    const translatedDeck = {};
    roles.forEach((role) => {
        translatedDeck[pack[role]] = deck[role];
    });
    return translatedDeck;
};
