/* eslint-disable no-unused-vars*/
const should = require('should');
const game = require('../src/game');

const cards = [
    { role: 'Mayor', value: 2, amount: 1 },
    { role: 'Prince', value: 3, amount: 1 },
    { role: 'Seer', value: 7, amount: 1 },
    { role: 'Tanner', value: 1, amount: 1 },
    { role: 'Villager', value: 1, amount: 20 },
    { role: 'Werewolf', value: -6, amount: 12 },
    { role: 'Witch', value: 4, amount: 1 },
    { role: 'Wolf Cub', value: -8, amount: 1 }
];

function getRandom(minimum, maximun) {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximun);
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

describe('Game', () => {
    const players = 25;

    it('should have both modes.', () => {
        game.mode.should.have.property('NORMAL');
        game.mode.should.have.property('CHAOS');
    });

    let normalGame = {};
    it('should create a normal game.', () => {
        normalGame = game.create(players, cards, game.mode.NORMAL);
        normalGame.should.not.be.empty();
    });

    it('should contain the weight on each normal game created.', () => {
        normalGame.should.have.property('weight').which.is.a.Number();
    });

    it('should give a weight within -10 and 10 on each normal game created.', () => {
        normalGame.weight.should.be.within(-10, 10);
    });

    it('should contain a deck in each normal game created.', () => {
        normalGame.should.have.property('deck');
    });

    it('should contain the amount of players on each normal game created.', () => {
        normalGame.should.have.property('players').which.is.a.Number();
    });

    it('should includes the maximun number of players on each normal game created.', () => {
        normalGame.players.should.be.equal(players);
    });
    normalGame = {};

    let chaosGame = {};
    it('should create a chaos game.', () => {
        chaosGame = game.create(players, cards, game.mode.CHAOS);
        chaosGame.should.not.be.empty();
    });

    it('should contain the weight on each chaos game created.', () => {
        chaosGame.should.have.property('weight').which.is.a.Number();
    });

    it('should give a weight within -10 and 10 on each chaos game created.', () => {
        chaosGame.weight.should.be.within(-10, 10);
    });

    it('should contain a deck in each chaos game created.', () => {
        chaosGame.should.have.property('deck');
    });

    it('should contain the amount of players on each chaos game created.', () => {
        chaosGame.should.have.property('players').which.is.a.Number();
    });

    it('should includes the maximun number of players on each chaos game created.', () => {
        chaosGame.players.should.be.equal(players);
    });
});
