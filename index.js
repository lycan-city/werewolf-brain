var cards = require('./cards');
var templates = require('./templates');
var availableCards = {};
var deck = {};
var currentWeight = 100;

exports.getAllCards = function () {
    return cards.all;
}

exports.getAllTemplates = function () {
    return templates.all;
}

exports.getBalancedGame = function (players, chosenCards) {
    return _getBalancedGame(players, chosenCards);
}

exports.getGameFromTemplate = function (players, template) {
    return _getBalancedGame(players, _getCardsFromTemplate(template));
}

function _getCardsFromTemplate(template) {
    templateCards = templates.all[template];
    return cards.all.filter(function (card) {
        return templateCards.indexOf(card.role) >= 0;
    });
}

function _getBalancedGame(players, chosenCards) {
    chosenCards = _classifyCards(chosenCards || cards.all);
    var flex = 1;
    var tries = 0;
    while (currentWeight < -1 * flex || currentWeight > 1 * flex) {
        tries++;
        _setGame(players, chosenCards);
        if (tries % 500 == 0) flex++;
        if (tries > 5000) break;
    }

    return {
        deck: deck,
        weight: currentWeight
    };
}

function _classifyCards(cards) {
    var deck = { negatives: [], nonnegatives: [] };
    cards.map(function (card) {
        if (card.value < 0)
            for (var i = 0; i < card.amount; i++)
                deck.negatives.push({ role: card.role, value: card.value, amount: 1 });
        else
            for (var i = 0; i < card.amount; i++)
                deck.nonnegatives.push({ role: card.role, value: card.value, amount: 1 });
    });

    return deck;
}

function _setGame(players, chosenCards) {
    _resetValues(chosenCards);
    //get first card randomly
    _addCardToDeck(_getRandom(0, 1));
    players--;

    for (var i = 0; i < players; i++) {
        _addCardToDeck(currentWeight >= 0);
    }
}

function _resetValues(chosenCards) {
    deck = {};
    currentWeight = 0;
    availableCards = JSON.parse(JSON.stringify(chosenCards));
}

function _addCardToDeck(isNegative) {
    while (true) {
        if (isNegative) {
            if (availableCards.negatives.length < 1) break;
            var rand = _getRandom(0, availableCards.negatives.length - 1);
            if (availableCards.negatives[rand].amount > 0) {
                _addRandomCard(availableCards.negatives[rand]);
                availableCards.negatives.splice(rand, 1);
                break;
            }
        }
        else {
            if (availableCards.nonnegatives.length < 1) break;
            var rand = _getRandom(0, availableCards.nonnegatives.length - 1);
            if (availableCards.nonnegatives[rand].amount > 0) {
                _addRandomCard(availableCards.nonnegatives[rand]);
                availableCards.nonnegatives.splice(rand, 1);
                break;
            }
        }
    }
}

function _addRandomCard(selectedCard) {
    currentWeight += selectedCard.value;
    if (deck[selectedCard.role]) deck[selectedCard.role]++;
    else deck[selectedCard.role] = 1;
}

function _getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}