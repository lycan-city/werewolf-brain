/* eslint-disable no-unused-vars*/
const should = require('should');
const cards = require('../src/cards');
const cardsData = require('../data/cards');

describe('Cards tests', () => {
    it('should return all the cards', () => {
        cards.getAll().should.be.equal(cardsData);
    });

    it('should be in correct format', () => {
        const allCards = cards.getAll();
        allCards.forEach((card) => {
            card.should.have.property('role').which.is.a.String();
            card.should.have.property('value').which.is.a.Number();
            card.should.have.property('amount').which.is.a.Number();
        });
    });

    it('should return an empty array if deck doesn\'t exists', () => {
        cards.inDeck('f4k3').should.deepEqual([]);
    });

    it('should contain all cards in deck', () => {
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
