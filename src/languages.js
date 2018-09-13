const languages = require('./data/translations');

exports.get = (lang = 'en') => languages[lang] || {};
exports.getLanguages = () => Object.keys(languages).map(k => ({
    key: k,
    value: languages[k].name
}));

exports.translateDeck = function translateDeck(deck, lang = 'en') {
    const pack = languages[lang];
    const cards = Object.keys(deck);
    const translatedDeck = [];
    cards.forEach((card) => {
        translatedDeck.push({
            key: card,
            amount: deck[card],
            role: pack.roles[card],
            description: pack.descriptions[card]
        });
    });
    return translatedDeck;
};
