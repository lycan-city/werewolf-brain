const BALANCEDFLEX = 1;
const CHAOSFLEX = 10;
const SUCCESS = 1;
const FAIL = 0;

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

function resetValues(chosenCards) {
    game = {
        deck: {},
        weight: 0,
        players: 0
    };
    allPlayers = true;
    availableCards = JSON.parse(JSON.stringify(chosenCards));
}

function getRandom(min, max) {
    const floor = Math.ceil(min);
    const top = Math.floor(max);
    return Math.floor(Math.random() * ((top - floor) + 1)) + floor;
}
function addRandomCard(selectedCard) {
    game.weight += selectedCard.value;
    game.players++;
    if (game.deck[selectedCard.key]) game.deck[selectedCard.key]++;
    else game.deck[selectedCard.key] = 1;
}
function addCardToDeck(isNegative) {
    if (isNegative) {
        if (availableCards.negatives.length < 1) {
            allPlayers = false;
            return FAIL;
        }
        const rand = getRandom(0, availableCards.negatives.length - 1);
        if (availableCards.negatives[rand].amount > 0) {
            addRandomCard(availableCards.negatives[rand]);
            availableCards.negatives.splice(rand, 1);
            return SUCCESS;
        }
    } else {
        if (availableCards.nonnegatives.length < 1) {
            allPlayers = false;
            return FAIL;
        }
        const rand = getRandom(0, availableCards.nonnegatives.length - 1);
        if (availableCards.nonnegatives[rand].amount > 0) {
            addRandomCard(availableCards.nonnegatives[rand]);
            availableCards.nonnegatives.splice(rand, 1);
            return SUCCESS;
        }
    }
    return FAIL;
}

function setGame(players, chosenCards) {
    resetValues(chosenCards);
    // get first card randomly
    let playersAdded = addCardToDeck(getRandom(0, 1));

    while (playersAdded < players) {
        playersAdded += addCardToDeck(game.weight >= 0);
    }
}

function classifyCards(cards) {
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

function getGame(players, chosenCards, flexibility) {
    const classifiedCards = classifyCards(chosenCards);
    let flex = flexibility;
    let tries = 0;
    while (!allPlayers || game.weight < -1 * flex || game.weight > flex) {
        tries++;
        setGame(players, classifiedCards);
        if (gameCandidate.players <= game.players) gameCandidate = game;
        if (tries % 500 === 0) flex++;
        if (tries > 5000) break;
    }

    return gameCandidate;
}

exports.create = function create(playerCount, deck, gameMode) {
    return getGame(playerCount, deck, gameMode === this.mode.NORMAL
        ? BALANCEDFLEX
        : CHAOSFLEX);
};

exports.mode = {
    CHAOS: 'CHAOS',
    NORMAL: 'NORMAL'
};
