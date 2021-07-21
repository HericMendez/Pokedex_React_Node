const atributos = (obj) => {
  const tipos = [
    {
      tipo: ["fogo"],
      resiste: ["fogo", "grama", "inseto", "fada"],
      fraco: ["água", "terrestre", "pedra"],
      imune: "nenhum",
      super_efetivo: ["grama", "inseto", "gelo", "metal"],
      pouco_efetivo: ["fogo", "agua", "pedra", "dragao"],
      inefetivo: ["nenhum"],
    },

    {
      tipo: ["planta"],
      resiste: ["planta", "agua", "eletrico", "terrestre"],
      fraco: ["fogo", "inseto", "voador", "veneno", "gelo"],
      imune: ["nenhum"],
      super_efetivo: ["agua, terrestre, pedra"],
      pouco_efetivo: ["grama", "fogo", "veneno", "metal", "dragao"],
      inefetivo: ["nenhum"],
    },
    {
      tipo: ["agua"],
      resiste: ["fogo", "agua", "metal", "gel"],
      fraco: ["grama", "eletrico",],
      imune: ["nenhum"],
      super_efetivo: ["fogo", "terrestre", "pedra"],
      pouco_efetivo: ["grama", "agua", "dragao"],
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


    {
      tipo: ["teste"],
      resiste: ["fogo", "agua", "terra"],
      fraco: ["fogo", "agua", "terra"],
      imune: ["fogo", "agua", "terra"],
      super_efetivo: ["planta", "terrestre", "pedra"],
      pouco_efetivo: ["planta", "terrestre", "pedra"],
      inefetivo: ["planta", "terrestre", "pedra"],
    },
  ];


    for (let p in tipos) {
      if (tipos[p].tipo == obj.tipo[p]) {
        
        
        tipos[p].tipo = obj.tipo;
        const newobj = { ...obj, ...tipos[p] };


        return newobj;
      }
    }
  
};

const bulbassauro = {
    numero: "001",
    nome: "Bulbassauro",
    tipo: ["veneno", "planta"],
}

console.log(atributos(bulbassauro));
