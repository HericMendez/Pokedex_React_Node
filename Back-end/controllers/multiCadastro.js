const ManipulaDados = require("../models/manipulaDados");
const attributes = require("../data/attributes");
const primeiraLetraMaiuscula = require("./formataString");

//Torna primeira letra maiúscula e as demaiss minúsculas

module.exports = (app) => {

  const gen1 = [ 

        		
    {
      "nameid": "exeggutor",
      "generation": 1 ,
      "number": 103,
      "name": "Exeggutor",
      "species": "Coconut Pokémon",
      "type": ["Grass", "Psychic"],
      "ability": ["Chlorophyll", "Harvest"],
      "height": 2.0,
      "weight": 120.0,
      "description": "Legend has it that on rare occasions, one of its heads will drop off and continue on as an EXEGGCUTE."
      },
  
      {
      "nameid": "cubone",
      "generation": 1 ,
      "number": 104,
      "name": "Cubone",
      "species": "Lonely Pokémon",
      "type": ["Ground"],
      "ability": ["Rock Head","Lightning Rod", "Battle Armor"],
      "height": 0.4,
      "weight": 6.5,
      "description": "Wears the skull of its deceased mother. Its cries echo inside the skull and come out as a sad melody."
      },
  
      {
      "nameid": "marowak",
      "generation": 1 ,
      "number": 105,
      "name": "Marowak",
      "species": "Bone Keeper Pokémon",
      "type": ["Ground"],
      "ability": ["Rock Head","Lightning Rod", "Battle Armor"],
      "height": 1.0,
      "weight": 45.0,
      "description": "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets."
      },
  
      {
      "nameid": "hitmonlee",
      "generation": 1 ,
      "number": 106,
      "name": "Hitmonlee",
      "species": "Kicking Pokémon",
      "type": ["Fighter"],
      "ability": ["Limber", "Reckless", "Unburden"],
      "height": 1.5,
      "weight": 49.8,
      "description": "When kicking, the sole of its foot turns as hard as a diamond on impact and destroys its enemy."
      },
  
      {
      "nameid": "hitmonchan",
      "generation": 1 ,
      "number": 107,
      "name": "Hitmonchan",
      "species": "Punching Pokémon",
      "type": ["Fighter"],
      "ability": ["Keen Eye", "Iron Fist", "Inner Focus" ],
      "height": 1.4,
      "weight": 50.2,
      "description": "While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see."
      },
  
      {
      "nameid": "lickitung",
      "generation": 1 ,
      "number": 108,
      "name": "Lickitung",
      "species": "Licking Pokémon",
      "type": ["Normal"],
      "ability": ["Own Tempo", "Oblivious", "Cloud Nine"],
      "height": 1.2,
      "weight": 65.5,
      "description": "Its tongue spans almost 7 feet and moves more freely than its forelegs. Its licks can cause paralysis."
      },
  
      {
      "nameid": "koffing",
      "generation": 1 ,
      "number": 109,
      "name": "Koffing",
      "species": "Poison Gas Pokémon",
      "type": ["Poison"],
      "ability": ["Levitate","Neutralizing Gas","Stench"],
      "height": 0.6,
      "weight": 1.0,
      "description": "Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning."
      },
  
      {
      "nameid": "weezing",
      "generation": 1 ,
      "number": 110,
      "name": "Weezing",
      "species": "Poison Gas Pokémon",
      "type": ["Poison"],
      "ability": ["Levitate","Neutralizing Gas","Stench"],
      "height": 1.2,
      "weight": 9.5,
      "description": "It lives and grows by absorbing dust, germs and poison gases that are contained in toxic waste and garbage."
      },
  
      {
      "nameid": "rhyhorn",
      "generation": 1 ,
      "number": 111,
      "name": "Rhyhorn",
      "species": "Spikes Pokémon",
      "type": ["Ground", "Rock"],
      "ability": ["Lightning Rod", "Rock Head", "Reckless"],
      "height": 1.0,
      "weight": 115.0,
      "description": "Its massive bones are 1000 times harder than human bones. It can easily knock a trailer flying."
      },
  
      {
      "nameid": "rhydon",
      "generation": 1 ,
      "number": 112,
      "name": "Rhydon",
      "species": "Drill Pokémon",
      "type": ["Ground", "Rock"],
      "ability": ["Lightning Rod", "Rock Head", "Reckless"],
      "height": 1.0,
      "weight": 115.0,
      "description": "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees."
      },
  
      {
      "nameid": "chansey",
      "generation": 1 ,
      "number": 113,
      "name": "Chansey",
      "species": "Egg Pokémon",
      "type": ["Normal"],
      "ability": ["Natural Cure", "Serene Grace", "Healer"],
      "height": 1.1,
      "weight": 34.6,
      "description": "A rare and elusive Pokémon that is said to bring happiness to those who manage to get it."
      },
  
      {
      "nameid": "tangela",
      "generation": 1 ,
      "number": 114,
      "name": "Tangela",
      "species": "Vine Pokémon",
      "type": ["Grass"],
      "ability": ["Chlorophyll","Leaf Guard","Regenerator"],
      "height": 1.0,
      "weight": 35.0,
      "description": "The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks."
      },
  
      {
      "nameid": "kangaskhan",
      "generation": 1 ,
      "number": 115,
      "name": "Kangaskhan",
      "species": "Parent Pokémon",
      "type": ["Normal"],
      "ability": ["Early Bird", "Scrappy", "Inner Focus"],
      "height": 2.2,
      "weight": 80.0,
      "description": "The infant rarely ventures out of its mother’s protective pouch until it is 3 years old."
      },
  
      {
      "nameid": "horsea",
      "generation": 1 ,
      "number": 116,
      "name": "Horsea",
      "species": "Dragon Pokémon",
      "type": ["Water"],
      "ability": ["Swift Swim", "Sniper", "Damp"],
      "height": 0.4,
      "weight": 8.0,
      "description": "Known to shoot down flying bugs with precision blasts of ink from the surface of the water."
      },
  
      {
      "nameid": "seadra",
      "generation": 1 ,
      "number": 117,
      "name": "Seadra",
      "species": "Dragon Pokémon",
      "type": ["Water"],
      "ability": ["Swift Swim", "Sniper", "Damp"],
      "height": 1.2,
      "weight": 25.0,
      "description": "Capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail."
      },
  
      {
      "nameid": "goldeen",
      "generation": 1 ,
      "number": 118,
      "name": "Goldeen",
      "species": "Goldfish Pokémon",
      "type": ["Water"],
      "ability": ["Swift Swim", "Water Veil", "Lightning Rod" ],
      "height": 0.6,
      "weight": 15.0,
      "description": "When it is time for them to lay eggs, they can be seen swimming up rivers and falls in large groups."
      },
  
      {
      "nameid": "seaking",
      "generation": 1 ,
      "number": 119,
      "name": "Seaking",
      "species": "Goldfish Pokémon",
      "type": ["Water"],
      "ability": ["Swift Swim", "Water Veil", "Lightning Rod" ],
      "height": 1.3,
      "weight": 39.0,
      "description": "In the autumn spawning season, they can be seen swimming powerfully up rivers and creeks."
      },
  
      {
      "nameid": "staryu",
      "generation": 1 ,
      "number": 120,
      "name": "Staryu",
      "species": "Star Shape Pokémon",
      "type": ["Water"],
      "ability": ["Illuminate", "Natural Cure", "Analytic"],
      "height": 0.8,
      "weight": 34.5,
      "description": "As long as the center section is unharmed, it can grow back fully even if it is chopped to bits."
      },
  
      {
      "nameid": "starmie",
      "generation": 1 ,
      "number": 121,
      "name": "Starmie",
      "species": "Mysterious Pokémon",
      "type": ["Water", "Psychic"],
      "ability": ["Illuminate", "Natural Cure", "Analytic"],
      "height": 1.1,
      "weight": 80.0,
      "description": "Its central core glows with the seven colors of the rainbow. Some people value the core as a gem."
      },
  
      {
      "nameid": "mr-mime",
      "generation": 1 ,
      "number": 122,
      "name": "Mr. Mime",
      "species": "Barrier Pokémon",
      "type": ["Psychic", "Fairy"],
      "ability": ["Soundproof", "Filter", "Technician"],
      "height": 1.3,
      "weight": 54.5,
      "description": "A skilled mime from birth, it gains the ability to create invisible objects as it matures."
      },
  
      {
      "nameid": "scyther",
      "generation": 1 ,
      "number": 123,
      "name": "Scyther",
      "species": "Mantis Pokémon",
      "type": ["Bug", "Flying"],
      "ability": ["Swarm", "Technician", "Steadfast"],
      "height": 1.5,
      "weight": 56.0,
      "description": "With ninja-like agility and speed, it can create the illusion that there is more than one."
      },
  
      {
      "nameid": "jynx",
      "generation": 1 ,
      "number": 124,
      "name": "Jynx",
      "species": "Human Shape Pokémon",
      "type": ["Ice", "Psychic"],
      "ability": ["Oblivious", "Forewarn", "Dry Skin"],
      "height": 1.4,
      "weight": 40.6,
      "description": "It seductively wiggles its hips as it walks. It can cause people to dance in unison with it."
      },
  
      {
      "nameid": "electabuzz",
      "generation": 1 ,
      "number": 125,
      "name": "Electabuzz",
      "species": "Electric Pokémon",
      "type": ["Electric"],
      "ability": ["Static", "Vital Spirit"],
      "height": 1.1,
      "weight": 30.0,
      "description": "If a major power outage occurs, it is certain that this POKéMON has eaten electricity at a power plant."
      },
  
      {
      "nameid": "magmar",
      "generation": 1 ,
      "number": 126,
      "name": "Magmar",
      "species": "Spitfire Pokémon",
      "type": ["Fire"],
      "ability": ["Flame Body", "Vital Spirit"],
      "height": 1.3,
      "weight": 44.5,
      "description": "Born in an active volcano. Its body is always cloaked in flames, so it looks like a big ball of fire."
      },
  
      {
      "nameid": "pinsir",
      "generation": 1 ,
      "number": 127,
      "name": "Pinsir",
      "species": "Stag Beetle Pokémon",
      "type": ["Bug"],
      "ability": ["Hyper Cutter", "Mold Breaker", "Moxie"],
      "height": 1.5,
      "weight": 55.0,
      "description": "If it fails to crush the victim in its pincers, it will swing it around and toss it hard."
      },
  
      {
      "nameid": "tauros",
      "generation": 1 ,
      "number": 128,
      "name": "Tauros",
      "species": "Wild Bull Pokémon",
      "type": ["Normal"],
      "ability": ["Intimidate", "Anger Point", "Sheer Force"],
      "height": 1.4,
      "weight": 88.4,
      "description": "When it targets an enemy, it charges furiously while whipping its body with its long tails."
      },
  
      {
      "nameid": "magikarp",
      "generation": 1 ,
      "number": 129,
      "name": "Magikarp",
      "species": "Fish Pokémon",
      "type": ["Water"],
      "ability": ["Swift Swim", "Rattled"],
      "height": 0.9,
      "weight": 10.0,
      "description": "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today."
      },
  
      {
      "nameid": "gyarados",
      "generation": 1 ,
      "number": 130,
      "name": "Gyarados",
      "species": "Fish Pokémon",
      "type": ["Water", "Flying"],
      "ability": ["Intimidate", "Moxie"],
      "height": 6.5,
      "weight": 235.0,
      "description": "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage."
      },
  
      {
      "nameid": "lapras",
      "generation": 1 ,
      "number": 131,
      "name": "Lapras",
      "species": "Transport Pokémon",
      "type": ["Water", "Ice"],
      "ability": ["Water Absorb", "Shell Armor", "Hydration"],
      "height": 2.5,
      "weight": 220.0,
      "description": "A gentle soul that can read the minds of people. It can ferry people across the sea on its back."
      },
  
      {
      "nameid": "ditto",
      "generation": 1 ,
      "number": 132,
      "name": "Ditto",
      "species": "Transform Pokémon",
      "type": ["Normal"],
      "ability": ["Limber", "Imposter"],
      "height": 0.3,
      "weight": 4.0,
      "description": "Capable of copying an enemy’s genetic code to instantly transform itself into a duplicate of the enemy."
      },
      {
      "nameid": "eevee",
      "generation": 1 ,
      "number": 133,
      "name": "Eevee",
      "species": "Evolution Pokémon",
      "type": ["Normal"],
      "ability": ["Run Away", "Adaptability", "Anticipation"],
      "height": 0.3,
      "weight": 6.5,
      "description": "Its genetic code is unstable, so it could evolve in a variety of ways. There are only a few alive."
      },
  
      {
      "nameid": "vaporeon",
      "generation": 1 ,
      "number": 134,
      "name": "Vaporeon",
      "species": "Bubble Jet Pokémon",
      "type": ["Water"],
      "ability": ["Water Absorb", "Hydration"],
      "height": 1.0,
      "weight": 29.0,
      "description": "Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid’s."
      },
  
      {
      "nameid": "jolteon",
      "generation": 1 ,
      "number": 135,
      "name": "Jolteon",
      "species": "Lightning Pokémon",
      "type": ["Electric"],
      "ability": ["Volt Absorb", "Quick Feet"],
      "height": 0.8,
      "weight": 24.5,
      "description": "It accumulates negative ions in the atmosphere to blast out 10000-volt lightning bolts."
      },
  
      {
      "nameid": "flareon",
      "generation": 1 ,
      "number": 136,
      "name": "Flareon",
      "species": "Flame Pokémon",
      "type": [""],
      "ability": ["Fire"],
      "height": 0.9,
      "weight": 25.0,
      "description": "When storing thermal energy in its body, its temperature could soar to over 1600 degrees."
      },
  
      {
      "nameid": "porygon",
      "generation": 1 ,
      "number": 137,
      "name": "Porygon",
      "species": "Virtual Pokémon",
      "type": ["Normal"],
      "ability": ["Trace", "Download", "Analytic"],
      "height": 0.8,
      "weight": 36.5,
      "description": "A POKéMON that consists entirely of programming code. Capable of moving freely in cyberspace."
      },
  
      {
      "nameid": "omanyte",
      "generation": 1 ,
      "number": 138,
      "name": "Omanyte",
      "species": "Spiral Pokémon",
      "type": ["Swift Swim", "Shell Armor", "Weak Armor"],
      "ability": ["Rock", "Water"],
      "height": 0.4,
      "weight": 7.5,
      "description": "Although long extinct, in rare cases, it can be genetically resurrected from fossils."
      },
  
      {
      "nameid": "omastar",
      "generation": 1 ,
      "number": 139,
      "name": "Omastar",
      "species": "Spiral Pokémon",
      "type": ["Swift Swim", "Shell Armor", "Weak Armor"],
      "ability": ["Rock", "Water"],
      "height": 1.0,
      "weight": 35.0,
      "description": "Sharp beaks ring its mouth. Its shell was too big for it to move freely, so it became extinct."
      },
  
      {
      "nameid": "kabuto",
      "generation": 1 ,
      "number": 140,
      "name": "Kabuto",
      "species": "Shellfish Pokémon",
      "type": ["Rock", "Water"],
      "ability": ["Swift Swim", "Battle Armor", "Weak Armor"],
      "height": 0.5,
      "weight": 11.5,
      "description": "A Pokémon that was resurrected from a fossil found in what was once the ocean floor eons ago."
      },
  
      {
      "nameid": "kabutops",
      "generation": 1 ,
      "number": 141,
      "name": "Kabutops",
      "species": "Shellfish Pokémon",
      "type": ["Rock", "Water"],
      "ability": ["Swift Swim", "Battle Armor", "Weak Armor"],
      "height": 1.3,
      "weight": 40.5,
      "description": "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids."
      },
  
      {
      "nameid": "aerodactyl",
      "generation": 1 ,
      "number": 142,
      "name": "Aerodactyl",
      "species": "Fossil Pokémon",
      "type": ["Rock", "Flying"],
      "ability": ["Rock Head", "Pressure"],
      "height": 1.8,
      "weight": 59.0,
      "description": "A ferocious, prehistoric POKéMON that goes for the enemy’s throat with its serrated saw-like fangs."
      },
  
      {
      "nameid": "snorlax",
      "generation": 1 ,
      "number": 143,
      "name": "Snorlax",
      "species": "",
      "type": [""],
      "ability": ["Immunity", "Thick Fat", "Gluttony"],
      "height": 2.1,
      "weight": 460.0,
      "description": "Will eat anything, even if the food happens to be a little moldy. It never gets an upset stomach."
      },
  
      {
      "nameid": "articuno",
      "generation": 1 ,
      "number": 144,
      "name": "Articuno",
      "species": "Freeze Pokémon",
      "type": ["Ice", ""],
      "ability": ["Pressure", "Snow Cloak"],
      "height": 1.7,
      "weight": 55.4,
      "description": "One of the legendary bird Pokémon, it chills moisture in the atmosphere to create snow while flying."
      },
      {
      "nameid": "zapdos",
      "generation": 1 ,
      "number": 145,
      "name": "Zapdos",
      "species": "Electric Pokémon",
      "type": ["Electric", "Flying"],
      "ability": ["Pressure", "Static"],
      "height": 1.6,
      "weight": 52.6,
      "description": "A legendary bird Pokémon that is said to appear from clouds while dropping enormous lightning bolts."
      },
  
      {
      "nameid": "moltres",
      "generation": 1 ,
      "number": 146,
      "name": "Moltres",
      "species": "Flame Pokémon",
      "type": ["Fire", "Flying"],
      "ability": ["Pressure", "Flame Body"],
      "height": 2.0,
      "weight": 60.0,
      "description": "A legendary bird POkémon. As it flaps its flaming wings, even the night sky will turn red."
      },
  
      {
      "nameid": "dratini",
      "generation": 1 ,
      "number": 147,
      "name": "Dratini",
      "species": "Dragon Pokémon",
      "type": ["Dragon"],
      "ability": ["Shed Skin",, "Marvel Scale"],
      "height": 1.8,
      "weight": 3.3,
      "description": "Long considered a mythical Pokémon until recently when a small colony was found living underwater."
      },
  
      {
      "nameid": "dragonair",
      "generation": 1 ,
      "number": 148,
      "name": "Dragonair",
      "species": "Dragon Pokémon",
      "type": ["Dragon"],
      "ability": ["Shed Skin",, "Marvel Scale"],
      "height": 4.0,
      "weight": 16.5,
      "description": "A mystical Pokémon that exudes a gentle aura. Has the ability to change climate conditions."
      },
  
      {
      "nameid": "dragonite",
      "generation": 1 ,
      "number": 149,
      "name": "Dragonite",
      "species": "Dragon Pokémon",
      "type": ["Dragon", "Flying"],
      "ability": ["Inner Focus", "Multiscale"],
      "height": 2.2,
      "weight": 210.0,
      "description": "An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans."
      },
  
      {
      "nameid": "mewtwo",
      "generation": 1 ,
      "number": 150,
      "name": "Mewtwo",
      "species": "Genetic Pokémon",
      "type": ["Psychic"],
      "ability": ["Pressure", "Unnerve"],
      "height": 2.0,
      "weight": 122.0,
      "description": "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments."
      },
  
      {
      "nameid": "mew",
      "generation": 1 ,
      "number": 151,
      "name": "Mew",
      "species": "New Species Pokémon",
      "type": ["Psychic"],
      "ability": ["Synchronize"],
      "height": 0.4,
      "weight": 4.0,
      "description": "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide."
      }
      ]

gen1.forEach((pokemon)=>{

    const atr = attributes(pokemon);
    //console.log(atr)
    
    console.log("Nº de pokémons cadastrados: " + gen1.length)
    const obj = { ...pokemon, ...atr };
    //console.log(obj)
    ManipulaDados.multiCadastro(obj);

})


};
