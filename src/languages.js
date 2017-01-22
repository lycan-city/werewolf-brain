const languages = require('../data/translations');

exports.get = (lang = 'en') => languages[lang] || {};
