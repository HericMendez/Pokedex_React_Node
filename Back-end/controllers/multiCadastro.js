const ManipulaDados = require("../models/manipulaDados");
const attributes = require("../data/attributes");
const primeiraLetraMaiuscula = require("./formataString");

//Torna primeira letra maiúscula e as demais minúsculas

module.exports = (app) => {

  const gen1 = [
		






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
    
    
]
gen1.forEach((pokemon)=>{

    const atr = attributes(pokemon);
    //console.log(atr)
    
    console.log(gen1.length)
    const obj = { ...pokemon, ...atr };
    console.log(obj)
    ManipulaDados.vaiDireto(obj);

})


};
