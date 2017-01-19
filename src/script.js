const languages = require('../data/languages');

exports.getScript = (lang = 'en') => { 
    return languages[lang] || {};
};