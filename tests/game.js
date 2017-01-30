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

describe('Game tests', () => {
    const players = getRandom(5, 18);

    it('should have both modes.', () => {
        game.mode.should.have.property('NORMAL');
        game.mode.should.have.property('CHAOS');
    });

    it('should create a normal game.', () => {
        const created = game.create(players, cards, game.mode.NORMAL);
        created.should.have.property('deck');
        created.should.have.property('weight').which.is.a.Number();
        created.should.have.property('players').which.is.a.Number();
        created.weight.should.be.within(-10, 10);
        created.players.should.be.equal(players);
    });

    it('should create a chaos game.', () => {
        const created = game.create(players, cards, game.mode.CHAOS);
        created.should.have.property('deck');
        created.should.have.property('weight').which.is.a.Number();
        created.should.have.property('players').which.is.a.Number();
        created.weight.should.be.within(-20, 20);
        created.players.should.be.equal(players);
    });
});
