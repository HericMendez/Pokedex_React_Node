//const fetch = require("node-fetch");

async function getContent(){
    let name = document.getElementById("fname").value;
    try{
        const response = await fetch(`http://localhost:5000/pokedex/${name}`)
       // console.log(response)
        const data = await response.json()
        console.log(data)
        show(data)
        
    }catch(error){
        console.error(error);
    }
}

//getContent();


function show(pokemon){

     let output= ''//`<p>Name: ${pokemon.name}<br>  Type: ${pokemon.type}</p>`  
     output = `<ul>`
     output += `<li>Pokémon #${pokemon.number}: ${pokemon.name}</li>`
     output += `<li>Type: ${pokemon.type}</li>`
     output += `<li>Height: ${pokemon.height}, Weight: ${pokemon.weight} </li>`

     output += `<li>Ability: ${pokemon.ability}</li>`
     output += `<li>Description: ${pokemon.description}</li>`
     output += `</ul>`

   document.getElementById('output').innerHTML = output
}
