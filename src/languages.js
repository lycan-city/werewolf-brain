const languages = require('../data/translations');

exports.get = (lang = 'en') => { 
    return languages[lang] || {};
};