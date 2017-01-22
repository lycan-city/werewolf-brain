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
of *players*, the game *weight* and the *deck* itself. The game weight gives you
an idea of how balanced is the game. Positive weight means a game in favor to the
Villagers, negative means the opposite: a game in favor to the other non-Villagers
cards.

### game Object
Game for ***p*** players, weight ***w*** and the cards ( ***v***
Villagers and ***f*** Werewolves, ***m*** masons, etc. )
```javascript
    const game = {
        deck : {
            'Villager' : v,
            'Werewolf' : f,
            'mason' : m
        },
        weight : w,
        players : p
    };
```
### Templates
#### Basic
- Werewolves
- Villagers

#### Novice
- Werewolves
- Villagers
- Seer
- Mayor

#### Amateur
- Werewolves
- Wolf Cub
- Villagers
- Mayor
- Seer
- Witch
- Prince
- Tanner

#### Wolfpack
- Werewolves
- Big Bad Wolf
- Wolf Cub
- Lone Wolf
- Fruit Brute
- Dream Wolf
- Villagers
- Seer
- Prince
- Mayor
- Martyr

#### Competent
- Werewolves
- Wolf Cub
- Sorcerer
- Cursed
- Minion
- Wild Child
- Villagers
- Mayor
- Seer
- Witch
- Prince
- Cult Leader
- Cupid
- Diseased
- Doppelgänger
- Lycan
- Spellcaster
- Tanner
- Mason
- Bodyguard
- Apprentice Seer
- Drunk

## Examples
### Get all template registered
```javascript
    const wwb = require('werewolf-brain');
    const templates = wwb.getAllTemplates();
```
### Get all cards registered
```javascript   
    const wwb = require('werewolf-brain');
    const cards = wwb.getAllCards();
```
#### cards Array
```javascript
    const cards = [ 
        { role: 'Wolf Man', value: -9, amount: 1 },
        { role: 'Big Bad Wolf', value: -9, amount: 1 },
        { role: 'Wolf Cub', value: -8, amount: 1 },
        { role: 'Vampire', value: -7, amount: 8 },
        { role: 'Bogeyman', value: -6, amount: 1 },
        { role: 'Minion', value: -6, amount: 1 },
        { role: 'Werewolf', value: -6, amount: 12 },
        { role: 'Dream Wolf', value: -5, amount: 1 },
        { role: 'Lone Wolf', value: -4, amount: 1 },
        { role: 'Fruit Brute', value: -3, amount: 1 },
        { role: 'Sorcerer', value: -3, amount: 1 },
        { role: 'Cursed', value: -3, amount: 1 },
        { role: 'Count Dracula', value: -2, amount: 1 },
        { role: 'Cupid', value: -2, amount: 1 },
        { role: 'Doppelgänger', value: -2, amount: 1 },
        { role: 'Sasquatch', value: -2, amount: 1 },
        { role: 'Lycan', value: -1, amount: 1 },
        { role: 'Pacifist', value: -1, amount: 1 },
        { role: 'Old Man', value: 0, amount: 1 },
        { role: 'Hoodlum', value: 0, amount: 1 },
        { role: 'Little Girl', value: 0, amount: 1 },
        { role: 'Wild Child', value: 0, amount: 1 },
        { role: 'Moderator', value: 0, amount: 1 },
        { role: 'Villager', value: 1, amount: 20 },
        { role: 'Old Hag', value: 1, amount: 1 },
        { role: 'Cult Leader', value: 1, amount: 1 },
        { role: 'Spellcaster', value: 1, amount: 1 },
        { role: 'Tanner', value: 1, amount: 1 },
        { role: 'Bloody Mary', value: 1, amount: 1 },
        { role: 'Nostradamus', value: 1, amount: 1 },
        { role: 'Beeholder', value: 2, amount: 1 },
        { role: 'Ghost', value: 2, amount: 1 },
        { role: 'Village Idiot', value: 2, amount: 1 },
        { role: 'Mason', value: 2, amount: 3 },
        { role: 'Mayor', value: 2, amount: 1 },
        { role: 'Troublemaker', value: 2, amount: 1 },
        { role: 'Bodyguard', value: 3, amount: 1 },
        { role: 'Diseased', value: 3, amount: 1 },
        { role: 'Hunter', value: 3, amount: 1 },
        { role: 'Insomniac', value: 3, amount: 1 },
        { role: 'Martyr', value: 3, amount: 1 },
        { role: 'P.I.', value: 3, amount: 1 },
        { role: 'Priest', value: 3, amount: 1 },
        { role: 'Prince', value: 3, amount: 1 },
        { role: 'Tough Guy', value: 3, amount: 1 },
        { role: 'Thing', value: 3, amount: 1 },
        { role: 'Drunk', value: 3, amount: 1 },
        { role: 'Apprentice Seer', value: 4, amount: 1 },
        { role: 'Witch', value: 4, amount: 1 },
        { role: 'Chupacabra', value: 4, amount: 1 },
        { role: 'The Count', value: 5, amount: 1 },
        { role: 'Leprechaun', value: 5, amount: 1 },
        { role: 'Seer', value: 7, amount: 1 } 
    ];
```
### Create new scenario
The function `getBalancedGame` allows you to start a new game using all the
cards currently registered. In this example we are starting a new game with
***8*** players. The function will return a game object which is described above.
```javascript
    const wwb = require('werewolf-brain');
    const players = 8;
    const game = wwb.getBalancedGame(players);
```
### Night calls
The function ```getScriptFromDeck``` gives you the calls you need at night to
moderate a game.
```javascript
    const wwb = require('werewolf-brain');
    const players = 8;
    const game = wwb.getBalancedGame(players);
    const calls = wwb.getScriptFromDeck(game.deck);
```

