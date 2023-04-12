import axios from "axios";
import "./detail.css"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const Detail =()=> {

  const [character, setCharacter] = useState({});
  
  let { id } = useParams();

  useEffect(()=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.name) { 
        setCharacter(data);
      } else {
        alert('No hay personajes con ese ID');
      }
    });
   return setCharacter({});
  },[id]);

  return(
    <div className="containerDetails">
        <div className="details"> 
           <h1>{character?.name}</h1>
           <h3>STATUS | {character?.status}</h3> 
           <h3>GENDER | {character?.gender}</h3>
           <h3>SPECIES | {character?.species}</h3>
           <h3>ORIGIN | {character.origin?.name}</h3> 
        </div>
        <div>

           <img src={character?.image} alt={character?.name} />
        </div>
    </div>
  );
}

export default Detail;