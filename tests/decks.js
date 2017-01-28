/* eslint-disable no-unused-vars*/
const should = require('should');
const decks = require('../src/decks');
const decksData = require('../data/decks');

describe('Decks tests', () => {
    it('should return al decks', () => {
        decks.getAll().should.be.equal(decksData);
    });

    it('should return an emtpy array if deck doesn\'t exitst', () => {
        decks.get('f4k3').should.deepEqual([]);
    });

    it('should return a deck', () => {
        const noviceDeck = ['Werewolf', 'Villager', 'Seer', 'Mayor'];
        decks.get('Novice').should.deepEqual(noviceDeck);
    });
});
