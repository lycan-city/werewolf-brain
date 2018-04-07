[![Build Status](https://travis-ci.org/lycan-city/werewolf-brain.svg?branch=master)](https://travis-ci.org/lycan-city/werewolf-brain)
[![bitHound Overall Score](https://www.bithound.io/github/lycan-city/werewolf-brain/badges/score.svg)](https://www.bithound.io/github/lycan-city/werewolf-brain)

# Werewolf-Brain
**Werewolf-Brain** (or **wwb**) is a JavaScript library for the creation of
*scenarios* to play the party card game
[Ultimate Werewolf](https://en.wikipedia.org/wiki/Ultimate_Werewolf "Wikipedia").
There are several ways to craft fun games with this library. For more on usage,
check out the examples section below.

## Installing
If you use npm, ```npm install werewolf-brain```. Otherwise,
download the files from [here](https://github.com/wistcc/werewolf-brain "Github")
and add them to the project.

## What does it do?
Creates new scenarios based on the number of players, or available cards, given
a template and the script for the night calls. Moderators can then use these
scenarios to set up Werewolf games. The number of players is not limited. If the
current deck of cards can't have a game with all the players, the library will
give you a game with the maximum number of players that it could calculate in 5000
tries.

We use a **game** object to describe a scenario. This object contains the number
of *players*, the game *weight*, the selected language pack *lang* and the *deck*
itself. The game weight gives you an idea of how balanced is the game. Positive
weight means a game in favor to the Villagers, negative means the opposite: a game
in favor to the other non-Villagers cards. The deck is an array of cards, you can
find the details in the next section.

### Game Object
Game for ***p*** players, weight ***w*** and the cards ( ***v*** Villagers and
***f*** Werewolves, ***m*** masons, etc. ). Each card has a *role* and a
*description*, which depends on the selected language pack ***en***.
```javascript
    const game = {
        deck : [
            { key: 'villager', amount: v, role: 'Villager', description: 'Villager description'},
            { key: 'werewolf', amount: f, role: 'Werewolf', description: 'Werewolf description'},
            { key: 'mason', amount: m, role: 'Mason', description: 'Mason description'}
        ],
        lang: en,
        weight : w,
        players : p
    };
```
### Templates
| Card \ Template | Basic | Novice | Amateur | Wolfpack | Competent | Vampires |
|-----------------|-------|--------|---------|----------|-----------|----------|
| Apprentice Seer | -     | -      | -       | -        | 1         | -        |
| Big Bad Wolf    | -     | -      | -       | 1        | -         | -        |
| Bodyguard       | -     | -      | -       | -        | 1         | -        |
| Cult Leader     | -     | -      | -       | -        | 1         | -        |
| Cupid           | -     | -      | -       | -        | 1         | -        |
| Cursed          | -     | -      | -       | -        | 1         | 1        |
| Diseased        | -     | -      | -       | -        | 1         | -        |
| Doppelgänger    | -     | -      | -       | -        | 1         | -        |
| Dream Wolf      | -     | -      | -       | 1        | -         | -        |
| Drunk           | -     | -      | -       | -        | 1         | 1        |
| Fruit Brute     | -     | -      | -       | 1        | -         | -        |
| Lone Wolf       | -     | -      | -       | 1        | -         | -        |
| Lycan           | -     | -      | -       | -        | 1         | -        |
| Martyr          | -     | -      | -       | 1        | -         | -        |
| Mason           | -     | -      | -       | -        | 3         | 3        |
| Mayor           | -     | 1      | 1       | 1        | 1         | 1        |
| Minion          | -     | -      | -       | -        | 1         | -        |
| Prince          | -     | -      | 1       | 1        | 1         | 1        |
| Seer            | -     | 1      | 1       | 1        | 1         | 1        |
| Sorcerer        | -     | -      | -       | -        | 1         | 1        |
| Spellcaster     | -     | -      | -       | -        | 1         | 1        |
| Tanner          | -     | -      | 1       | -        | 1         | 1        |
| Vampire         | -     | -      | -       | -        | -         | 8        |
| Villager        | 20    | 20     | 20      | 20       | 20        | 20       |
| Werewolf        | 12    | 12     | 12      | 12       | 12        | 12       |
| Wild Child      | -     | -      | -       | -        | 1         | -        |
| Witch           | -     | -      | -       | -        | 1         | 1        |
| Wolf Cub        | -     | -      | -       | -        | 1         | 1        |

## Examples
### Get all template registered
```javascript
    const wwb = require('werewolf-brain');
    const templates = wwb.getAllDecks();
```

### Get all cards registered
```javascript
    const wwb = require('werewolf-brain');
    const cards = wwb.getAllCards();
```

#### Cards Array
```javascript
    const cards = [
        { apprentice_seer: 4 },
        { aura_seer: 3 },
        { beholder: 2 },
        { big_bad_wolf: -9 },
        { bloody_mary: 1 },
        { bodyguard: 3 },
        { bogeyman: -6 },
        { chupacabra: 4 },
        { count_dracula: -2 },
        { cult_leader: 1 },
        { cupid: -2 },
        { cursed: -3 },
        { dire_wolf: -4 },
        { diseased: 3 },
        { doppelganger: -2 },
        { dream_wolf: -5 },
        { drunk: 3 },
        { fortune_teller: 0 },
        { fruit_brute: -3 },
        { ghost: 2 },
        { hoodlum: 0 },
        { hunter: 3 },
        { insomniac: 3 },
        { leprechaun: 5 },
        { little_girl: 0 },
        { lone_wolf: -4 },
        { lycan: -1 },
        { mayor: 2 },
        { mason: 2 },
        { martyr: 3 },
        { minion: -6 },
        { moderator: 0 },
        { nostradamus: 1 },
        { old_hag: 1 },
        { old_man: 0 },
        { pacifist: -1 },
        { p_i: 3 },
        { priest: 3 },
        { prince: 3 },
        { sasquatch: -2 },
        { seer: 7 },
        { sorcerer: -3 },
        { spellcaster: 1 },
        { tanner: 1 },
        { the_count: 5 },
        { thing: 3 },
        { tough_guy: 3 },
        { troublemaker: 2 },
        { vampire: -7 },
        { village_idiot: 2 },
        { villager: 1 },
        { virginia_woolf: -2 },
        { werewolf: -6 },
        { wild_child: 0 },
        { witch: 4 },
        { wolf_cub: -8 },
        { wolf_man: -9 },
        { wolverine: -4 }
    ];
```

### Get available language packs
```javascript
    const wwb = require('werewolf-brain');
    const languages = wwb.getLanguages();
```

### Create new scenario
The function `getGame` allows you to start a new game using all the cards currently
registered and the default language which is English (en). In this example we are 
starting a new game with ***8*** players. The function will return a game
object which is described above.
```javascript
    const wwb = require('werewolf-brain');
    const players = 8;
    const game = wwb.getGame(players);
```

You can customize the game passing an option object as an aditional parameter. The
next example creates a game in Spanish. 
```javascript
    const wwb = require('werewolf-brain');
    const players = 8;
    const options = { 
        language: 'es'
    }
    const game = wwb.getGame(players, options);
```

### Night calls
The function ```getScriptFromDeck``` gives you the calls you need at night to
moderate a game.
```javascript
    const wwb = require('werewolf-brain');
    const players = 8;
    const game = wwb.getGame(players);
    const calls = wwb.getScriptFromDeck(game.deck);
```

If you need the calls in another language, pass the desired as follows.
```javascript
    const wwb = require('werewolf-brain');
    const players = 8;
    const game = wwb.getGame(players);
    const calls = wwb.getScriptFromDeck(game.deck, 'es');
```

### Create a new scenario using a template
The function `getGame` lets you start a new game with only the template cards. In
this example we need a game for ***12*** players who only know about the cards of
Werewolves, Villagers, Seer and Mayor cards. In this case, which is intended for
new players, the `Novice` template is an excellent option. The function will return
a game object.

```javascript
    const wwb = require('werewolf-brain');
    const players = 12;
    const options = { 
        deckName: 'Novice'
    };
    const game = wwb.getGame(players, options);
```

### Create a new scenario using custom template or cards
The function `getGame` allows you to start a new game using a custom deck. This
feature enables the creation of new roles or the use of more cards than the ones
included in a single bundle. In this example we are adding another seer (normally
1), some aditional villagers (normally 20) and a new role **Van Helsing** (this new
role has the ability to chase vampires every night). The function will return a
game object.

*Note: using this function requires an update to the language pack when new cards*
*are added. For each new card, add the role and the description in the desired*
*language.*
```javascript
    const wwb = require('werewolf-brain');
    const players = 17;
    const customCards = [
        { mason: 3 },
        { minion: 1 },
        { prince: 1 },
        { seer: 1 },
        { spellcaster: 1 },
        { tanner: 1 },
        { vampire: 8 },
        { van_helsing: 1 },
        { villager: 30 },
        { werewolf: 12 },
        { wolf_cub: 1 },
    ];
    const options = { 
        deck: customCards
    };
    const game = wwb.getGame(players, options);
```

### Create new unfair scenario
The function `getGame` gives you the ability to start a new game with a higher rate
of unbalance using all cards currently registered. In this example we are starting
a new unfair game with ***12*** players. The function will return a game object.

```javascript
    const wwb = require('werewolf-brain');
    const players = 12;
    const options = { 
        mode: 'CHAOS'
    };
    const game = wwb.getGame(players, options);
```
*Note: use the function `getModes` to check current game modes.*

### Create a new unfair scenario using a template
The function `getGame` allows you to start a new unfair game with the template cards
only. In this example we are creating an unfair game for ***9*** players who know
all 'Amateur' template cards.

```javascript
    const wwb = require('werewolf-brain');
    const players = 9;
    const options = { 
        deckName: 'Amateur',
        mode: 'CHAOS'
    };
    const game = wwb.getGame(players, options);
```

### Create a new unfair scenario using custom template or cards
The function `getGame` allows you to start a new unfair game using a custom deck. In
this example we are adding another martyr (normally 1), some aditional Werewolves
(normally 12) and a new role **Serial Killer** this new role visits a house and
kills everyone every night. The function will return a game object.

*Note: using this function requires an update to the language pack when new cards*
*are added. For each new card, add the role and the description in the desired*
*language.*
```javascript
    const wwb = require('werewolf-brain');
    const players = 22;
    const customCards = [
        { martyr: 2 },
        { mason: 3 },
        { minion: 1 },
        { prince: 1 },
        { seer: 1 },
        { serial_killer: 1 },
        { spellcaster: 1 },
        { tanner: 1 },
        { vampire: 8 },
        { villager: 20 },
        { werewolf: 18 },
        { wolf_cub: 1 },
    ];
    const options = { 
        deck: customCards,
        mode: 'CHAOS'
    };
    const game = wwb.getChaosGame(players, options);
```
