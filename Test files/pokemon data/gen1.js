const types = ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighter", "Poison", 
"Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost","Dragon", "Dark", "Steel"];

//

/*
Needed updates:
	Update types object array with fairy-type and all 
	other types with fairy attributes. - OK
	
	Patch these pokémon to apply the new types update:
	Bulbasaur
	Ivysaur
	Venusaur
	Charmander
	Charmeleon
	Charizard
	Squirtle
	Wartortle
	Blastoise
	Caterpie
	Metapod
	Butterfree
	Weedle
	
	
	
	Clefairy is Normal-type, update to fairy-type. - OK
	
	Clefable is Normal-type, update to fairy-type. - OK
	
	Jigglypuff is Normal-type, update to normal/fairy-type. - OK
	
	Wigglytuff is Normal-type, update to normal/fairy-type. - OK
*/


const gen1 = [

    {
        "nameid": "missingno",
        "generation": 1 ,
        "number": 0,
        "name": "MissingNo",
        "species": "Seed Pokémon",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        
        {
        "nameid": "bulbasaur",
        "generation": 1 ,
        "number": 1,
        "name": "Bulbasaur",
        "species": "Seed Pokémon",
        "type": ["Grass", "Poison"],
        "ability": ["Overgrow", "Chlorophyl"],
        "height": 0.7,
        "weight": 6.9,
        "description": "(Red/Blue) A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON."
        },
        {
        "nameid": "ivysaur",
        "generation": 1 ,
        "number": 2,
        "name": "Ivysaur",
        "species": "Seed Pokémon",
        "type": ["Grass", "Poison"],
        "ability": ["Overgrow", "Chlorophyl"],
        "height": 1.0,
        "weight": 13.0,
        "description": "(Red/Blue) A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON."
        },
        {
        "nameid": "venusaur",
        "generation": 1 ,
        "number": 3,
        "name": "Venusaur",
        "species": "Seed Pokémon",
        "type": ["Grass", "Poison"],
        "ability": ["Overgrow", "Chlorophyl"],
        "height": 2.0,
        "weight": 100.0,
        "description": "(Red/Blue) The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
        },
		
        {
        "nameid": "charmander",
        "generation": 1 ,
        "number": 4,
        "name": "Charmander",
        "species": "Lizard Pokémon",
        "type": ["Fire"],
        "ability": ["Blaze", "Solar Power"],
        "height": 0.6,
        "weight": 8.5,
        "description": "(Red/Blue) Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail."
        },
		
        {
        "nameid": "charmeleon",
        "generation": 1 ,
        "number": 5,
        "name": "Charmeleon",
        "species": "Flame Pokémon",
        "type": ["Fire"],
        "ability": ["Blaze", "Solar Power"],
        "height": 1.1,
        "weight": 19.0,
        "description": "(Red/Blue) When it swings its burning tail, it elevates the temperature to unbearably high levels."
        },
		
        {
        "nameid": "charizard",
        "generation": 1 ,
        "number": 6,
        "name": "Charizard",
        "species": "Flame Pokémon",
        "type": ["Fire"],
        "ability": ["Blaze", "Solar Power"],
        "height": 1.7,
        "weight": 90.5,
        "description": "(Red/Blue) Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."
        },
		
        {
        "nameid": "squirtle",
        "generation": 1 ,
        "number": 7,
        "name": "Squirtle",
        "species": "Tiny Turtle Pokémon",
        "type": ["Water"],
        "ability": ["Torrent", "Rain Dish"],
        "height": 0.5,
        "weight": 9.0,
        "description": "(Red/Blue) After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth."
        },
		
        {
        "nameid": "wartortle",
        "generation": 1 ,
        "number": 8,
        "name": "Wartortle",
        "species": "Turtle Pokémon",
        "type": ["Water"],
        "ability": ["Torrent", "Rain Dash"],
        "height": 1.0,
        "weight": 22.5,
        "description": "(Red/Blue) Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance."
        },
		
        {
        "nameid": "blastoise",
        "generation": 1 ,
        "number": 9,
        "name": "Blastoise",
        "species": "Shellfish Pokémon",
        "type": ["Water"],
        "ability": ["Torrent", "Rain Dash"],
        "height": 1.6,
        "weight": 85.5,
        "description": "(Red/Blue) A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles."
        },
		
        {
        "nameid": "caterpie",
        "generation": 1 ,
        "number": 10,
        "name": "Caterpie",
        "species": "Worm Pokémon",
        "type": ["Bug"],
        "ability": ["Shield Dust", "Run Away"],
        "height": 0.3,
        "weight": 2.9,
        "description": "(Red/Blue) Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
        },
		
        {
        "nameid": "metapod",
        "generation": 1 ,
        "number": 11,
        "name": "Metapod",
        "species": "Cocoon Pokémon",
        "type": ["Bug"],
        "ability": ["Shed Skin"],
        "height": 0.7,
        "weight": 9.9,
        "description": "(Red/Blue) This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body."
        },
		
        {
        "nameid": "butterfree",
        "generation": 1 ,
        "number": 12,
        "name": "Butterfree",
        "species": "Butterfly Pokémon",
        "type": ["Bug", "Flying"],
        "ability": ["Compound Eyes", "Tinted Lens"],
        "height": 1.1,
        "weight": 32.0,
        "description": "(Red/Blue) In battle, it flaps its wings at high speed to release highly toxic dust into the air."
        },
		
        {
        "nameid": "weedle",
        "generation": 1 ,
        "number": 13,
        "name": "Weedle",
        "species": "Hairy Bug Pokémon",
        "type": ["Bug", "Poison"],
        "ability": ["Shield Dust", "Run Away"],
        "height": 0.3,
        "weight": 3.2,
        "description": "(Red/Blue) Often found in forests, eating leaves. It has a sharp venomous stinger on its head."
        },
		
        {
        "nameid": "kakuna",
        "generation": 1 ,
        "number": 14,
        "name": "Kakuna",
        "species": "Cocoon Pokémon",
        "type": ["Bug", "Poison"],
        "ability": ["Shed Skin"],
        "height": 0.6,
        "weight": 10.0,
        "description": "(Red/Blue) Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators."
        },
		
        {
        "nameid": "beedrill",
        "generation": 1 ,
        "number": 15,
        "name": "Beedrill",
        "species": "Poison Bee Pokémon",
        "type": ["Bug", "Poison"],
        "ability": ["Swarm", "Sniper"],
        "height": 1.0,
        "weight": 29.5,
        "description": "(Red/Blue) Flies at high speed and attacks using its large venomous stingers on its forelegs and tail."
        },
		
        {
        "nameid": "pidgey",
        "generation": 1 ,
        "number": 16,
        "name": "Pidgey",
        "species": "Tiny Bird Pokémon",
        "type": ["Normal", "Flying"],
        "ability": ["Keen Eye", "Tangled Feet"],
        "height": 0.3,
        "weight": 1.8,
        "description": "(Red/Blue) A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand."
        },
		
        {
        "nameid": "pidgeotto",
        "generation": 1 ,
        "number": 17,
        "name": "Pidgeotto",
        "species": "Bird Pokémon",
        "type": ["Normal", "Flying"],
        "ability": ["Keen Eye", "Tangled Feet", "Big Pecks"],
        "height": 1.1,
        "weight": 30.0,
        "description": "(Red/Blue) Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder."
        },
		
        {
        "nameid": "pidgeot",
        "generation": 1 ,
        "number": 18,
        "name": "Pidgeot",
        "species": "Bird Pokémon",
        "type": ["Normal", "Flying"],
        "ability": ["Keen Eye", "Tangled Feet", "Big Pecks"],
        "height": 1.5,
        "weight": 39.5,
        "description": "(Red/Blue) When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP."
        },
		
        {
        "nameid": "rattata",
        "generation": 1 ,
        "number": 19,
        "name": "Rattata",
        "species": "Mouse Pokémon",
        "type": ["Normal"],
        "ability": ["Run Away", "Guts", "Hustle"],
        "height": 0.3,
        "weight": 3.5,
        "description": "(Red/Blue) Bites anything when it attacks. Small and very quick, it is a common sight in many places."
        },
		
        {
        "nameid": "raticate",
        "generation": 1 ,
        "number": 20,
        "name": "Raticate",
        "species": "Mouse Pokémon",
        "type": ["Normal"],
        "ability": ["Run Away", "Guts", "Hustle"],
        "height": 0.7,
        "weight": 18.5,
        "description": "(Red/Blue) It uses its whiskers to maintain its balance. It apparently slows down if they are cut off."
        },
		
        {
        "nameid": "spearow",
        "generation": 1 ,
        "number": 21,
        "name": "Spearow",
        "species": "Tiny Bird Pokémon",
        "type": ["Normal", "Flying"],
        "ability": ["Keen Eye", "Sniper"],
        "height": 0.3,
        "weight": 2.0,
        "description": "(Red/Blue) Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne."
        },
		
        {
        "nameid": "fearow",
        "generation": 1 ,
        "number": 22,
        "name": "Fearow",
        "species": "Beak Pokémon",
        "type": ["Normal", "Flying"],
        "ability": ["Keen Eye", "Sniper"],
        "height": 1.2,
        "weight": 38.0,
        "description": "(Red/Blue) With its huge and magnificent wings, it can keep aloft without ever having to land for rest."
        },
		
        {
        "nameid": "ekans",
        "generation": 1 ,
        "number": 23,
        "name": "Ekans",
        "species": "Snake Pokémon",
        "type": ["Poison"],
        "ability": ["Intimidate", "Shed Skin"],
        "height": 2.0,
        "weight": 6.9,
        "description": "(Red/Blue) Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole."
        },
		
        {
        "nameid": "arbok",
        "generation": 1 ,
        "number": 24,
        "name": "Arbok",
        "species": "Cobra Pokémon",
        "type": ["Poison"],
        "ability": ["Intimidate", "Shed Skin", "Unnerve"],
        "height": 3.5,
        "weight": 65.0,
        "description": "(Red/Blue) It is rumored that the ferocious warning markings on its belly differ from area to area."
        },
		
        {
        "nameid": "pikachu",
        "generation": 1 ,
        "number": 25,
        "name": "Pikachu",
        "species": "Mouse Pokémon",
        "type": ["Electric"],
        "ability": ["Static","Lightning Rod"],
        "height": 0.4,
        "weight": 6.0,
        "description": "(Red/Blue) When several of these POKéMON gather, their electricity could build and cause lightning storms."
        },
		
        {
        "nameid": "raichu",
        "generation": 1 ,
        "number": 26,
        "name": "Raichu",
        "species": "Mouse Pokémon",
        "type": ["Electric"],
        "ability": ["Static","Lightning Rod"],
        "height": 0.8,
        "weight": 30.0,
        "description": "(Red/Blue) Its long tail serves as a ground to protect itself from its own high voltage power."
        },
		
        {
        "nameid": "sandshrew",
        "generation": 1 ,
        "number": 27,
        "name": "Sandshrew",
        "species": "Mouse Pokémon´",
        "type": ["Ground"],
        "ability": ["Sand Veil", "Sand Rush"],
        "height": 0.6,
        "weight": 12.0,
        "description": "(Red/Blue) Burrows deep underground in arid locations far from water. It only emerges to hunt for food."
        },
		
        {
        "nameid": "sandslash",
        "generation": 1 ,
        "number": 28,
        "name": "Sandslash",
        "species": "Mouse Pokémon´",
        "type": ["Ground"],
        "ability": ["Sand Veil", "Sand Rush"],
        "height": 1.0,
        "weight": 29.5,
        "description": "(Red/Blue) Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape."
        },
		
        {
        "nameid": "nidoran-f",
        "generation": 1 ,
        "number": 29,
        "name": "Nidoran (female)",
        "species": "Poison Pin Pokémon",
        "type": ["Poison"],
        "ability": ["Poison Point", "Rivalry"],
        "height": 0.4,
        "weight": 7.0,
        "description": "(Red/Blue) Although small, its venomous barbs render this POKéMON dangerous. The female has smaller horns."
        },
		
        {
        "nameid": "nidorina",
        "generation": 1 ,
        "number": 30,
        "name": "Nidorina",
        "species": "Poison Pin Pokémon",
        "type": ["Poison"],
        "ability": ["Poison Point", "Rivalry", "Hustle"],
        "height": 0.8,
        "weight": 20.0,
        "description": "(Red/Blue) The female’s horn develops slowly. Prefers physical attacks such as clawing and biting."
        },
		
        {
        "nameid": "nidoqueen",
        "generation": 1 ,
        "number": 31,
        "name": "Nidoqueen",
        "species": "Drill Pokémon",
        "type": ["Poison", "Ground"],
        "ability": ["Poison Point", "Rivalry", "Sheer Force"],
        "height": 1.3,
        "weight": 60.0,
        "description": "(Red/Blue) Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves."
        },
		
        {
        "nameid": "nidoran-m",
        "generation": 1 ,
        "number": 32,
        "name": "Nidoran (male)",
        "species": "Poison Pin Pokémon"
        "type": ["Poison"]
        "ability": ["Poison Point", "Rivalry", "Hustle"],
        "height": 0.5,
        "weight": 9.0,
        "description": "(Red/Blue) Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom."
        },
		
        {
        "nameid": "nidorino",
        "generation": 1 ,
        "number": 33,
        "name": "Nidorino",
        "species": "Poison Pin Pokémon"
        "type": ["Poison"]
        "ability": ["Poison Point", "Rivalry", "Hustle"],
        "height": 0.9,
        "weight": 19.5,
        "description": "(Red/Blue) An aggressive POKéMON that is quick to attack. The horn on its head secretes a powerful venom."
        },
		
        {
        "nameid": "nidoking",
        "generation": 1 ,
        "number": 34,
        "name": "Nidoking",
        "name": "Nidoqueen",
        "species": "Drill Pokémon",
        "type": ["Poison", "Ground"],
        "ability": ["Poison Point", "Rivalry", "Sheer Force"],
        "height": 1.4,
        "weight": 62.0,
        "description": "(Red/Blue) It uses its powerful tail in battle to smash, constrict, then break the prey’s bones."
        },
		
        {
        "nameid": "clefairy",
        "generation": 1 ,
        "number": 35,
        "name": "Clefairy",
        "species": "Fairy Pokémon",
        "type": ["Fairy"],//#update 
        "ability": ["Cute Charm", "Magic Guard", "Friend Guard"],
        "height": 0.6,
        "weight": 7.5,
        "description": "(Red/Blue) Its magical and cute appeal has many admirers. It is rare and found only in certain areas."
        },
		
        {
        "nameid": "clefable",
        "generation": 1 ,
        "number": 36,
        "name": "Clefable",
        "species": "Fairy Pokémon",
        "type": ["Fairy"],//#update 
        "ability": ["Cute Charm", "Magic Guard", "Unaware"],
        "height": 1.3,
        "weight": 40.0,
        "description": "(Red/Blue) A timid fairy POKéMON that is rarely seen. It will run and hide the moment it senses people."
        },
		
        {
        "nameid": "vulpix",
        "generation": 1 ,
        "number": 37,
        "name": "Vulpix",
        "species": "Fox Pokémon",
        "type": ["Fire"],
        "ability": ["Flash Fire", "Drought"],
        "height": 0.6,
        "weight": 9.9,
        "description": "(Red/Blue) At the time of birth, it has just one tail. The tail splits from its tip as it grows older."
        },
		
        {
        "nameid": "ninetales",
        "generation": 1 ,
        "number": 38,
        "name": "Ninetales",
        "species": "Fox Pokémon",
        "type": ["Fire"],
        "ability": ["Flash Fire", "Drought"],
        "height": 1.1
        "weight": 19.9,
        "description": "(Red/Blue) Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse."
        },
		
        {
        "nameid": "jigglypuff",
        "generation": 1 ,
        "number": 39,
        "name": "Jigglypuff",
        "species": "Balloon Pokémon",
        "type": ["Normal", "Fairy"], 
        "ability": ["Cute Charm", "Competitive", "Friend Guard"],
        "height": 0.5,
        "weight": 5.5,
        "description": "(Red/Blue) When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep."
        },
		
        {
        "nameid": "wigglytuff",
        "generation": 1 ,
        "number": 40,
        "name": "Wigglytuff",
        "species": "Balloon Pokémon",
        "type": ["Normal", "Fairy"], 
        "ability": ["Cute Charm", "Competitive", "Frisk"],
        "height": 1.0,
        "weight": 12;0,
        "description": "(Red/Blue) The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size."
        },
		
        {
        "nameid": "zubat",
        "generation": 1 ,
        "number": 41,
        "name": "Zubat",
        "species": "Bat Pokémon",
        "type": ["Poison", "Flying"],
        "ability": ["Inner Focus", "Infiltrator"],
        "height": 0.8,
        "weight": 7.5,
        "description": "(Red/Blue) Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets. "
        },
		
        {
        "nameid": "golbat",
        "generation": 1 ,
        "number": 42,
        "name": "Golbat",
        "species": "Bat Pokémon",
        "type": ["Poison", "Flying"],
        "ability": ["Inner Focus", "Infiltrator"],
        "height": 1.6,
        "weight": 55.0,
        "description": "(Red/Blue) Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly."
        },
		
        {
        "nameid": "oddish",
        "generation": 1 ,
        "number": 43,
        "name": "Oddish",
        "species": "Weed Pokémon",
        "type": ["Grass", "Poison"],
        "ability": ["Chlorophyl", "Run Away"],
        "height": 0.5,
        "weight": 5.4,
         "description": "(Red/Blue) During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds."
        },
		
        {
        "nameid": "gloom",
        "generation": 1 ,
        "number": 44,
        "name": "Gloom",
        "species": "Weed Pokémon",
        "type": ["Grass", "Poison"],
        "ability": ["Chlorophyl", "Run Away"],
        "height": 0.8,
        "weight": 8.6,
        "description": "(Red/Blue) The fluid that oozes from its mouth isn’t drool. It is a nectar that is used to attract prey."
        },
		
        {
        "nameid": "vileplume",
        "generation": 1 ,
        "number": 45,
        "name": "Vileplume",
         "species": "Flower Pokémon",
        "type": ["Grass", "Poison"],
        "ability": ["Chlorophyl", "Effect Spore"],
        "height": 1.2,
        "weight": 18.6,
        "description": "(Red/Blue) The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up."
        },
		
        {
        "nameid": "paras",
        "generation": 1 ,
        "number": 46,
        "name": "Paras",
        "species": "Mushroom Pokémon",
        "type": ["Bug", "Grass"],
        "ability": ["Effect Spore", "Dry Skin", "Damp"],
        "height": 0.3,
        "weight": 5.4,
        "description": "(Red/Blue) Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host."
        },
		
        {
        "nameid": "parasect",
        "generation": 1 ,
        "number": 47,
        "name": "Parasect",
        "species": "Mushroom Pokémon",
        "type": ["Bug", "Grass"],
        "ability": ["Effect Spore", "Dry Skin", "Damp"],
        "height": 1.0,
        "weight": 29.5,
        "description": "(Red/Blue) A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places."
        },
		
        {
        "nameid": "venonat",
        "generation": 1 ,
        "number": 48,
        "name": "Venonat",
        "species": "Insect Pokémon",
        "type": ["Bug", "Poison"],
        "ability": ["Compound Eyes", "Tinted Lens", "Run Away"],
        "height": 1.0,
        "weight": 30.0,
        "description": "(Red/Blue) Lives in the shadows of tall trees where it eats insects. It is attracted by light at night."
        },
		
        {
        "nameid": "venomoth",
        "generation": 1 ,
        "number": 49,
        "name": "Venomoth",
        "species": "Poison Moth Pokémon",
        "type": ["Bug", "Poison"],
        "ability": ["Shield Dust", "Tinted Lens", "Wonder Skin"],
        "height": 1.5,
        "weight": 12.5,
        "description": "(Red/Blue) The dust-like scales covering its wings are color coded to indicate the kinds of poison it has."
        },
		
        {
        "nameid": "diglett",
        "generation": 1 ,
        "number": 50,
        "name": "Diglett",
        "species": "Mole Pokémon",
        "type": ["Ground"],
        "ability": ["Sand Veil", "Arena Trap", "Sand Force"],
        "height": 0.2,
        "weight": 0.8,
        "description": "(Red/Blue) Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground."
        },
		
        {
        "nameid": "dugtrio",
        "generation": 1 ,
        "number": 51,
        "name": "Dugtrio",
        "species": "Mole Pokémon",
        "type": ["Ground"],
        "ability": ["Sand Veil", "Arena Trap", "Sand Force"],
        "height": 0.7,
        "weight": 33.3,
        "description": "(Red/Blue) A team of DIGLETT triplets. It triggers huge earthquakes by burrowing 60 miles underground."
        },
		
        {
        "nameid": "meowth",
        "generation": 1 ,
        "number": 52,
        "name": "Meowth",
        "species": "Scratch Cat Pokémon",
        "type": ["Normal"],
        "ability": ["Pickup", "Technician", "Unnerve"],
        "height": 0.4,
        "weight": 4.2,
        "description": "(Red/Blue) Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change."
        },
		
        {
        "nameid": "persian",
        "generation": 1 ,
        "number": 53,
        "name": "Persian",
        "species": "Classy Cat Pokémon",
        "type": ["Normal"],
        "ability": ["Limber", "Technician", "Unnerve"],
        "height": 1.0,
        "weight": 32.0,
        "description": "(Red/Blue) Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness."
        },
		
        {
        "nameid": "psyduck",
        "generation": 1 ,
        "number": 54,
        "name": "Psyduck",
        "species": "Duck Pokémon",
        "type": ["Water"],
        "ability": ["Damp", "Cloud Nine", "Swift Swim"],
        "height": 0.8,
        "weight": 19.6,
        "description": "(Red/Blue) While lulling its enemies with its vacant look, this wily POKéMON will use psychokinetic powers."
        },
		
        {
        "nameid": "golduck",
        "generation": 1 ,
        "number": 55,
        "name": "Golduck",
         "species": "Duck Pokémon",
        "type": ["Water"],
        "ability": ["Damp", "Cloud Nine", "Swift Swim"],
        "height": 1.7,
        "weight": 76.6,
        "description": "(Red/Blue) Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa."
        },
		
        {
        "nameid": "mankey",
        "generation": 1 ,
        "number": 56,
        "name": "Mankey",
        "species": "Pig Monkey Pokémon",
        "type": ["Fighter"],
        "ability": ["Vital Spirit", "Anger Point", "Defiant"],
        "height": 0.5,
        "weight": 28.0,
        "description": "(Red/Blue) Extremely quick to anger. It could be docile one moment then thrashing away the next instant."
        },
		
        {
        "nameid": "primeape",
        "generation": 1 ,
        "number": 57,
        "name": "Primeape",
         "species": "Pig Monkey Pokémon",
        "type": ["Fighter"],
        "ability": ["Vital Spirit", "Anger Point", "Defiant"],
        "height": 1.0,
        "weight": 32.0,
        "description": "(Red/Blue) Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught."
        },
		
        {
        "nameid": "growlithe",
        "generation": 1 ,
        "number": 58,
        "name": "Growlithe",
        "species": "Puppy Pokémon",
        "type": ["Fire"],
        "ability": ["Intimidate", "Flash Fire", "Justified"],
        "height": 0.7,
        "weight": 19.0,
        "description": "(Red/Blue) Very protective of its territory. It will bark and bite to repel intruders from its space."
        },
		
        {
        "nameid": "arcanine",
        "generation": 1 ,
        "number": 59,
        "name": "Arcanine",
        "species": "Legendary Pokémon",
        "ability": ["Intimidate", "Flash Fire", "Justified"],
        "height": 1.9,
        "weight": 155.0,
        "description": "(Red/Blue) A POKéMON that has been admired since the past for its beauty. It runs agilely as if on wings."
        },

        {
        "nameid": "poliwag",
        "generation": 1 ,
        "number": 60,
        "name": "Poliwag",
        "species": "Tadpole Pokémon",
        "type": ["Water"],
        "ability": ["Water Absorb", "Damp", "Swift Swim"],
        "height": 0.6,
        "weight": 12.4,
        "description": "(Red/Blue) Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand."
        },
		
        {
        "nameid": "poliwhirl",
        "generation": 1 ,
        "number": 61,
        "name": "Poliwhirl",
        "species": "Tadpole Pokémon",
        "type": ["Water"],
        "ability": ["Water Absorb", "Damp", "Swift Swim"],
        "height": 1.0,
        "weight": 20.0,
        "description": "(Red/Blue) Capable of living in or out of water. When out of water, it sweats to keep its body slimy."
        },
		
        {
        "nameid": "poliwrath",
        "generation": 1 ,
        "number": 62,
        "name": "Poliwrath",
        "species": "Tadpole Pokémon",
        "type": ["Water", "Fighter"],
        "ability": ["Water Absorb", "Damp", "Swift Swim"],
        "height": 1.3,
        "weight": 54.0,
        "description": "(Red/Blue) An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers."
        },
		
        {
        "nameid": "abra",
        "generation": 1 ,
        "number": 63,
        "name": "Abra",
        "species": "Psi Pokémon",
        "type": ["Psychic"],
        "ability": ["Synchronize", "Inner Focus", "Magic Guard"],
        "height": 0.9,
        "weight": 19.5,
        "description": "(Red/Blue) Using its ability to read minds, it will identify impending danger and TELEPORT to safety."
        },
		
        {
        "nameid": "kadabra",
        "generation": 1 ,
        "number": 64,
        "name": "Kadabra",
        "species": "Psi Pokémon",
        "type": ["Psychic"],
        "ability": ["Synchronize", "Inner Focus", "Magic Guard"],
        "height": 1.3,
        "weight": 56.5,
        "description": "(Red/Blue) It emits special alpha waves from its body that induce headaches just by being close by."
        },
		
        {
        "nameid": "alakazam",
        "generation": 1 ,
        "number": 65,
        "name": "Alakazam",
       "species": "Psi Pokémon",
        "type": ["Psychic"],
        "ability": ["Synchronize", "Inner Focus", "Magic Guard"],
        "height": 1.5,
        "weight": 48.0,
        "description": "(Red/Blue) Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5,000."
        },
		
        {
        "nameid": "machop",
        "generation": 1 ,
        "number": 66,
        "name": "Machop",
        "species": "Superpower Pokémon",
        "type": ["Fighter"],
        "ability": ["Guts", "No Guard", "Steadfast"],
        "height": 0.8,
        "weight": 19.5,
        "description": "(Red/Blue) Loves to build its muscles. It trains in all styles of martial arts to become even stronger."
        },
		
        {
        "nameid": "machoke",
        "generation": 1 ,
        "number": 67,
        "name": "Machoke",
        "name": "Machop",
        "species": "Superpower Pokémon",
        "type": ["Fighter"],
        "ability": ["Guts", "No Guard", "Steadfast"],
        "height": 1.5,
        "weight": 70.5,
        "description": "(Red/Blue) Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions."
        },
		
        {
        "nameid": "machamp",
        "generation": 1 ,
        "number": 68,
        "name": "Machamp",
        "species": "Superpower Pokémon",
        "type": ["Fighter"],
        "ability": ["Guts", "No Guard", "Steadfast"],
        "height": 1.6,
        "weight": 130.0,
        "description": "(Yellow) One arm alone can move mountains. Using all four arms, this POKéMON fires off awesome punches."
        },
		
        {
        "nameid": "bellsprout",
        "generation": 1 ,
        "number": 69,
        "name": "Bellsprout",
        "species": "Flower Pokémon",
        "type": ["Grass", "Poison"],
        "ability": ["Chlorophyl", "Gluttony"],
        "height": 0.7,
        "weight": 4.0,
        "description": "(Red/Blue) A carnivorous POKéMON that traps and eats bugs. It uses its root feet to soak up needed moisture."
        },
		
        {
        "nameid": "weepinbell",
        "generation": 1 ,
        "number": 70,
        "name": "Weepinbell",
        "species": "Flycatcher Pokémon",
        "type": ["Grass", "Poison"],
        "ability": ["Chlorophyl", "Gluttony"],
        "height": 1.0,
        "weight": 6.4,
        "description": "(Red/Blue) It spits out POISONPOWDER to immobilize the enemy and then finishes it with a spray of ACID."
        },
		
        {
        "nameid": "victreebel",
        "generation": 1 ,
        "number": 71,
        "name": "Victreebel",
        "species": "Flycatcher Pokémon",
        "type": ["Grass", "Poison"],
        "ability": ["Chlorophyl", "Gluttony"],
        "height": 1.7,
        "weight": 15.5,
        "description": "(Red/Blue) Said to live in huge colonies deep in jungles, although no one has ever returned from there."
        },
		
        {
        "nameid": "tentacool",
        "generation": 1 ,
        "number": 72,
        "name": "Tentacool",
        "species": "Jellyfish Pokémon",
        "type": ["Water", "Poison"],
        "ability": ["Clear Body", "Liquid Ooze", "Rain Dish"],
        "height": 0.9,
        "weight": 45.5,
        "description": "(Red/Blue) Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid."
        },
		
        {
        "nameid": "tentacruel",
        "generation": 1 ,
        "number": 73,
        "name": "Tentacruel",
       "species": "Jellyfish Pokémon",
        "type": ["Water", "Poison"],
        "ability": ["Clear Body", "Liquid Ooze", "Rain Dish"],
        "height": 1.6,
        "weight": 55.0,
        "description": "(Red/Blue) The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey."
        },
		
        {
        "nameid": "geodude",
        "generation": 1 ,
        "number": 74,
        "name": "Geodude",
        "species": "Rock Pokémon",
        "type": ["Rock", "Ground"],
        "ability": ["Rock Head", "Sturdy", "Sand Veil"],
        "height": 0.4,
        "weight": 20.0,
        "description": "(Red/Blue) Found in fields and mountains. Mistaking them for boulders, people often step or trip on them."
        },
		
        {
        "nameid": "graveler",
        "generation": 1 ,
        "number": 75,
        "name": "Graveler",
        "species": "Rock Pokémon",
        "type": ["Rock", "Ground"],
        "ability": ["Rock Head", "Sturdy", "Sand Veil"],
        "height": 1.0,
        "weight": 105.0,
        "description": "(Red/Blue) Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction."
        },
		
        {
        "nameid": "golem",
        "generation": 1 ,
        "number": 76,
        "name": "Golem",
        "species": "Megaton Pokémon",
        "type": ["Rock", "Ground"],
        "ability": ["Rock Head", "Sturdy", "Sand Veil"],
        "height": 1.4,
        "weight": 300.0,
        "description": "(Red/Blue) Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage."
        },
		
        {
        "nameid": "ponyta",
        "generation": 1 ,
        "number": 77,
        "name": "Ponyta",
        "species": "Fire Horse Pokémon",
        "type": ["Fire"],
        "ability": ["Run Away", "Flash Fire", "Flame Body"],
        "height": 1.0,
        "weight": 30.0,
        "description": "(Red/Blue) Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time."
        },
		
        {
        "nameid": "rapidash",
        "generation": 1 ,
        "number": 78,
        "name": "Rapidash",
         "species": "Fire Horse Pokémon",
        "type": ["Fire"],
        "ability": ["Run Away", "Flash Fire", "Flame Body"],
        "height": 1.7,
        "weight": 95.0,
        "description": "(Red/Blue) Very competitive, this POKéMON will chase anything that moves fast in the hopes of racing it."
        },
		
        {
        "nameid": "slowpoke",
        "generation": 1 ,
        "number": 79,
        "name": "Slowpoke",
        "species": "Dopey Pokémon",
        "type": ["Water", "Psychic"],
        "ability": ["Oblivious", "Own Tempo", "Regenerator"],
        "height": 1.2,
        "weight": 36,
        "description": "(Red/Blue) Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack."
        },
		
        {
        "nameid": "slowbro",
        "generation": 1 ,
        "number": 80,
        "name": "Slowbro",
        "species": "Hermit Crab Pokémon",
        "type": ["Water", "Psychic"],
        "ability": ["Oblivious", "Own Tempo", "Regenerator"],
        "height": 1.6,
        "weight": 78.5,
        "description": "(Red/Blue) The SHELLDER that is latched onto SLOWPOKE’s tail is said to feed on the host’s left over scraps."
        },
		
        {
        "nameid": "magnemite",
        "generation": 1 ,
        "number": 81,
        "name": "Magnemite",
        "species": "Magnet Pokémon",
        "type": ["Electric", "Steel"],
        "ability": ["Magnet Pull", "Sturdy", "Analytic"],
        "height": 0.3,
        "weight": 6.0,
        "description": "(Yellow) It is born with the ability to defy gravity. It floats in air on powerful electromagnetic waves."
        },
		
        {
        "nameid": "magneton",
        "generation": 1 ,
        "number": 82,
        "name": "Magneton",
        "species": "Magnet Pokémon",
        "type": ["Electric", "Steel"],
        "ability": ["Magnet Pull", "Sturdy", "Analytic"],
        "height": 1.0,
        "weight": 60.0,
        "description": "(Yellow) Generates strange radio signals. It raises the temperature by 3.6F degrees within 3,300 feet."
        },
        {
        "nameid": "farfetchd",
        "generation": 1 ,
        "number": 83,
        "name": "Farfetch'd",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "doduo",
        "generation": 1 ,
        "number": 84,
        "name": "Doduo",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "dodrio",
        "generation": 1 ,
        "number": 85,
        "name": "Dodrio",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "seel",
        "generation": 1 ,
        "number": 86,
        "name": "Seel",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "dewgong",
        "generation": 1 ,
        "number": 87,
        "name": "Dewgong",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "grimer",
        "generation": 1 ,
        "number": 88,
        "name": "Grimer",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "muk",
        "generation": 1 ,
        "number": 89,
        "name": "Muk",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "shellder",
        "generation": 1 ,
        "number": 90,
        "name": "Shellder",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "cloyster",
        "generation": 1 ,
        "number": 91,
        "name": "Cloyster",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "gastly",
        "generation": 1 ,
        "number": 92,
        "name": "Gastly",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "haunter",
        "generation": 1 ,
        "number": 93,
        "name": "Haunter",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "gengar",
        "generation": 1 ,
        "number": 94,
        "name": "Gengar",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "onix",
        "generation": 1 ,
        "number": 95,
        "name": "Onix",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "drowzee",
        "generation": 1 ,
        "number": 96,
        "name": "Drowzee",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "hypno",
        "generation": 1 ,
        "number": 97,
        "name": "Hypno",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "krabby",
        "generation": 1 ,
        "number": 98,
        "name": "Krabby",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "kingler",
        "generation": 1 ,
        "number": 99,
        "name": "Kingler",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "voltorb",
        "generation": 1 ,
        "number": 100,
        "name": "Voltorb",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "electrode",
        "generation": 1 ,
        "number": 101,
        "name": "Electrode",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "exeggcute",
        "generation": 1 ,
        "number": 102,
        "name": "Exeggcute",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "exeggutor",
        "generation": 1 ,
        "number": 103,
        "name": "Exeggutor",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "cubone",
        "generation": 1 ,
        "number": 104,
        "name": "Cubone",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "marowak",
        "generation": 1 ,
        "number": 105,
        "name": "Marowak",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "hitmonlee",
        "generation": 1 ,
        "number": 106,
        "name": "Hitmonlee",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "hitmonchan",
        "generation": 1 ,
        "number": 107,
        "name": "Hitmonchan",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "lickitung",
        "generation": 1 ,
        "number": 108,
        "name": "Lickitung",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "koffing",
        "generation": 1 ,
        "number": 109,
        "name": "Koffing",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "weezing",
        "generation": 1 ,
        "number": 110,
        "name": "Weezing",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "rhyhorn",
        "generation": 1 ,
        "number": 111,
        "name": "Rhyhorn",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "rhydon",
        "generation": 1 ,
        "number": 112,
        "name": "Rhydon",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "chansey",
        "generation": 1 ,
        "number": 113,
        "name": "Chansey",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "tangela",
        "generation": 1 ,
        "number": 114,
        "name": "Tangela",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "kangaskhan",
        "generation": 1 ,
        "number": 115,
        "name": "Kangaskhan",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "horsea",
        "generation": 1 ,
        "number": 116,
        "name": "Horsea",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "seadra",
        "generation": 1 ,
        "number": 117,
        "name": "Seadra",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "goldeen",
        "generation": 1 ,
        "number": 118,
        "name": "Goldeen",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "seaking",
        "generation": 1 ,
        "number": 119,
        "name": "Seaking",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "staryu",
        "generation": 1 ,
        "number": 120,
        "name": "Staryu",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "starmie",
        "generation": 1 ,
        "number": 121,
        "name": "Starmie",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "mr-mime",
        "generation": 1 ,
        "number": 122,
        "name": "Mr. Mime",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "scyther",
        "generation": 1 ,
        "number": 123,
        "name": "Scyther",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "jynx",
        "generation": 1 ,
        "number": 124,
        "name": "Jynx",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "electabuzz",
        "generation": 1 ,
        "number": 125,
        "name": "Electabuzz",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "magmar",
        "generation": 1 ,
        "number": 126,
        "name": "Magmar",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "pinsir",
        "generation": 1 ,
        "number": 127,
        "name": "Pinsir",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "tauros",
        "generation": 1 ,
        "number": 128,
        "name": "Tauros",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "magikarp",
        "generation": 1 ,
        "number": 129,
        "name": "Magikarp",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "gyarados",
        "generation": 1 ,
        "number": 130,
        "name": "Gyarados",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "lapras",
        "generation": 1 ,
        "number": 131,
        "name": "Lapras",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "ditto",
        "generation": 1 ,
        "number": 132,
        "name": "Ditto",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "eevee",
        "generation": 1 ,
        "number": 133,
        "name": "Eevee",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "vaporeon",
        "generation": 1 ,
        "number": 134,
        "name": "Vaporeon",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "jolteon",
        "generation": 1 ,
        "number": 135,
        "name": "Jolteon",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "flareon",
        "generation": 1 ,
        "number": 136,
        "name": "Flareon",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "porygon",
        "generation": 1 ,
        "number": 137,
        "name": "Porygon",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "omanyte",
        "generation": 1 ,
        "number": 138,
        "name": "Omanyte",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "omastar",
        "generation": 1 ,
        "number": 139,
        "name": "Omastar",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "kabuto",
        "generation": 1 ,
        "number": 140,
        "name": "Kabuto",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "kabutops",
        "generation": 1 ,
        "number": 141,
        "name": "Kabutops",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "aerodactyl",
        "generation": 1 ,
        "number": 142,
        "name": "Aerodactyl",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "snorlax",
        "generation": 1 ,
        "number": 143,
        "name": "Snorlax",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "articuno",
        "generation": 1 ,
        "number": 144,
        "name": "Articuno",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "zapdos",
        "generation": 1 ,
        "number": 145,
        "name": "Zapdos",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "moltres",
        "generation": 1 ,
        "number": 146,
        "name": "Moltres",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "dratini",
        "generation": 1 ,
        "number": 147,
        "name": "Dratini",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "dragonair",
        "generation": 1 ,
        "number": 148,
        "name": "Dragonair",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "dragonite",
        "generation": 1 ,
        "number": 149,
        "name": "Dragonite",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "mewtwo",
        "generation": 1 ,
        "number": 150,
        "name": "Mewtwo",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        },
        {
        "nameid": "mew",
        "generation": 1 ,
        "number": 151,
        "name": "Mew",
        "species": "",
        "type": [""],
        "ability": [""],
        "height": "",
        "weight": "",
        "description": ""
        }
    ]