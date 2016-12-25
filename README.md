# Werewolf-Brain
**Werewolf-Brain** (or **wwb**) is a JavaScript library 
for creating scenarios for playing the party card game 
[Ultimate Werewolf](https://en.wikipedia.org/wiki/Ultimate_Werewolf "Wikipedia").
There are several ways to craft funny games with this 
library, check out the examples section.

## Installing
If you use npm, ```npm install werewolf-brain```. Otherwise, 
download the files from here and add them to the project.

## What does it do?
Creates new scenarios based on the number of players, on a 
template, or the available cards. The number of players is not 
limited. If the current deck of cards can have a game with all 
the players, the library will give you a game with the maximum 
number of players that could found in 5000 tries. 

## Templates
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
### Get all cards registered
    var wwb = require('./werewolf-brain/index.js');
    var cards = wwb.getAllCards();

#### cards Array
    var cards = [ 
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

### Create new scenario
The function ```getBalancedGame``` allows you to start a new game 
using all the cards currently registered. In this example we are 
starting a new game with ***8*** players. The function will return 
a game object wich is described bellow.

    var wwb = require('./werewolf-brain/index.js');
    var players = 8;
    var game = wwb.getBalancedGame(players);

#### game Object
Game for ***p*** players, weight ***w*** and the cards ( ***v*** Villagers and 
***f*** Werewolves, ***m*** masons, etc. )

    var game = {
        deck : {
            'Villager' : v,
            'Werewolf' : f,
            'mason' : m
        },
        weight : w,
        players : p
    };

### Create a new scenario using a template
The function ```getGamFromTemplate``` lets you start a new game
with the template cards only. In this example we need a game for
***12*** players who only knows Werewolf, Villagers, Seer and Mayor
cards. In this case, the ```Novice``` template is an excellent option.
The function will return a game object.

    var wwb = require('./werewolf-brain/index.js');
    var players = 12;
    var template = 'Novice';
    var game = wwb.getGamFromTemplate(players, template);

### Create a new scenario using custom template or cards
The function ```getBalancedGame``` allows you to start a new game 
using a custom deck. This feature makes posible create new roles
or use more cards than the ones included in a single bundle. In this
example we are adding another seer (normally 1), some aditional 
villagers (normally 20) and a new role **Van Helsing** this new role 
chase vampires every night. The function will return a game object.

    var wwb = require('./werewolf-brain/index.js');
    var players = 17;
    var customCards = [
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
    ];
    var game = wwb.getBalancedGame(players, customCards);