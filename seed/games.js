const db = require('../db')
const { Game } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const games = [
    {
      name: 'Dungeons & Dragons',
      type: 'tabletop',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.indiethoughts.com%2Fwp-content%2Fuploads%2F2016%2F12%2FDungeon-And-Dragons-1024x709.jpg&f=1&nofb=1',
      description:
        'Dungeons & Dragons is a fantasy tabletop role-playing game originally designed by Gary Gygax and Dave Arneson. It was first published in 1974 by Tactical Studies Rules, Inc.'
    },

    {
      name: 'Warhammer',
      type: 'tabletop',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Warhammer_Fantasy_RedCraig.jpg/300px-Warhammer_Fantasy_RedCraig.jpg',
      description:
        'Warhammer is a tabletop miniature wargame with a medieval fantasy theme.'
    },

    {
      name: 'Celestia',
      type: 'tabletop',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Facrosstheboardcafe.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fpic2577990_md-480x480.jpg&f=1&nofb=1',
      description:
        'In Celestia, you board an aircraft with a team of adventurers to perform many trips through the cities of Celestia and recover their wonderful treasures. Your journey will not be safe, but you will attempt to be the richest adventurer by collecting the most precious treasures!'
    },
    {
      name: 'Catan',
      type: 'tabletop',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thesprucecrafts.com%2Fthmb%2FUuBEHqW6x1JHT7aY25-3Im_0z78%3D%2F1500x1000%2Ffilters%3Afill(auto%2C1)%2Fsettlers-of-catan-initial-placement-strategies-412418_hero_3210-604e44cd981841f783ae47c9e46b7082.jpg&f=1&nofb=1',
      description:
        'Catan is a multiplayer board game designed by Klaus Teuber. Players take on the roles of settlers, each attempting to build and develop holdings while trading and acquiring resources.'
    },

    {
      name: 'Takenoko',
      type: 'tabletop',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fortressofsolitude.co.za%2Fwp-content%2Fuploads%2F2014%2F12%2FTakenoko-review.jpg&f=1&nofb=1',
      description:
        'Takenoko A board game for two to four players by renowned designer Antoine Bauza, Takenoko allows you to work the bamboo plantations and care for the Emperors panda yourself.'
    },

    {
      name: 'Ticket to Ride',
      type: 'tabletop',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.m5yONBYJj3FztleEMCJQQgHaHa%26pid%3DApi&f=1',
      description:
        'Ticket to Ride is a railway-themed German-style board game designed by Alan R. Moon. Players collect and play train car cards to claim train routes across the map.'
    },

    {
      name: 'Dixit',
      type: 'tabletop',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.boardgamehalv.com%2Fwp-content%2Fuploads%2F2020%2F05%2FDixit_BoardGame_GameBoxCardPool-770x513.jpg&f=1&nofb=1',
      description:
        'Using a deck of cards illustrated with dreamlike images, players select cards that match a title suggested by the "storyteller", and attempt to guess which card the "storyteller" selected. '
    },

    {
      name: 'Wanderhome',
      type: 'tabletop',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegaminggang.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fwanderhome.jpg&f=1&nofb=1',
      description:
        'Wanderhome is a pastoral fantasy role-playing game about traveling animal-folk, the world they inhabit, and the way the seasons change. It is a game filled with grassy fields, mossy shrines, herds of chubby bumblebees, opossums in sundresses, salamanders with suspenders, starry night skies, and the most beautiful sunsets you can imagine.'
    },

    {
      name: 'Jiangshi',
      type: 'tabletop',
      image:
        'https://www.gameandacurry.com/wp-content/uploads/2021/05/6-16-20-Book-Cover-Mock-Up-01-600x900-1.png',
      description:
        'The premise of Jiangshi: Blood in the Banquet Hall is undeniably an interesting one. In the game, the players manage a restaurant business during the day and battle vampiric monsters in the night. '
    },

    {
      name: 'Pandemic',
      type: 'tabletop',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.pocketgamer.com%2Fartwork%2Fna-qjcvomq%2Fpandemic.jpg&f=1&nofb=1',
      description:
        'Pandemic is a cooperative board game designed by Matt Leacock and first published by Z-Man Games in the United States in 2008. Pandemic is based on the premise that four diseases have broken out in the world, each threatening to wipe out a region.'
    },

    {
      name: 'King Arthur Pendragon 6E',
      type: 'tabletop',
      image:
        'https://assets.dicebreaker.com/King-arthur-pendragon-dandd-not-rpg-tabletop.png/BROK/resize/660%3E/format/jpg/quality/80/King-arthur-pendragon-dandd-not-rpg-tabletop.png',
      description:
        'King Arthur Pendragon is an RPG series that’s been going since 1985, continuing to provide the tabletop world with opportunities for escapism for nigh on 35 years. Instead of simply offering yet another combat-focused fantasy RPG, Pendragon is unique in that it leans far more into the complex political side of being a knight. Becoming a member of the king’s court involves more than just hacking your way through brigands in Pendragon - it requires player characters to ponder their position of considerable power and how best to use it.'
    },

    {
      name: 'Root: The Tabletop Roleplaying Game',
      type: 'tabletop',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJg7IdFTci-k%2Fmaxresdefault.jpg&f=1&nofb=1',
      description:
        'Based on the lore of the popular board game of the same name, where-in you play vagabond woodland animals vying for control of a forest. In Root: The Tabletop Roleplaying Game you create a character, such as a wolf ranger, grizzled fox veteran or a cat scoundrel, before setting out to complete quests across the various clearings within the woodland.'
    },

    {
      name: 'The Adventure Zone: Bureau of Balance',
      type: 'tabletop',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Funfilteredgamer.com%2Fwp-content%2Fuploads%2F2021%2F01%2Fthe-adventure-zone-bureau-of-balance-header.jpg&f=1&nofb=1',
      description:
        'TAZ: Bureau of Balance uses a modular system to dynamically generate missions. One night you may find yourself fighting sarcastic specters as you make your way through haunted caverns, while your next mission might pit you against cunning gerblins on a train racing towards a perilous destination. With 12 decks of double-sided cards as a foundation, TAZ: Bureau of Balance provides players with over 120 hours of unique challenges.  Perfect for family game night or when your adventuring party- just wants to party. '
    },

    {
      name: 'Illimat',
      type: 'tabletop',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F59824dd1cd0f68fa59fc32ce%2F1511233741774-B633JZTN75MXJNCLFCW8%2FIllimat_gamebox_mobile.png&f=1&nofb=1',
      description:
        'Illimat has the style and flavor of a classic card game with a dynamic twist. As you play, you combine cards and collect them, trying to gather more than your opponents. But hidden luminaries and changing seasons can alter your plans.  '
    },

    {
      name: 'Star Wars: Rebellion',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/7SrPNGBKg9IIsP4UQpOi8g__imagepage/img/89ViRUkHkCJhvZA5fay7A9-46mY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4325841.jpg',
      description:
        'Star Wars: Rebellion is a board game of epic conflict between the Galactic Empire and Rebel Alliance for two to four players. Experience the Galactic Civil War like never before. In Rebellion, you control the entire Galactic Empire or the fledgling Rebel Alliance. You must command starships, account for troop movements, and rally systems to your cause.'
    },
    {
      name: 'Gaia Project',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/hGWFm3hbMlCDsfCsauOQ4g__imagepage/img/l0fffSKu6wscHhUNGWRh-0n-bqQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5375625.png',
      description:
        'Gaia Project is a new game in the line of Terra Mystica. As in the original Terra Mystica, fourteen different factions live on seven different kinds of planets, and each faction is bound to their own home planets, so to develop and grow, they must terraform neighboring planets into their home environments in competition with the other groups. '
    },
    {
      name: 'Scythe',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__imagepage/img/zoz-t_z9nqqxL7OwQenbqp9PRl8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3163924.jpg',
      description:
        "Scythe is an engine-building game set in an alternate-history 1920s period. It is a time of farming and war, broken hearts and rusted gears, innovation and valor. In Scythe, each player represents a character from one of five factions of Eastern Europe who are attempting to earn their fortune and claim their faction's stake in the land around the mysterious Factory. Players conquer territory, enlist new recruits, reap resources, gain villagers, build structures, and activate monstrous mechs."
    },
    {
      name: 'Dune: Imperium',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepage/img/BjM3LyahJ4IQ2ov5MkzkHatbmUc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5666597.jpg',
      description:
        'As a leader of one of the Great Houses of the Landsraad, raise your banner and marshal your forces and spies. War is coming, and at the center of the conflict is Arrakis- Dune, the desert planet.'
    },

    {
      name: 'Monopoly',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/9nGoBZ0MRbi6rdH47sj2Qg__imagepage/img/lxE4vGa3ef8a4brTRnvxGurt8I0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5786795.jpg',
      description:
        'Players take the part of land owners, attempting to buy and then develop their land. Income is gained by other players visiting their properties and money is spent when they visit properties belonging to other players. When times get tough, players may have to mortgage their properties to raise cash for fines, taxes and other misfortunes.'
    },

    {
      name: 'Clue',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/owlmDA10KegcwPaapY5auw__imagepage/img/Rt9I1XN5Nl12_aGaLae2BP9nbDM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5146918.png',
      description:
        'The classic detective game! In Clue, players move from room to room in a mansion to solve the mystery of: who done it, with what, and where?'
    },
    {
      name: 'Risk',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/Oem1TTtSgxOghRFCoyWRPw__imagepage/img/4wrkUvOM1FWJ6PAlG0C-LbeQ984=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4916782.jpg',
      description:
        'Possibly the most popular, mass market war game. The goal is conquest of the world.'
    },
    {
      name: 'Return to the Dark Tower',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/sd0acHeHj9RE-daXPC7pEg__imagepage/img/oGHznrJycteSVhD5q_JufudBTbs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5153383.jpg',
      description:
        'For an age, the tower lay in ruins. Unbeknownst to the people of the realm, a great evil stirred in its bowels. It started with strange sightings: a flock of crows flying in circles until they dropped from the sky, the lake frozen solid in the height of summer. In time, they could not deny that which they most feared.'
    },
    {
      name: 'Wingspan',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepage/img/uIjeoKgHMcRtzRSR4MoUYl3nXxs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4458123.jpg',
      description:
        'Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your network of wildlife preserves. Each bird extends a chain of powerful combinations in one of your habitats (actions). '
    },
    {
      name: 'Gloomhaven',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__imagepage/img/pBaOL7vV402nn1I5dHsdSKsFHqA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2437871.jpg',
      description:
        'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process, they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.'
    },
    {
      name: 'Terraforming Mars',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__imagepage/img/FS1RE8Ue6nk1pNbPI3l-OSapQGc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3536616.jpg',
      description:
        'In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.'
    },
    {
      name: 'Arkham Horror: The Card Game',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/RdCWCXPnBGSxoOhk5Hkq_g__imagepage/img/IjAnsFhA0onPRgYnLLsRG3PZHcI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6530423.jpg',
      description:
        'Something evil stirs in Arkham, and only you can stop it. Blurring the traditional lines between role-playing and card game experiences, Arkham Horror: The Card Game is a Living Card Game of Lovecraftian mystery, monsters, and madness!'
    },
    {
      name: 'Everdell',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__imagepage/img/ijYTk6KGtxLRdIvLsGar13ZHs4c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3918905.png',
      description:
        'Within the charming valley of Everdell, beneath the boughs of towering trees, among meandering streams and mossy hollows, a civilization of forest critters is thriving and expanding. From Everfrost to Bellsong, many a year have come and gone, but the time has come for new territories to be settled and new cities established. You will be the leader of a group of critters intent on just such a task. There are buildings to construct, lively characters to meet, events to host—you have a busy year ahead of yourself. Will the sun shine brightest on your city before the winter moon rises?'
    },
    {
      name: 'Azul',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/tz19PfklMdAdjxV9WArraA__imagepage/img/K2rwaCiB7-p41iVG3_BCdUDBo8o=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3718275.jpg',
      description:
        'Introduced by the Moors, azulejos (originally white and blue ceramic tiles) were fully embraced by the Portuguese when their king Manuel I, on a visit to the Alhambra palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The king, awestruck by the interior beauty of the Alhambra, immediately ordered that his own palace in Portugal be decorated with similar wall tiles. As a tile-laying artist, you have been challenged to embellish the walls of the Royal Palace of Evora.'
    },
    {
      name: '7 Wonders',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/RvFVTEpnbb4NM7k0IF8V7A__imagepage/img/zruHYxY2_jx-796WgsDj7hitidQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic860217.jpg',
      description:
        'You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times'
    },
    {
      name: 'Eldritch Horror',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/oxdsZKIX5_3ovDo38EIaeg__imagepage/img/ier4keS2lwgi6bIJKhSDIKVDBmA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1872452.jpg',
      description:
        'Across the globe, ancient evil is stirring. Now, you and your trusted circle of colleagues must travel around the world, working against all odds to hold back the approaching horror. Foul monsters, brutal encounters, and obscure mysteries will take you to your limit and beyond. All the while, you and your fellow investigators must unravel the otherworldy mysteries scattered around the globe in order to push back the gathering mayhem that threatens to overwhelm humanity. The end draws near! Do you have the courage to prevent global destruction?'
    },
    {
      name: 'Candyland',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/97n-BYkjnFiHAhqUz-KTyw__imagepage/img/NnWtYK9qvj8J89RcqLwP5DKy7b8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3542482.jpg',
      description:
        "Created by Eleanor Abbott in the early 1940's to entertain children recovering from polio and first published by Milton Bradley (now Hasbro) in 1949, Candy Land encourages young players to socialize, exercise patience, recognize colors, learn rules, and follow directions."
    },
    {
      name: 'The Game of Life',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/c4S2XDRb_DCYCAV-ZAzDpg__imagepage/img/w6c1ugeBPWsIC5d-nX9vHZ4l0jo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic288405.jpg',
      description:
        'This game attempts to mirror life events many people go through from going to college, raising a family, buying a home, working and retiring.'
    },
    {
      name: 'Mouse Trap',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/124yUSKLBKAfDQfsRFSIhA__imagepage/img/fCz1HRQ6R1_pzbLuhzI4CvwK-Is=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3811222.jpg',
      description:
        "Mouse Trap pits 2-4 players against each other as mice trying to navigate through a complex mousetrap. They build the Rube Goldberg inspired mousetrap as they move their mice across the board. They also try to collect cheese cards, which allow them to move other mice to cheese wheel which is the bait for the trap. Once the mousetrap has been completely constructed, players can attempt to capture each others' mice in it by turning the crank, which activates the mousetrap. If the mousetrap doesn't malfunction, the mouse is captured and out of the game. The winner is the last mouse who avoids being trapped."
    },
    {
      name: 'The Oregon Trail Card Game',
      type: 'tabletop',
      image:
        'https://cf.geekdo-images.com/XWqPHkKsgu8l9FzuvQg_kw__imagepage/img/-FvfQZ6dq2VX0aXs9outY6WCz0A=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3120649.jpg',
      description: 'Based on the classic computer game.'
    },
    {
      name: 'Elden Ring',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2021%2F06%2FER_KEY-ART-scaled-e1623411764381-2048x1052.jpg&f=1&nofb=1',
      description:
        "The Golden Order has been broken. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered. Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering."
    },
    {
      name: 'Stray',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.taminggaming.com%2Fcms%2Fgraphics%2Fscreen_shot_2647.jpg&f=1&nofb=1',
      description:
        'Lost, alone, and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten cybercity and find the way home.'
    },
    {
      name: 'World of Warcraft',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fleviathyn.com%2Fwp-content%2Fuploads%2F2012%2F08%2FWorld-of-Warcraft-Game-Box1.jpg&f=1&nofb=1',
      description:
        'World of Warcraft is a massively multiplayer online role-playing game released in 2004 by Blizzard Entertainment. Set in the Warcraft fantasy universe, World of Warcraft takes place within the world of Azeroth, approximately four years after the events of the previous game in the series, Warcraft III: The Frozen Throne.'
    },
    {
      name: 'Lost Ark',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.vg247.com%2Fcurrent%2F2018%2F11%2Flostark3.jpg&f=1&nofb=1',
      description:
        'Explore seven vast, varied continents and the seas between them to find vibrant cultures, strange and fantastical beasts, and all the unexpected marvels waiting to be discovered. Delve into the secrets of Arkesia, prove your might in battles and raids, compete against other players in PvP, travel to distant islands in search of hidden riches, face packs of enemies and colossal bosses in the open world, and more.'
    },
    {
      name: 'FAR: Changing Tides',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnintendoeverything.com%2Fwp-content%2Fuploads%2Ffar-changing-tides-1-656x376.jpg&f=1&nofb=1',
      description:
        'Set sail and discover the wonders of a flooded world filled with mystery. Traverse the ruins of a once great society and use the pieces from its past to build a brighter future. Dive into unknown depths on the hunt for precious fuel and salvage, devise innovative solutions to overcome intricate obstacles, and unearth forgotten relics lost to time. Carry their memories and don’t give up hope. CAPTAIN YOUR SHIP Experience the thrill of captaining a unique seafaring vessel with a mind of its own. '
    },
    {
      name: 'Pokemon Red and Blue',
      type: 'video game',
      image:
        'https://static.wikia.nocookie.net/nintendo/images/5/59/Pokemon_Red_%28NA%29.png/revision/latest?cb=20120331144754&path-prefix=en',
      description:
        'Pokémon Red Version and Pokémon Blue Version are reprogrammed versions of Pocket Monsters Red, Green, and Blue. They are the first Pokémon games ever released outside of Japan. In the titles, the player longs to become the greatest Pokémon Trainer by capturing and raising species known as Pokémon. In the games there were 151 Pokémon species that could be caught.'
    },
    {
      name: 'Pokemon Gold and Silver',
      type: 'video game',
      image:
        'https://static.wikia.nocookie.net/nintendo/images/0/08/Pokemon_Gold_%28NA%29.jpg/revision/latest/scale-to-width-down/350?cb=20111104144754&path-prefix=en',
      description:
        'Pokémon Gold Version and Pokémon Silver Version are the second installments of the Pokémon series of RPG video games developed by Game Freak and published by Nintendo for the Game Boy Color. The series featured a new region entitled Johto and introduces a century of new Pokémon. '
    },
    {
      name: 'Pokemon Ruby and Sapphire',
      type: 'video game',
      image:
        'https://static.wikia.nocookie.net/nintendo/images/a/aa/Pokemon_Ruby_%28NA%29.jpg/revision/latest/scale-to-width-down/350?cb=20140822024920&path-prefix=en',
      description:
        'Pokémon Ruby and Pokémon Sapphire are part of the third generation of Pokémon games. t was also the first set of Pokémon games to be released on the Game Boy Advance, and it led to large graphical upgrades from the previous games. 135 brand new Pokémon species can be found in Ruby and Sapphire.'
    },
    {
      name: 'Pokemon Diamond and Pearl',
      type: 'video game',
      image:
        'https://static.wikia.nocookie.net/nintendo/images/2/20/Pokemon_Diamond_%28NA%29.jpg/revision/latest/scale-to-width-down/350?cb=20210213015750&path-prefix=en',
      description:
        'The game takes place in Sinnoh, which is based on the island of Hokkaidō in Japan. The new criminals are Team Galactic. The game features an updated day/night system, as well as Pokémon Contests, the Battle Tower, a Pokétch device, and Wi-Fi abilities.'
    },
    {
      name: 'Pokemon Black and White',
      type: 'video game',
      image:
        'https://static.wikia.nocookie.net/nintendo/images/8/8d/Pokemon_Black_%28NA%29.png/revision/latest/scale-to-width-down/350?cb=20120927155809&path-prefix=en',
      description:
        'The games contain very few connections to the previous Pokémon titles, featuring 156 new Pokémon, brand new characters, and new gameplay mechanics. During the duration of the main game, none of the 493 Pokémon from the first four generations appear. Black and White are the first Pokémon games since Pokémon Red and Blue to use a color in the name instead of an element or precious gemstone.'
    },
    {
      name: 'Pokemon X and Y',
      type: 'video game',
      image:
        'https://static.wikia.nocookie.net/nintendo/images/7/75/Pok%C3%A9mon_X_%28NA%29.png/revision/latest/scale-to-width-down/350?cb=20131102210731&path-prefix=en',
      description:
        'Pokémon X and Pokémon Y are both RPG games released for the Nintendo 3DS as the first installment in the sixth generation of the Pokémon series. The games were released worldwide (except for a few countries) on October 12, 2013, making them the first Nintendo-published retail games to have a simultaneous global release in all key regions. It takes place in the Kalos region.'
    },
    {
      name: 'Pokemon Sun and Moon',
      type: 'video game',
      image:
        'https://static.wikia.nocookie.net/nintendo/images/a/a2/Pokemon_Moon_%28NA%29.png/revision/latest/scale-to-width-down/350?cb=20170117055107&path-prefix=en',
      description:
        'Pokémon Sun and Pokémon Moon are the first games of the seventh generation of the Pokémon series, releasing on the Nintendo 3DS. The game takes place in the Alola region. It was announced in a Nintendo Direct on the 20th anniversary of the original Pokémon Red and Green.'
    },
    {
      name: 'Pokemon Sword and Sheild',
      type: 'video game',
      image:
        'https://static.wikia.nocookie.net/nintendo/images/3/3c/Pok%C3%A9mon_Sword_US_boxart.png/revision/latest/scale-to-width-down/309?cb=20190607105234&path-prefix=en',
      description:
        'Pokémon Sword and Pokémon Shield are both role-playing games released on the Nintendo Switch as the first installments of the eighth generation of Pokémon games. The games take place in the Galar region. The major new feature is Dynamax, where players can cause their Pokémon to grow to massive sizes and become more powerful. dynamax Pokemon are bigger in size and there defence increase but there speed decrease due to there size .'
    },
    {
      name: 'Pokemon Legends: Arceus',
      type: 'video game',
      image:
        'https://static.wikia.nocookie.net/nintendo/images/9/9c/Pokemon_Legends_Arceus_cover.jpg/revision/latest/scale-to-width-down/246?cb=20220127004029&path-prefix=en',
      description:
        'Pokémon Legends: Arceus is a game in the Pokémon series, released on January 28, 2022. The game is set in Sinnoh, many years before the events of Pokémon Diamond and Pearl. The game is open-world, with the player capturing and battling different types of Pokémon. In the game, the starters are Rowlet, Cyndaquil, and Oshawott, who were starters in previous games (Sun/Moon, Gold/Silver, and Black/White, respectively). The game was first announced in a Pokémon Presents presentation, along with Pokémon Brilliant Diamond and Shining Pearl.'
    },
    {
      name: 'Pokemon Snap',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn02.nintendo-europe.com%2Fmedia%2Fimages%2F11_square_images%2Fgames_18%2Fnintendo_9%2FSQ_N64_PokemonSnap.jpg&f=1&nofb=1',
      description:
        "In Pokémon Snap, the famous Pokémon Researcher Professor Oak is studying Pokémon on Pokémon Island, and invites Todd Snap, a talented young photographer, to assist in his research. The only current inhabitants of Pokémon Island are wild Pokémon, making it the perfect place to study Pokémon in their natural habitat. Whereas a Trainer may not be able to resist catching the wild Pokémon of the island, Todd's photography skills may equally aid in the Professor's research to complete his Pokémon Report."
    },
    {
      name: 'Kirby the Forgotten Land',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Dn-_PNpo3jIudSypTrg8iwHaDt%26pid%3DApi&f=1',
      description:
        'Take control of the powerful pink puffball, Kirby, and move around freely in 3D stages as you discover a mysterious world with abandoned structures from a past civilization—like a shopping mall?! Copy enemies’ abilities like Sword and Ice and use them to attack and explore your surroundings! What journey awaits Kirby? Take a deep breath and get ready for an unforgettable adventure!'
    },
    {
      name: 'Sonic the Hedgehog',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJqQYDLcvkBc%2Fmaxresdefault.jpg&f=1&nofb=1',
      description:
        "Featuring Sega's new mascot, the titular Sonic the Hedgehog, this game served as the launch title for the famous video game franchise known as the Sonic the Hedgehog series."
    },
    {
      name: 'Road Rash',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1a%2Fc5%2F70%2F1ac57018ce554a6d9f9054bbc65c48d6.jpg&f=1&nofb=1',
      description:
        "Road Rash is a motorcycle-racing video game series by Electronic Arts in which the player participates in violent, illegal street races. The series started on the Sega Genesis and made its way to various other systems over the years. The game's title is based on the slang term for the severe friction burns that can occur in a motorcycle fall where skin comes into contact with the ground at high speed."
    },
    {
      name: 'X-Men 2: Clone Wars',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvgmsite.com%2Fsoundtracks%2Fx-men-2-clone-wars-complete-original-game-soundtrack%2FFront.png&f=1&nofb=1',
      description:
        'This is the second X-Men game from Sega for the Genesis. This time around, an alien force known as the Phalanx is out to control the earth. The X-Men are our only hope to stop this menace. The gameplay of this adventure is similar to side-scrolling action of the previous title. You have more playable characters this time: Beast, Gambit, Nightcrawler, Psylocke, Wolverine, Cyclops and even Magneto.'
    },
    {
      name: 'The Legend of Zelda',
      type: 'video game',
      image:
        'https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png',
      description:
        'Set in the fantasy land of Hyrule, the plot centers on an elf-like boy named Link, who aims to collect the eight fragments of the Triforce of Wisdom in order to rescue Princess Zelda from the antagonist, Ganon.During the course of the game, the player controls Link from a top-down perspective and navigates throughout the overworld and dungeons, collecting weapons, defeating enemies and uncovering secrets along the way.'
    },
    {
      name: 'The Legend of Zelda: A Link to the Past',
      type: 'video game',
      image:
        'https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg',
      description:
        'The story is officially set many years before the events of the first two Zelda games. The player assumes the role of Link as he journeys to save Hyrule, defeat the demon king Ganon, and rescue the descendants of the Seven Sages. It returns to a top-down perspective similar to the original The Legend of Zelda, dropping the side-scrolling gameplay of Zelda II: The Adventure of Link. It introduced series staples such as parallel worlds and items including the Master Sword.'
    },
    {
      name: 'The Legend of Zelda: Ocarina of Time',
      type: 'video game',
      image:
        'https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg',
      description:
        'The Legend of Zelda: Ocarina of Time is an action-adventure game developed and published by Nintendo for the Nintendo 64. It was released in Japan and North America in November 1998, and in PAL regions the following month. Ocarina of Time is the fifth game in The Legend of Zelda series, and the first with 3D graphics.'
    },
    {
      name: "The Legend of Zelda: Majora's Mask",
      type: 'video game',
      image:
        'https://upload.wikimedia.org/wikipedia/en/6/60/The_Legend_of_Zelda_-_Majora%27s_Mask_Box_Art.jpg',
      description:
        "The story of Majora's Mask takes place two months after the events of Ocarina of Time. It follows Link, who on a personal quest ends up in Termina, a world parallel to Hyrule. Upon reaching Termina, Link learns that the world is endangered as the moon will fall into the world in three days."
    },
    {
      name: 'The Legend of Zelda: Twilight Princess',
      type: 'video game',
      image:
        'https://upload.wikimedia.org/wikipedia/en/0/0e/The_Legend_of_Zelda_Twilight_Princess_Game_Cover.jpg',
      description:
        "The story focuses on series protagonist Link, who tries to prevent Hyrule from being engulfed by a corrupted parallel dimension known as the Twilight Realm. To do so, he takes the form of both a Hylian and a wolf, and he is assisted by a mysterious creature named Midna. The game takes place hundreds of years after Ocarina of Time and between Majora's Mask and Four Swords Adventures, in an alternate timeline from The Wind Waker."
    },
    {
      name: 'The Legend of Zelda: Skyward Sword',
      type: 'video game',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Legend_of_Zelda_Skyward_Sword_boxart.png/220px-Legend_of_Zelda_Skyward_Sword_boxart.png',
      description:
        'Taking the role of series protagonist Link, players navigate the floating island of Skyloft and the land below it, completing quests that advance the story and solving environmental and dungeon-based puzzles. The mechanics and combat, the latter focusing on attacking and blocking with sword and shield, are reliant on the Wii MotionPlus peripheral. The sixteenth mainline entry in The Legend of Zelda series, Skyward Sword is the first game in the Zelda timeline detailing the origins of the Master Sword, a recurring weapon within the series. Link, resident of a floating town called Skyloft, heads on a quest to rescue his childhood friend Zelda after she is kidnapped and brought to the Surface, an abandoned land below the clouds.'
    },
    {
      name: 'The Legend of Zelda: Breath of the Wild',
      type: 'video game',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/220px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
      description:
        'The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Breath of the Wild is an installment of The Legend of Zelda franchise and is set at the end of the Zelda timeline. The player controls Link, who awakens from a hundred-year slumber to defeat Calamity Ganon and restore the kingdom of Hyrule.'
    },
    {
      name: 'Journey',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PsMkkDpS7W4lTdImDqQdYAHaEK%26pid%3DApi&f=1',
      description:
        'ourney is an indie adventure game co-developed by Thatgamecompany and Santa Monica Studio, published by Sony Computer Entertainment, and directed by Jenova Chen. It was released for the PlayStation 3 via PlayStation Network in March 2012 and ported to PlayStation 4 in July 2015.'
    },
    {
      name: 'Stardew Valley',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fksassets.timeincuk.net%2Fwp%2Fuploads%2Fsites%2F54%2F2018%2F03%2Fstardew-valley.jpg&f=1&nofb=1',
      description:
        "You're moving to the Valley... You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life!"
    },
    {
      name: "No Man's Sky",
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FJWHlaIg92J_v-6Yt0SNsccuP7Yo%3D%2F0x0%3A8430x2964%2F1200x800%2Ffilters%3Afocal(3541x808%3A4889x2156)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F59775623%2FCoverWide.0.jpg&f=1&nofb=1',
      description:
        "No Man's Sky is a space action-adventure survival game developed by Hello Games. The overall visual style of the game is inspired by various science fiction books. Demoscene also served as a source of inspiration for the developers. The main feature that the game revolves around is the procedural generation. Each planet you visit is generated from scratch."
    },
    {
      name: 'Astroneer',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.54149.13510798887933723.57e43f19-4066-429e-b1a2-caea56e427b4.dcf4a36f-b6bf-4cbd-809f-f4dfd75f32b9%3Fmode%3Dscale%26q%3D90%26h%3D1080%26w%3D1920&f=1&nofb=1',
      description:
        'Astroneer is a sandbox adventure game developed by System Era Softworks. The game was released through early access in December 2016 before a full release in 2019. The player is tasked with colonizing planets, creating structures, and collecting resources. '
    },
    {
      name: 'Minecraft',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages10.newegg.com%2FBizIntell%2Fitem%2F78%2F190%2F78-190-756%2F22.jpg&f=1&nofb=1',
      description:
        'Minecraft is a sandbox video game developed by Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language. Following several early private testing versions, it was first made public in May 2009 before fully releasing in November 2011, with Notch stepping down and Jens "Jeb" Bergensten taking over development.'
    },
    {
      name: 'The Witcher 3',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpcinvasion.com%2Fwp-content%2Fuploads%2F2014%2F09%2FThe-Witcher-3-01.jpg&f=1&nofb=1',
      description:
        'The Witcher 3: Wild Hunt is an action role-playing game developed by Polish developer CD Projekt Red, and first published in 2015. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third and final main game in The Witcher video game series, played in an open world with a third-person perspective.'
    },
    {
      name: 'Dragon Age: Origins',
      type: 'video game',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Dragon_Age_Origins_cover.png/220px-Dragon_Age_Origins_cover.png',
      description:
        'Set in the kingdom of Ferelden during a period of civil unrest, the game puts the player in the role of a warrior, mage, or rogue coming from an elven, human, or dwarven background. The player character is recruited into the Grey Wardens, an ancient order that stands against monsters known as the Darkspawn, and is tasked with defeating the Archdemon that commands them and ending their invasion. '
    },
    {
      name: 'Dragon Age II',
      type: 'video game',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Dragon_Age_2_cover.jpg/220px-Dragon_Age_2_cover.jpg',
      description:
        "It is the second major game in the Dragon Age series and the successor to Dragon Age: Origins (2009). Set in the world of Thedas, players assume the role of Hawke, a human mage, rogue, or warrior who arrives in the city of Kirkwall as a lowly refugee, and becomes its legendary champion over a turbulent decade of political and social conflict. In the game, players explore and engage in combat from a third-person perspective. Players encounter various companions, who play major roles in the game's plot and gameplay. Depending on players' decisions and dialogue, a companion will either recognize Hawke as a friend or a rival."
    },
    {
      name: 'Bayonetta',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.videogameschronicle.com%2Ffiles%2F2019%2F12%2Fbayonetta-z.jpg&f=1&nofb=1',
      description:
        'Bayonetta is a slasher game developed by Platinum Games. The game is set in a fictional European city of Vigrid. The main character is a witch named Bayonetta who fights angels with pistols and magic wishing only one thing: to recall everything happened to her.'
    },
    {
      name: 'Borderlands',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.CJqtMkM5jpeoRJK6uej--wHaEk%26pid%3DApi&f=1',
      description:
        'Pandora is a dangerous planet, so it makes sense that the strongest people will dominate it. 4 Vault Hunters arrive to find the legendary Vault found themselves at the Fyrestone, where mysterious girl only known as Angel guides them, helping to build the reputation of problem solvers.'
    },
    {
      name: 'Rimworld',
      type: 'video',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F866pKJDoHj4%2Fmaxresdefault.jpg&f=1&nofb=1',
      description:
        'RimWorld follows three survivors from a crashed space liner as they build a colony on a frontier world at the rim of known space. Inspired by the space western vibe of Firefly, the deep simulation of Dwarf Fortress, and the epic scale of Dune and Warhammer 40,000.'
    },
    {
      name: 'Animal Crossing',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Focremix.org%2Ffiles%2Fimages%2Fgames%2Fgcn%2F1%2Fanimal-crossing-gcn-cover-front-46203.jpg&f=1&nofb=1',
      description:
        "Animal Crossing is a social simulation video game series developed and published by Nintendo. In Animal Crossing, the player character is a human who lives in a village inhabited by various anthropomorphic animals and can do various activities like fishing, bug catching, and fossil hunting. The series is notable for its open-ended gameplay and use of the video game console's internal clock and calendar to simulate real passage of time."
    },
    {
      name: 'Animal Crossing: Wild World',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwiimedia.ign.com%2Fwii%2Fimage%2Fobject%2F682%2F682878%2FWildWorldFinalBox.jpeg&f=1&nofb=1',
      description:
        "Wild World focuses on living in a remote village populated with anthropomorphic animals, where the player character is encouraged to perform any number of tasks, such as collecting and planting. Like all Animal Crossing titles, the game is synced to the console's clock and calendar, allowing the game to be played in real-time, which affects the occurrence of in-game events based on the current time of day or season. "
    },
    {
      name: 'Animal Crossing: New Leaf',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1171668%2Fimages%2Fo-ANIMAL-CROSSING-facebook.jpg&f=1&nofb=1',
      description:
        "While retaining gameplay from older titles, Animal Crossing: New Leaf marks a change in the series, as the player now becomes the mayor of the town. With the help of the townsfolk and a secretary it is now the player's job to make the town a better place to live."
    },
    {
      name: 'Animal Crossing: New Horizons',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.windowsreport.com%2Fwp-content%2Fuploads%2F2020%2F05%2FAnimal-Crossing-New-Horizons.jpeg&f=1&nofb=1',
      description:
        ' In New Horizons, the player controls a character who moves to a deserted island after purchasing a getaway package from Tom Nook, playing the game in a nonlinear fashion and developing the island as they choose. They can gather and craft items, customize the island, and develop it into a community of anthropomorphic animals.'
    },
    {
      name: 'Age of Empires IV',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamingdebates.com%2Fwp-content%2Fuploads%2F2020%2F02%2Fage-of-empires-iv-age-of-empires-IV-1-1000x574.png&f=1&nofb=1',
      description:
        'Return to History. The past is prologue as you are immersed in a rich historical setting of 8 diverse civilizations across the world from the English to the Chinese to the Delhi Sultanate in your quest for victory. Build cities, manage resources, and lead your troops to battle on land and at sea in 4 distinct campaigns with 35 missions that span across 500 years of history from the Dark Ages up to the Renaissance.'
    },
    {
      name: 'The Forest',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-zjiOgtBL61g%2FWINzgjmSFOI%2FAAAAAAAAANY%2FSkFn2Znq6o8hmJs_KaViDTjG0XmmoCeTACLcB%2Fs1600%2FThe-Forest-Effigy.jpg&f=1&nofb=1',
      description:
        'As the lone survivor of a passenger jet crash, you find yourself in a mysterious forest battling to stay alive against a society of cannibalistic mutants.'
    },
    {
      name: 'Phasmophobia',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.unocero.com%2F2020%2F10%2Fphasmophobia-que-es-1-1-1200x600.jpg&f=1&nofb=1',
      description:
        'Phasmophobia is a 4 player online co-op psychological horror where you and your team members of paranormal investigators will enter haunted locations filled with paranormal activity and gather as much evidence of the paranormal as you can. You will use your ghost hunting equipment to search for and record evidence of whatever ghost is haunting the location to sell onto a ghost removal team.'
    },
    {
      name: 'Dead by Daylight',
      type: 'video game',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/381210/extras/infograph_steam_new.png?t=1647543411',
      description:
        'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught, tortured and killed.'
    },
    {
      name: 'Cyberpunk 2077',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1lss44hh2trtw.cloudfront.net%2Fassets%2Feditorial%2F2020%2F10%2Fcyberpunk-2077-devs-defend-cutting-content-from-game.jpg&f=1&nofb=1',
      description:
        'Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe.'
    },
    {
      name: 'Valheim',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2021%2F02%2Fvalheim_longhouseHD-scaled.jpg&f=1&nofb=1',
      description:
        'The valkyries have ferried your soul to the tenth norse world as a custodian, where you must adventure to the ends of the realm, from the deepest forest to the highest mountain peak, slaying beasts of myth and legend feared by Odin himself. You will craft powerful weapons, build unyielding castles and sail longships towards the horizon to prove yourself to the Allfather, and certainly die trying!'
    },
    {
      name: 'Young Souls',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.rpgsite.net%2Fimages%2Fimages%2F000%2F068%2F979%2Foriginal%2FYoung-Souls_Aug082018_04.png&f=1&nofb=1',
      description:
        'Jenn and Tristan are two teenagers who find themselves suddenly abandoned and without a family until a good-hearted scientist adopts and brings them into his home settled within a small port town. Life in Portsbourgh for Jenn and Tristan proves uneventful. Uneventful, that is, until they uncover a portal to another world which threatens the very existence of life on Earth as we know it.'
    },
    {
      name: 'The Sims 4',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2021%2F02%2Fthe-sims-4-header.jpg&f=1&nofb=1',
      description:
        'The Sims is a series of life simulation video games developed by Maxis and published by Electronic Arts. The franchise has sold nearly 200 million copies worldwide, and it is one of the best-selling video game series of all time. The games in the Sims series are largely sandbox games, in that they lack any defined goals.'
    },
    {
      name: 'Zoo Tycoon',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F4Zb4tU3eHUzyUdbYNtWGhj1XWrE%3D%2F0x0%3A1491x945%2F1200x0%2Ffilters%3Afocal(0x0%3A1491x945)%3Ano_upscale()%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F19348725%2F1c4e45c7eef5c02e8604363fcf97c62a.jpg&f=1&nofb=1',
      description:
        'Zoo Tycoon is a series of business simulation video games. The worlds focus around building and running successful zoo scenarios.'
    },
    {
      name: 'Roller Coaster Tycoon',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mmoga.com%2Fimages%2Fscreenshots%2F_p%2F1061986%2F0da3e1aa115682fb7ed5a64f8caa6aed_rollercoaster-tycoon-deluxe.jpg&f=1&nofb=1',
      description:
        'RollerCoaster Tycoon is a series of simulation video games about building and managing an amusement park. Each game in the series challenges players with open-ended amusement park management and development, and allowing players to construct and customize their own unique roller coasters and other thrill rides.'
    },
    {
      name: 'Detective Barbie: The Mystery of the Carnival Caper!',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mobygames.com%2Fimages%2Fcovers%2Fl%2F218100-detective-barbie-the-mystery-of-the-carnival-caper-windows-front-cover.jpg&f=1&nofb=1',
      description:
        "Detective Barbie: The Mystery Of The Carnival Caper! is a point and click adventure aimed at girls aged five and up. The story is centred on a charity carnival. Ken went to the carnival and everyone said it would be a good idea if he volunteered for the magicians vanishing trick. Well the trick worked but the magician could not bring Ken back. What's more Ken had all the carnival money with him!"
    },
    {
      name: 'Lego Island',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamefabrique.com%2Fstorage%2Fscreenshots%2Fpc%2Flego-island-03.png&f=1&nofb=1',
      description:
        'Lego Island is a Lego-themed action-adventure game developed and published by Mindscape. It was released for Microsoft Windows on September 26, 1997, as the first Lego video game outside Japan.'
    },
    {
      name: 'Spyro the Dragon',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2F6uyrJruxNgiG1Xz9ZF4ekMT5mEl7I4Nu_Hg4dv9J6R0.jpg%3Fauto%3Dwebp%26s%3De188f16e9cebf1f8ac05fe86a4f2a211c0d68bde&f=1&nofb=1',
      description:
        "Spyro the Dragon, or simply Spyro, is the title character and main protagonist of the Spyro series. He appears in Spyro the Dragon, Spyro 2: Ripto's Rage!, ', The Legend of Spyro, and later became a part of the Skylanders series."
    },
    {
      name: 'Crash Bandicoot',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.unilad.co.uk%2Fwp-content%2Fuploads%2F2020%2F02%2FCrash-Bandicoot-3.jpg&f=1&nofb=1',
      description:
        "The game's premise chronicles the creation of the titular Crash, a bandicoot who has been uplifted by the mad scientist Doctor Neo Cortex. The story follows Crash as he aims to prevent Cortex's plans for world domination and rescue his girlfriend Tawna, a female bandicoot also created by Cortex. The game is played from a third-person perspective in which the camera trails behind Crash, though some levels showcase forward-scrolling and side-scrolling perspectives."
    },
    {
      name: 'Phoenix Wright: Ace Attorney',
      type: 'video game',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F7888%2F47490778442_5834f7c298_o.jpg&f=1&nofb=1',
      description:
        "Phoenix Wright: Ace Attorney is a visual novel adventure video game developed by Capcom. It was originally released for the Game Boy Advance in 2001 in Japan, and has since been ported to multiple platforms. The story follows Phoenix Wright, a rookie defense attorney who attempts to get his clients declared 'not guilty'. Among other characters are Phoenix's boss, Mia Fey; his assistant and Mia's sister, Maya; and prosecutor Miles Edgeworth. The player controls Phoenix through two types of sections: investigations and courtroom trials."
    }
  ]

  await Game.insertMany(games)
  console.log('Created Games!')
}

const run = async () => {
  await main()
  db.close()
}

run()
