/* eslint-disable no-unused-vars*/
const should = require('should');
const game = require('../src/game');

const cards = [
    { key: 'mayor', value: 2, amount: 1 },
    { key: 'prince', value: 3, amount: 1 },
    { key: 'seer', value: 7, amount: 1 },
    { key: 'tanner', value: 1, amount: 1 },
    { key: 'villager', value: 1, amount: 20 },
    { key: 'werewolf', value: -6, amount: 12 },
    { key: 'witch', value: 4, amount: 1 },
    { key: 'wolf_cub', value: -8, amount: 1 }
];

describe('Game', () => {
    const players = 25;

    it('should have both modes.', () => {
        game.mode.should.have.property('NORMAL');
        game.mode.should.have.property('CHAOS');
    });

    let normalGame = {};
    const language = 'en';
    it('should create a normal game.', () => {
        normalGame = game.create(players, language, cards, game.mode.NORMAL);
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
        chaosGame = game.create(players, language, cards, game.mode.CHAOS);
        chaosGame.should.not.be.empty();
    });

    it('should contain the weight on each chaos game created.', () => {
        chaosGame.should.have.property('weight').which.is.a.Number();
    });

    it('should give a weight within -20 and 20 on each chaos game created.', () => {
        chaosGame.weight.should.be.within(-20, 20);
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
