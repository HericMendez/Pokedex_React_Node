import axios from 'axios'

const api = axios.create({baseURL: 'http://localhost:5000'})

const busca = async() =>{
    const resposta = await api.get('/list')

    let values =  resposta.data;

    const lookup = values.reduce((a, e) => {
      a[e.name] = ++a[e.name] || 0;
    
      return a;
    }, {});
    
    
    var newArr = [];
    for(let key in lookup) {
      if (lookup.hasOwnProperty(key)) {
         
        newArr.push({name: key, duplicates: lookup[key]});

    
      }
    }
    
    for(let n=0; n<newArr.length; n++){
      if(newArr[n].duplicates>0){
        console.log(newArr[n])
        console.log(newArr.length)
      }
    }
    
}



console.log(busca())
