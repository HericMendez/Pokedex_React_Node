const tipos = [
  {
    tipo: ["planta"],
    resiste: ["planta", "agua", "eletrico", "terrestre"],
    fraco: ["fogo", "inseto", "voador", "veneno", "gelo"],
    imune: ["nenhum"],
    super_efetivo: ["agua", "terrestre", "pedra"],
    pouco_efetivo: ["grama", "fogo", "veneno", "metal", "dragao"],
    inefetivo: ["nenhum"],
  },

  {
    tipo: ["veneno"],
    resiste: ["lutador", "inseto", "veneno", "planta", "fada"],
    fraco: ["terrestre", "psiquico"],
    imune: ["nenhum"],
    super_efetivo: ["planta", "fada"],
    pouco_efetivo: ["veneno", "terrestre", "pedra", "fantasma"],
    inefetivo: ["metal"],
  },
];
// var object1 = Object.assign({}, obj1, obj2, obj3);

const hibrido = (obj) => {
  newObj = {
    numero: obj.numero,
    nome: obj.nome,
    tipo: [...obj.tipo],
    resiste: [...tipos[0].resiste, ...tipos[1].resiste],
    fraco: [...tipos[0].fraco, ...tipos[1].fraco],
    imune: [...tipos[0].imune, ...tipos[1].imune],
  };

  return newObj=newObj;
};

console.log(hibrido(bulba));

var bulba = {
  numero: "001",
  nome: "Bulbassauro",
  tipo: ["veneno", "planta"],
};
