import { useDispatch, useSelector } from "react-redux";
import style from "./favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import Card from "../card/Card";

const Favorites =()=> {
   //const myFavorites = useSelector(state=> state.myFavorites);
   const { myFavorites} =  useSelector(state=> state);

   const [aux, setAux] = useState(false);

   const dispatch = useDispatch();

   const handleOrder =(event)=>{
     dispatch(orderCards(event.target.value));
     setAux(true);
   }

   const handleFilter =(event)=>{
      dispatch(filterCards(event.target.value))
   }

   return (

      <div className={style.containerFavorites}>
         <div className={style.containerSelects}>
            <select name="" id="" onChange={handleOrder}>
               <option value="A">Ascendente</option>
               <option value="B">DesCendente</option>
            </select>

            <select name="" id="" onChange={handleFilter}>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
               <option value="allCharacters">All Characters</option>
            </select>
         </div> 

         

        { myFavorites.length ? 
            <div className={style.containerCardFav}>
               {myFavorites.map((favorite)=>{
                  
                  return(
                     <Card 
                     key={favorite.id} 
                     id={favorite.id}
                     name={favorite.name}
                     status={favorite.status}
                     species={favorite.species}
                     gender={favorite.gender}
                     origin={favorite.origin}
                     image={favorite.image}
                     />        
                  )})}
            </div>
          : <div className={style.msgFav}>
              <p> No tienes favoritos </p>
            </div> 
         }
      </div>
   );
}

export default Favorites;