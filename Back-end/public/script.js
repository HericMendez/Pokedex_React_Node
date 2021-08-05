window.onload = pesquisa()
    async function pesquisa(){
    try{
      // const token =  localStorage.getItem('token')
       const result = await fetch('http://localhost:3000/pokedex/name',{
           headers:{
               "Content-Type": "application/json",
               //"authorization": token
           },
       });
       const json = await result.json()
       for (var i = 0; i < json.length; i++){
            var div = document.createElement("div");
            /*
            var name = document.createTextNode(json[i].name + "|    |");
            var type = document.createTextNode(json[i].type + "|    |");
            var description = document.createTextNode(json[i].description + "|    |");

            div.appendChild(name);
            div.appendChild(type);
            div.appendChild(description);

            var divAtual = document.getElementById("div1");
            document.body.insertBefore(div, divAtual);
            */

            var name = document.getElementById('name').value;
            console.log(json[0])
       }
    }catch(err){
        console.log(err)
    }
  }
  function recarregar(){
    window.location.replace("http://127.0.0.1:5501/public/index.html");
  }        
