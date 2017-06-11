/* eslint-disable no-undef*/
/* eslint-disable no-unused-expressions*/
/* eslint-disable func-names */
const chai = require('chai');
const moderator = require('../src/moderator');

const expect = chai.expect;

describe('Screenplay', () => {
    describe('fromGame()', () => {
        beforeEach(function () {
            const deck = [
                { key: 'villager', amount: 25, },
                { key: 'werewolf', amount: 12, },
                { key: 'seer', amount: 1, },
                { key: 'cupid', amount: 1, },
                { key: 'cult_leader', amount: 1, },
            ];

            const gameDeck = [
                { key: 'werewolf', amount: 1, },
                { key: 'cult_leader', amount: 1, },
                { key: 'villager', amount: 7, },
                { key: 'cupid', amount: 1 }
            ];

            this.screenplay = moderator.fromGame(gameDeck, deck);
        });

        it('is expected to not be null or undefined', function () {
            expect(this.screenplay)
                .to.not.be.undefined
                .and.to.not.be.null;
        });

        it('is expected to be an array', function () {
            expect(this.screenplay).to.be.an('array');
        });

        it('is expected to have `key` and `level`', function () {
            this.screenplay.forEach(call =>
                expect(call).to.have.all.keys('key', 'level', 'firstNight')
            );
        });
    });
});
