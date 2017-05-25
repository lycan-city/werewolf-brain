[![Build Status](https://travis-ci.org/lycan-city/werewolf-brain.svg?branch=master)](https://travis-ci.org/lycan-city/werewolf-brain)

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
            { key: 'mason', amount: f, role: 'Mason', description: 'Mason description'}
        ],
        lang: en,
        weight : w,
        players : p
    };
```
### Templates
#### Basic
- 20 Villagers
- 12 Werewolves

#### Novice
- 1 Mayor
- 1 Seer
- 20 Villagers
- 12 Werewolves

#### Amateur
- 1 Mayor
- 1 Prince
- 1 Seer
- 1 Tanner
- 20 Villagers
- 12 Werewolves
- 1 Witch
- 1 Wolf Cub

#### Wolfpack
- 1 Big Bad Wolf
- 1 Dream Wolf
- 1 Fruit Brute
- 1 Lone Wolf
- 1 Martyr
- 1 Mayor
- 1 Prince
- 1 Seer
- 20 Villagers
- 12 Werewolves
- 1 Wolf Cub

#### Competent
- 1 Apprentice Seer
- 1 Bodyguard
- 1 Cult Leader
- 1 Cupid
- 1 Cursed
- 1 Diseased
- 1 Doppelgänger
- 1 Drunk
- 1 Lycan
- 3 Mason
- 1 Mayor
- 1 Minion
- 1 Prince
- 1 Seer
- 1 Sorcerer
- 1 Spellcaster
- 1 Tanner
- 20 Villagers
- 12 Werewolves
- 1 Wild Child
- 1 Witch
- 1 Wolf Cub

#### Vampires
- 1 Cursed
- 1 Dire Wolf
- 1 Drunk
- 3 Mason
- 1 Mayor
- 1 Prince
- 1 Seer
- 1 Sorcerer
- 1 Spellcaster
- 1 Tanner
- 8 Vampire
- 20 Villager
- 1 Virginia Woolf
- 12 Werewolf
- 1 Witch
- 1 Wolf Cub

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
        { "key": "apprentice_seer", "value": 4 },
        { "key": "aura_seer", "value": 3 },
        { "key": "beholder", "value": 2 },
        { "key": "big_bad_wolf", "value": -9 },
        { "key": "bloody_mary", "value": 1 },
        { "key": "bodyguard", "value": 3 },
        { "key": "bogeyman", "value": -6 },
        { "key": "chupacabra", "value": 4 },
        { "key": "count_dracula", "value": -2 },
        { "key": "cult_leader", "value": 1 },
        { "key": "cupid", "value": -2 },
        { "key": "cursed", "value": -3 },
        { "key": "dire_wolf", "value": -4 },
        { "key": "diseased", "value": 3 },
        { "key": "doppelganger", "value": -2 },
        { "key": "dream_wolf", "value": -5 },
        { "key": "drunk", "value": 3 },
        { "key": "fortune_teller", "value": 0 },
        { "key": "fruit_brute", "value": -3 },
        { "key": "ghost", "value": 2 },
        { "key": "hoodlum", "value": 0 },
        { "key": "hunter", "value": 3 },
        { "key": "insomniac", "value": 3 },
        { "key": "leprechaun", "value": 5 },
        { "key": "little_girl", "value": 0 },
        { "key": "lone_wolf", "value": -4 },
        { "key": "lycan", "value": -1 },
        { "key": "mayor", "value": 2 },
        { "key": "mason", "value": 2 },
        { "key": "martyr", "value": 3 },
        { "key": "minion", "value": -6 },
        { "key": "moderator", "value": 0 },
        { "key": "nostradamus", "value": 1 },
        { "key": "old_hag", "value": 1 },
        { "key": "old_man", "value": 0 },
        { "key": "pacifist", "value": -1 },
        { "key": "p_i", "value": 3 },
        { "key": "priest", "value": 3 },
        { "key": "prince", "value": 3 },
        { "key": "sasquatch", "value": -2 },
        { "key": "seer", "value": 7 },
        { "key": "sorcerer", "value": -3 },
        { "key": "spellcaster", "value": 1 },
        { "key": "tanner", "value": 1 },
        { "key": "the_count", "value": 5 },
        { "key": "thing", "value": 3 },
        { "key": "tough_guy", "value": 3 },
        { "key": "troublemaker", "value": 2 },
        { "key": "vampire", "value": -7 },
        { "key": "village_idiot", "value": 2 },
        { "key": "villager", "value": 1 },
        { "key": "virginia_woolf", "value": -2 },
        { "key": "werewolf", "value": -6 },
        { "key": "wild_child", "value": 0 },
        { "key": "witch", "value": 4 },
        { "key": "wolf_cub", "value": -8 },
        { "key": "wolf_man", "value": -9 },
        { "key": "wolverine", "value": -4  }
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
        { "key": "mason", "value": 2, "amount": 3 },
        { "key": "minion", "value": -6, "amount": 1 },
        { "key": "prince", "value": 3, "amount": 1 },
        { "key": "seer", "value": 7, "amount": 1 },
        { "key": "spellcaster", "value": 1, "amount": 1 },
        { "key": "tanner", "value": 1, "amount": 1 },
        { "key": "vampire", "value": -7, "amount": 8 },
        { "key": "van_helsing", "value": 6, "amount": 1 },
        { "key": "villager", "value": 1, "amount": 30 },
        { "key": "werewolf", "value": -6, "amount": 12 },
        { "key": "wolf_cub", "value": -8, "amount": 1 },
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
        { "key": "martyr", "value": 3, "amount": 2 },
        { "key": "mason", "value": 2, "amount": 3 },
        { "key": "minion", "value": -6, "amount": 1 },
        { "key": "prince", "value": 3, "amount": 1 },
        { "key": "seer", "value": 7, "amount": 1 },
        { "key": "serial_killer", "value": -5, "amount": 1 },
        { "key": "spellcaster", "value": 1, "amount": 1 },
        { "key": "tanner", "value": 1, "amount": 1 },
        { "key": "vampire", "value": -7, "amount": 8 },
        { "key": "villager", "value": 1, "amount": 20 },
        { "key": "werewolf", "value": -6, "amount": 18 },
        { "key": "wolf_cub", "value": -8, "amount": 1 },
    ];
    const options = { 
        deck: customCards,
        mode: 'CHAOS'
    };
    const game = wwb.getChaosGame(players, options);
```
