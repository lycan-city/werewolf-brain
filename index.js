var cards = require('./cards');
var availableCards = {};
var deck = {};
var currentWeight = 100;

exports.getAllCards = function () {
    return cards.all;
}

exports.getBalancedGame = function (players, chosenCards) {
    chosenCards = classifyCards(chosenCards || cards.all);
    while (currentWeight < -1 || currentWeight > 1) {
        setGame(players, chosenCards);
    }

    return {
        deck: deck,
        weight: currentWeight
    };
}

function classifyCards(cards) {
    var deck = { negatives : [], nonnegatives: [] };
    cards.map(function(card){
        if(card.value < 0)
            for (var i = 0; i < card.amount; i++)
                deck.negatives.push({role: card.role, value: card.value, amount: 1 });
        else
            for (var i = 0; i < card.amount; i++)
                deck.nonnegatives.push({role: card.role, value: card.value, amount: 1 });
    });

    return deck;
}

function setGame(players, chosenCards) {
    resetValues(chosenCards);
    //get first card randomly
    addCardToDeck(getRandom(0, 1));
    players--;

    for (var i = 0; i < players; i++) {
        addCardToDeck(currentWeight >= 0);
    }
}

function resetValues(chosenCards) {
    deck = {};
    currentWeight = 0;
    availableCards = JSON.parse(JSON.stringify(chosenCards));
}

function addCardToDeck(isNegative) {
    while (true) {
        if (isNegative) {
            var rand = getRandom(0, availableCards.negatives.length - 1);
            if (availableCards.negatives[rand].amount > 0) {
                addRandomCard(availableCards.negatives[rand]);
                break;
            }
        }
        else {
            var rand = getRandom(0, availableCards.nonnegatives.length - 1);
            if (availableCards.nonnegatives[rand].amount > 0) {
                addRandomCard(availableCards.nonnegatives[rand]);
                break;
            }
        }
    }
}

function addRandomCard(selectedCard) {
    currentWeight += selectedCard.value;
    selectedCard.amount--;

    if (deck[selectedCard.role]) {
        deck[selectedCard.role]++;
    }
    else {
        deck[selectedCard.role] = 1;
    }
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}