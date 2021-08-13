import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import '../assets/css/post.css'

import { busca } from "../api/api"
import SearchBar from "../components/SearchBar/SarchBar"

const PokemonProfile = () =>{
    

     
     const {name} = useParams();
     const[post, setPost] = useState([]) 
        let charmander = 'charmander'
     useEffect(()=>{
         busca(`/pokemon/${name}`, setPost)
         
     }, [name])

     console.log(post)
     return(
        <main className="container flex flex--centro">
            <article className='cartao post'>
                <h2 className='cartao__titulo'>{post.name}</h2>
                <p className='cartao__texto'>{post.type}</p>
                <p className='cartao__texto'>{post.description}</p>
            </article>
        </main>
     )
}



export default PokemonProfile;