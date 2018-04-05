/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
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

const language = 'en';

describe('Game', () => {
    const players = 25;


    it('should have both modes.', () => {
        game.mode.should.have.property('NORMAL');
        game.mode.should.have.property('CHAOS');
    });

    describe('Create', () => {
        describe('given mode is NORMAL', () => {
            beforeEach(function () {
                this.game = game.create(players, language, cards, game.mode.NORMAL);
            });

            it('should create a normal game.', function () {
                this.game.should.not.be.empty();
            });


            it('should contain the weight on each normal game created.', function () {
                this.game.should.have.property('weight').which.is.a.Number();
            });

            it('should give a weight within -10 and 10 on each normal game created.', function () {
                this.game.weight.should.be.within(-10, 10);
            });

            it('should contain a deck in each normal game created.', function () {
                this.game.should.have.property('deck');
            });

            it('should contain the amount of players on each normal game created.', function () {
                this.game.should.have.property('players').which.is.a.Number();
            });

            it('should includes the maximun number of players on each normal game created.', function () {
                this.game.players.should.be.equal(players);
            });
        });

        describe('given mode is CHAOS', () => {
            beforeEach(function () {
                this.game = game.create(players, language, cards, game.mode.CHAOS);
            });

            it('should create a chaos game.', function () {
                this.game.should.not.be.empty();
            });

            it('should contain the weight on each chaos game created.', function () {
                this.game.should.have.property('weight').which.is.a.Number();
            });

            it('should give a weight within -20 and 20 on each chaos game created.', function () {
                this.game.weight.should.be.within(-20, 20);
            });

            it('should contain a deck in each chaos game created.', function () {
                this.game.should.have.property('deck');
            });

            it('should contain the amount of players on each chaos game created.', function () {
                this.game.should.have.property('players').which.is.a.Number();
            });

            it('should includes the maximun number of players on each chaos game created.', function () {
                this.game.players.should.be.equal(players);
            });
        });
    });
});
