const types = [
  {
    type: ["None"],

    superEffective: ["None"],
    notVeryEffective: ["None"],
    noEffect:["None"],

    resist: ["None"],
    weak: ["None"],
    immune: ["None"]
  },
  
  {
    type: ["Normal"],

    superEffective: [],
    notVeryEffective: [],
    noEffect:["Ghost"],

    resist: [],
    weak: ["Fighter"],
    immune: ["Ghost"]
  },

  {
    type: ["Fire"],

    superEffective: ["Grass", "Ice", "Bug", "Steel"],
    notVeryEffective: ["Fire", "Water", "Rock", "Dragon"],
    noEffect: [],

    resist: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    weak: ["Water", "Ground", "Rock"],
    immune: []
  },

  {
    type: ["Water"],

    superEffective: ["Fire", "Ground", "Rock"],
    notVeryEffective: ["Water", "Grass", "Dragon"],
    noEffect: [],

    resist: ["Fire", "Water", "Ice", "Steel"],
    weak: ["Electric", "Grass"],
    immune: []
  },

  {
    type: ["Electric"],

    superEffective: ["Water", "Flying"],
    notVeryEffective: ["Electric", "Grass", "Dragon"],
    noEffect:["Ground"],

    resist: ["Electric", "Flying", "Steel"],
    weak: ["Ground"],
    immune: []
  },

  {
    type: ["Grass"],

    superEffective: ["Water", "Ground", "Rock"],
    notVeryEffective: ["Fire", "Grass", "Poison", "Flying", "Bug"],
    noEffect: [],

    resist: ["Water", "Electric", "Grass", "Ground"],
    weak: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    immune: []
  },

  {
    type: ["Ice"],

    superEffective: ["Grass", "Ground", "Flying", "Dragon"],
    notVeryEffective: ["Fire", "Water", "Ice", "Steel"],
    noEffect:[],

    resist: ["Ice"],
    weak: ["Fire", "Fighting", "Rock", "Steel"],
    immune: []
  },

  {
    type: ["Fighter"],

    superEffective: ["Normal", "Ice", "Rock", "Dark", "Steel"],
    notVeryEffective: ["Poison", "Flying", "Psychic", "Bug", "Fairy"],
    noEffect: ["Ghost"],

    resist: ["Bug", "Rock", "Dark"],
    weak: ["Flying", "Psychic", "Fairy"],
    immune: []
  },
  
  {
    type: ["Poison"],

    superEffective: ["Grass", "Fairy"],
    notVeryEffective: ["Poison", "Ground", "Rock", "Ghost"],
    noEffect: ["Steel"],

    resist: ["Grass", "Fighter", "Poison", "Bug", "Fairy"],
    weak: ["Ground", "Psychic"],
    immune: []
  },
  
  {
    type: ["Ground"],

    superEffective: ["Fire", "Electric", "Poison", "Rock", "Steel"],
    notVeryEffective: ["Grass", "Bug"],
    noEffect: ["Flying"],

    resist: ["Poison", "Rock"],
    weak: ["Water", "Grass", "Ice"],
    immune: ["Electric"]
  },

  {
    type: ["Flying"],

    superEffective: ["Grass", "Fighting", "Bug"],
    notVeryEffective: ["Electric", "Rock", "Steel"],
    noEffect: [],
    
    resist: ["Grass", "Fighting", "Bug"],
    weak: ["Electric", "Ice", "Rock"],
    immune: ["Ground"]
  },

  {
    type: ["Psychic"],

    superEffective: ["Fighter", "Poison"],
    notVeryEffective: ["Psychic", "Steel"],
    noEffect: ["Dark"],
    
    resist: ["Fighter", "Psychic"],
    weak: ["Bug", "Ghost", "Dark"],
    immune: []
  },

  {
    type: ["Bug"],

    superEffective: ["Grass", "Psychic", "Dark"],
    notVeryEffective: ["Fire", "Fighter", "Poison", "Flying", "Ghost", "Steel", "Fairy"],
    noEffect: [],
    
    resist: ["Grass", "Fighter", "Ground"],
    weak: ["Fire", "Flying", "Rock"],
    immune: []
  },

  {
    type: ["Rock"],

    superEffective: ["Fire", "Ice", "Flying", "Bug"],
    notVeryEffective: ["Fighter", "Ground", "Steel"],
    noEffect: [],
    
    resist: ["Normal", "Fire", "Poison", "Flying"],
    weak: ["Water", "Grass", "Fighter", "Ground", "Steel"],
    immune: []
  },

  {
    type: ["Ghost"],

    superEffective: ["Psychic", "Ghost"],
    notVeryEffective: ["Dark"],
    noEffect: ["Normal", "Fighter"],
    
    resist: ["Poison", "Bug"],
    weak: ["Ghost", "Dark"],
    immune: ["Normal"]
  },

  {
    type: ["Dragon"],

    superEffective: ["Dragon"],
    notVeryEffective: ["Steel"],
    noEffect: ["Fairy"],
    
    resist: ["Fire", "Water", "Electric", "Grass"],
    weak: ["Ice", "Dragon", "Fairy"],
    immune: []
  },

  {
    type: ["Dark"],

    superEffective: ["Psychic", "Ghost"],
    notVeryEffective: ["Fighter", "Dark", "Fairy"],
    noEffect: [],
    resist: ["Ghost", "Dark"],
    weak: ["Fighter", "Bug", "Fairy"],
    immune: ["Psychic"]
  },

  {
    type: ["Steel"],

    superEffective: ["Ice", "Rock", "Fairy"],
    notVeryEffective: ["Fire", "Water", "Electric", "Steel"],
    noEffect: [],
    
    resist: [],
    weak: ["Normal", "Grass", "Ice", "Flying", "Psychic",
            "Bug", "Rock", "Dragon", "Steel"],
    immune: ["Poison"]
  },
  
  {
    type: ["Fairy"],

    superEffective: ["Fighter", "Dragon", "Dark"],
    notVeryEffective: ["Fire", "Poison", "Steel"],
    noEffect: [],
    
    resist: ["Fighter", "Bug", "Dark"],
    weak: ["Poison", "Steel"],
    immune: ["Dragon"]
  }
];

module.exports = types;