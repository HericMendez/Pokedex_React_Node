const attributes = require('../data/attributes')

const bulbassaur = {
    number: 001,
    name: "Bulbassaur",
    type: ["Grass", "Poison"],
    height: 1.0,
    weight: 13.0,
    ability:["Overgrow", "Chlorophyl(hidden)"],
    description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
  };

  console.log(attributes(bulbassaur));