### Create a new scenario using a template
The function `getGameFromTemplate` lets you start a new game with only the
template cards. In this example we need a game for ***12*** players who only know
about the cards of Werewolves, Villagers, Seer and Mayor cards. In this case,
which is intended for new players, the `Novice` template is an excellent option.
The function will return a game object.
```javascript
    const wwb = require('werewolf-brain');
    const players = 12;
    const template = 'Novice';
    const game = wwb.getGameFromTemplate(players, template);
```

### Create a new scenario using custom template or cards
The function `getBalancedGame` allows you to start a new game using a custom
deck. This feature enables the creation of new roles or the use of more cards than
the ones included in a single bundle. In this example we are adding another seer
(normally 1), some aditional villagers (normally 20) and a new role **Van Helsing**
(this new role has the ability to chase vampires every night). The function will
return a game object.
```javascript
    const wwb = require('werewolf-brain');
    const players = 17;
    const customCards = [
        { role: 'Vampire', value: -7, amount: 8 },
        { role: 'Werewolf', value: -6, amount: 12 },
        { role: 'Minion', value: -6, amount: 1 },
        { role: 'Wolf Cub', value: -8, amount: 1 },
        { role: 'Villager', value: 1, amount: 30 },
        { role: 'Seer', value: 7, amount: 2 },
        { role: 'Van Helsing', value: 6, amount: 1 },
        { role: 'Spellcaster', value: 1, amount: 1 },
        { role: 'Tanner', value: 1, amount: 1 },
        { role: 'Prince', value: 3, amount: 1 },
        { role: 'Mason', value: 2, amount: 3 }
    ];
    const game = wwb.getBalancedGame(players, customCards);
```

### Create new unfair scenario
The function `getChaosGame` gives you the ability to start a new game with a
higher rate of unbalance using all cards currently registered. In this example we
are starting a new unfair game with ***12*** players. The function will return a
game object.

    const wwb = require('werewolf-brain');
    const players = 12;
    const game = wwb.getChaosGame(players);

### Create a new unfair scenario using a template
The function `getChaosGameFromTemplate` allows you to start a new unfair game
with the template cards only. In this example we are creating an unfair game for
***9*** players who know all 'Amateur' template cards.

    const wwb = require('werewolf-brain');
    const players = 9;
    const template = 'Amateur';
    const game = wwb.getChaosGame(players, template);

### Create a new unfair scenario using custom template or cards
The function `getChaosGame` allows you to start a new unfair game using a custom
deck. This feature works like `getBalancedGame` but creates an unfair game. In
this example we are adding another martyr (normally 1), some aditional Werewolves
(normally 12) and a new role **Serial Killer** this new role visits a house and
kills everyone every night. The function will return a game object.

```javascript
    const wwb = require('werewolf-brain');
    const players = 22;
    const customCards = [
        { role: 'Vampire', value: -7, amount: 8 },
        { role: 'Werewolf', value: -6, amount: 15 },
        { role: 'Minion', value: -6, amount: 1 },
        { role: 'Wolf Cub', value: -8, amount: 1 },
        { role: 'Villager', value: 1, amount: 20 },
        { role: 'Seer', value: 7, amount: 1 },
        { role: 'Martyr', value: 3, amount: 2 },
        { role: 'Serial Killer', value: -5, amount: 1 },
        { role: 'Spellcaster', value: 1, amount: 1 },
        { role: 'Tanner', value: 1, amount: 1 },
        { role: 'Prince', value: 3, amount: 1 },
        { role: 'Mason', value: 2, amount: 3 }
    ];
    const game = wwb.getChaosGame(players, customCards);
```
