var cards = require('./cards');
var templates = require('./templates');
var availableCards = {};
var game = {
    deck : {},
    weight : 100,
    players: 0
};
var gameCandite = {
    deck : {},
    weight : 100,
    players: 0
};
var allPlayers = true;

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
    while (!allPlayers || game.weight < -1 * flex || game.weight > flex) {
        tries++;
        _setGame(players, chosenCards);
        if(gameCandite.players <= game.players) gameCandite = game;
        if (tries % 500 == 0) flex++;
        if (tries > 5000) break;
    }
    return gameCandite;
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
        _addCardToDeck(game.weight >= 0);
    }
}

function _resetValues(chosenCards) {
    game = {
        deck : {},
        weight : 0,
        players: 0
    };
    allPlayers = true;
    availableCards = JSON.parse(JSON.stringify(chosenCards));
}

function _addCardToDeck(isNegative) {
    while (true) {
        if (isNegative) {
            if (availableCards.negatives.length < 1){
                allPlayers = false;
                break;
            }
            var rand = _getRandom(0, availableCards.negatives.length - 1);
            if (availableCards.negatives[rand].amount > 0) {
                _addRandomCard(availableCards.negatives[rand]);
                availableCards.negatives.splice(rand, 1);
                break;
            }
        }
        else {
            if (availableCards.nonnegatives.length < 1) {
                allPlayers = false;
                break;
            }
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
    game.weight += selectedCard.value;
    game.players++;
    if (game.deck[selectedCard.role]) game.deck[selectedCard.role]++;
    else game.deck[selectedCard.role] = 1;
}

function _getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}