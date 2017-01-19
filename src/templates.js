const templates = require('../data/templates');

exports.getAll = () => templates;

exports.get = (template) => {
    return templates[template.toLowerCase()] || [];
};