
async function getContent(){
  let name = document.getElementById("fname").value;
  try{
      const response = await fetch(`http://localhost:5000/pokemon/${name}`)
     // console.log(response)
      const data = await response.json()
      //console.log(data)
      show(data)
      findPic(data.nameid)      
      
  }catch(e){
      console.error(e);
      e.reload()
  }
}


const findPic = (pic) => {
  let imgLink;

  let pokemonName = document.getElementById("fname").value;

  imgLink = `https://img.pokemondb.net/artwork/${pic}.jpg`;
 
  const img = document.getElementById("imageid");
  img.setAttribute("src", imgLink);
  img.setAttribute("width", "304");
  img.setAttribute("height", "228");
  img.setAttribute("alt", "Faiô");
  img.setAttribute("style", "border-style: solid; border-radius: 5px; padding: 10px; background-color: white;")

  img.src = imgLink;
  
};


function show(pokemon){


   let profile = ''//`<p>Name: ${pokemon.name}<br>  Type: ${pokemon.type}</p>` 
  
   profile += `<ul>`
   profile += `<h6>Gen1</h6>`
   profile += `<h4>#${pokemon.number}: ${pokemon.name}</h4>`
   profile += `<li><strong>Type:</strong> ${pokemon.type}</li>`
   profile += `<li><strong>Height:</strong> ${pokemon.height}, <strong>Weight:</strong> ${pokemon.weight}</li>`
   profile += `<li><strong>Species:</strong> ${pokemon.species}</li>`


   profile += `<li><strong>Ability:</strong> ${pokemon.ability}</li>`
   profile += `<li><strong>Description:</strong> ${pokemon.description}</li>`
   profile += `</ul>`

   let atk = `
   
   <ul>
   <h6>Offensive Attributes:</h6>
   <li><strong>Super Effective:</strong></li>
   <p>${pokemon.superEffective}</p>
   <li><strong>Not Very Effective:</strong></li>
   <p>${pokemon.notVeryEffective}</p>
   <li><strong>Has no Effect:</strong></li>
   <p>${pokemon.noEffect}</p>


   </ul>
   
   `

   let def = `
   
   <ul>
   <h6>Defensive Attributes:</h6>
   <li><strong>Resist:</strong></li>
   <p>${pokemon.resist}</p>
   <li><strong>Weak:</strong></li>
   <p>${pokemon.weak}</p>
   <li><strong>Immune:</strong></li>
   <p>${pokemon.immune}</p>


   </ul>
   
   `
   



   
 
   
 document.getElementById('output').innerHTML = profile
 document.getElementById('atk').innerHTML = atk
 document.getElementById('def').innerHTML = def
}
