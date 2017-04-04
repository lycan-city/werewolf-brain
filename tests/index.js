const wwb = require('../index');
require('should');

describe('Index', () => {
    it('should not create a game with no players.', () => {
        wwb.getGame.should.throw('Players must be greater than 0.');
    });

    it('should create games with no options.', () => {
        wwb.getGame(3).should.be.an.Object();
    });

    it('should create games with defined decks.', () => {
        wwb.getGame(3, { deckName: 'novice' }).should.be.an.Object();
    });

    it('should create games with a custom deck.', () => {
        const customDeck = {
            villager: 20,
            virginia_woolf: 1,
            werewolf: 12,
            wild_child: 1,
            witch: 1,
            wolf_cub: 1,
        };
        wwb.getGame(5, { deck: customDeck }).should.be.an.Object();
    });

    it('should not create game with invalid deck', () => {
        (() => { wwb.getGame(5, { deckName: 'f4k3' }); }).should.throw('Deck f4k3 is not defined.');
    });

    it('should create game a normal game by default', () => {
        const customDeck = {
            seer: 1,
            werewolf: 1,
            wolf_cub: 1,
        };
        const game = wwb.getGame(3, { deck: customDeck });
        game.should.be.an.Object();
        game.weight.should.be.within(-5, 5);
    });

    it('should not create game a chaos game when specified', () => {
        const customDeck = {
            seer: 1,
            werewolf: 1,
            wolf_cub: 1,
        };
        const game = wwb.getGame(3, { deck: customDeck });
        game.should.be.an.Object();
        game.weight.should.be.within(-5, 5);
    });
});
