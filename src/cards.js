const templates = require('./templates');
const cards = require('../data/cards');

exports.getAll = () => cards;

exports.getAllTemplates = templates.getAll;

exports.fromTemplate = (template) => {
    const templateCards = templates.get(template) || [];
    return cards.filter(c => ~templateCards.indexOf(c.role));
}