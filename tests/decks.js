/* eslint-disable no-unused-vars*/
const should = require('should');
const decks = require('../src/decks');
const decksData = require('../src/data/decks');

describe('Decks', () => {
    it('should return all decks.', () => {
        decks.getAll().should.be.equal(decksData);
    });

    it("should return an emtpy array if deck doesn't exitst.", () => {
        decks.get('f4k3').should.deepEqual([]);
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
