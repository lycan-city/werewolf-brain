/* eslint-disable */

const BALANCEDFLEX = 1;
const CHAOSFLEX = 10;

let game = {
    deck: {},
    weight: 100,
    players: 0
};

let allPlayers = true;
let availableCards = {};

let gameCandidate = {
    deck: {},
    weight: 100,
    players: 0
};

exports.create = function (playerCount, deck, gameMode) {
    return _getGame(playerCount, deck, gameMode === this.mode.NORMAL
        ? BALANCEDFLEX
        : CHAOSFLEX);
};

exports.mode = {
    CHAOS: 'CHAOS',
    NORMAL: 'NORMAL'
};

function _setGame(players, chosenCards) {
    _resetValues(chosenCards);
    // get first card randomly
    _addCardToDeck(_getRandom(0, 1));
    players--;

    for (let i = 0; i < players; i++) {
        _addCardToDeck(game.weight >= 0);
    }
}

function _getGame(players, chosenCards, flex) {
    const classifiedCards = _classifyCards(chosenCards);
    let tries = 0;
    while (!allPlayers || game.weight < -1 * flex || game.weight > flex) {
        tries++;
        _setGame(players, classifiedCards);
        if (gameCandidate.players <= game.players) gameCandidate = game;
        if (tries % 500 === 0) flex++;
        if (tries > 5000) break;
    }

    return gameCandidate;
}

function _addCardToDeck(isNegative) {
    while (true) {
        if (isNegative) {
            if (availableCards.negatives.length < 1) {
                allPlayers = false;
                break;
            }
            var rand = _getRandom(0, availableCards.negatives.length - 1);
            if (availableCards.negatives[rand].amount > 0) {
                _addRandomCard(availableCards.negatives[rand]);
                availableCards.negatives.splice(rand, 1);
                break;
            }
        } else {
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
    if (game.deck[selectedCard.key]) game.deck[selectedCard.key]++;
    else game.deck[selectedCard.key] = 1;
}

function _classifyCards(cards) {
    const classifiedCards = { negatives: [], nonnegatives: [] };
    cards.forEach((card) => {
        if (card.value < 0) {
            for (let i = 0; i < card.amount; i++) {
                classifiedCards.negatives.push({
                    key: card.key, value: card.value, amount: 1 });
            }
        } else {
            for (let i = 0; i < card.amount; i++) {
                classifiedCards.nonnegatives.push({
                    key: card.key,
                    value: card.value,
                    amount: 1,
                });
            }
        }
    });

    return classifiedCards;
}

function _resetValues(chosenCards) {
    game = {
        deck: {},
        weight: 0,
        players: 0
    };
    allPlayers = true;
    availableCards = JSON.parse(JSON.stringify(chosenCards));
}

function _getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
