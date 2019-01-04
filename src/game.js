const { fromGame: screenplayFromGame } = require('./moderator');

const languages = require('./languages');

const mode = {
    CHAOS: 'CHAOS',
    NORMAL: 'NORMAL'
};

const BALANCEDFLEX = 1;
const CHAOSFLEX = 2;
const SUCCESS = 1;
const FAIL = 0;

let game;
let allPlayers;
let cards;
let negatives;
let nonnegatives;
let gameCandidate;
let pivot;

function newGame() {
    game = {
        deck: {},
        weight: 100,
        players: 0
    };
    allPlayers = true;
    cards = {};
    negatives = -1;
    nonnegatives = -1;
    gameCandidate = {
        deck: {},
        weight: 100,
        players: 0
    };
}

function resetValues(classifiedCards) {
    game = {
        deck: {},
        weight: 0,
        players: 0
    };
    allPlayers = true;
    negatives = classifiedCards.negatives.reduce((a, c) => a + c.amount, 0);
    nonnegatives = classifiedCards.nonnegatives.reduce((a, c) => a + c.amount, 0);
    cards = JSON.parse(JSON.stringify(classifiedCards));
}

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function addRandomCard(selectedCard) {
    game.weight += selectedCard.value;
    game.players++;
    if (game.deck[selectedCard.key]) game.deck[selectedCard.key]++;
    else game.deck[selectedCard.key] = 1;
}

function addCardToDeck(isNegative) {
    if (isNegative) {
        if (negatives < 1) {
            allPlayers = false;
            return FAIL;
        }
        let rand = getRandom(negatives);
        for (let i = 0; i < cards.negatives.length; i++) {
            rand -= cards.negatives[i].amount;
            if (rand < 1) {
                cards.negatives[i].amount--;
                negatives--;
                addRandomCard(cards.negatives[i]);
                return SUCCESS;
            }
        }
    } else {
        if (nonnegatives < 1) {
            allPlayers = false;
            return FAIL;
        }
        let rand = getRandom(nonnegatives);
        for (let i = 0; i < cards.nonnegatives.length; i++) {
            rand -= cards.nonnegatives[i].amount;
            if (rand < 1) {
                cards.nonnegatives[i].amount--;
                nonnegatives--;
                addRandomCard(cards.nonnegatives[i]);
                return SUCCESS;
            }
        }
    }
    return FAIL;
}

function setGame(players, classifiedCards) {
    resetValues(classifiedCards);
    // get first card randomly
    let playersAdded = addCardToDeck(Math.round(Math.random()));

    while (playersAdded < players) {
        const added = addCardToDeck(game.weight >= pivot);
        if (added === FAIL) break;
        playersAdded += added;
    }
}

function classifyCards(chosenCards) {
    const classifiedCards = { negatives: [], nonnegatives: [] };
    classifiedCards.negatives = chosenCards.filter(x => x.value < 0);
    classifiedCards.nonnegatives = chosenCards.filter(x => x.value >= 0);
    return classifiedCards;
}

function getGame(players, language, chosenCards, gameMode) {
    const classifiedCards = classifyCards(chosenCards);
    let flex = gameMode === mode.NORMAL ? BALANCEDFLEX : CHAOSFLEX;
    pivot = gameMode === mode.NORMAL ? 0 : -4;
    let tries = 0;
    while (!allPlayers || game.weight < -1 * flex || game.weight > flex) {
        tries++;
        setGame(players, classifiedCards);
        if (gameCandidate.players <= game.players) gameCandidate = game;
        const totalCards = negatives + nonnegatives;
        if (tries % (totalCards * 10) === 0) flex++;
        if (tries > (totalCards * 100)) break;
    }
    gameCandidate.deck = languages.translateDeck(gameCandidate.deck, language);
    gameCandidate.screenplay = screenplayFromGame(gameCandidate.deck, chosenCards);
    return gameCandidate;
}

exports.create = function create(playerCount, language, deck, gameMode) {
    newGame();
    return getGame(playerCount, language, deck, gameMode);
};

exports.mode = mode;
