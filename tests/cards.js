/* eslint-disable no-unused-vars*/
const should = require('should');
const cards = require('../src/cards');
const cardsData = require('../data/cards');

describe('cards test', () => {
    it('should return a card template', () => {
        cards.getAll().should.be.equal(cardsData);
    });

    it('should return an empty array if deck doesn\t exists', () => {
        cards.inDeck('what_the_what').should.deepEqual([]);
    });

    it('should return an specific card', () => {
        const amateurDeck = [
            { role: 'Mayor', value: 2, amount: 1 },
            { role: 'Prince', value: 3, amount: 1 },
            { role: 'Seer', value: 7, amount: 1 },
            { role: 'Tanner', value: 1, amount: 1 },
            { role: 'Villager', value: 1, amount: 20 },
            { role: 'Werewolf', value: -6, amount: 12 },
            { role: 'Witch', value: 4, amount: 1 },
            { role: 'Wolf Cub', value: -8, amount: 1 }
        ];

        cards.inDeck('amateur').should.deepEqual(amateurDeck);
    });
});
