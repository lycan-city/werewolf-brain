/* eslint-disable no-unused-expressions*/
const should = require('should');
const decks = require('../src/decks');
const decksData = require('../data/decks');

describe('Decks', () => {
    it('should return all decks.', () => {
        decks.getAll().should.be.equal(decksData);
    });

    it("should return undefined if deck doesn't exitst.", () => {
        should(decks.get('f4k3')).be.undefined;
    });

    it('should return a deck.', () => {
        const noviceDeck = {
            mayor: 1,
            seer: 1,
            villager: 20,
            werewolf: 12
        };
        decks.get('Novice').should.deepEqual(noviceDeck);
    });
});
