/* eslint-disable no-unused-vars */
const should = require('should');
const cards = require('../src/cards');
const cardsData = require('../src/data/cards');

describe('Cards', () => {
    it('should return all the cards.', () => {
        cards.getAll().should.be.equal(cardsData);
    });

    it('should be in correct format.', () => {
        const allCards = cards.getAll();
        allCards.should.be.type('object');
        Object.keys(allCards).forEach((c) => {
            allCards[c].should.be.type('number');
        });
    });

    it("should return an empty array if deck doesn't exists", () => {
        cards.inDeck('f4k3').should.deepEqual([]);
    });

    it('should contain all cards in deck', () => {
        const amateurDeck = [
            { key: 'mayor', value: 2, amount: 1 },
            { key: 'prince', value: 3, amount: 1 },
            { key: 'seer', value: 7, amount: 1 },
            { key: 'tanner', value: 1, amount: 1 },
            { key: 'villager', value: 1, amount: 20 },
            { key: 'werewolf', value: -6, amount: 12 },
            { key: 'witch', value: 4, amount: 1 },
            { key: 'wolf_cub', value: -8, amount: 1 }
        ];

        cards.inDeck('amateur').should.deepEqual(amateurDeck);
    });

    it('should contain all cards in custom deck', () => {
        const customDeck = {
            mason: 3,
            minion: 1,
            prince: 1,
            seer: 5,
            spellcaster: 1,
            tanner: 1,
            villager: 10,
            werewolf: 12,
            wolf_cub: 1,
        };
        const expectedCards = [
            { key: 'mason', value: 2, amount: 3 },
            { key: 'minion', value: -6, amount: 1 },
            { key: 'prince', value: 3, amount: 1 },
            { key: 'seer', value: 7, amount: 5 },
            { key: 'spellcaster', value: 1, amount: 1 },
            { key: 'tanner', value: 1, amount: 1 },
            { key: 'villager', value: 1, amount: 10 },
            { key: 'werewolf', value: -6, amount: 12 },
            { key: 'wolf_cub', value: -8, amount: 1 },
        ];
        cards.inCustomDeck(customDeck).should.deepEqual(expectedCards);
    });
});
