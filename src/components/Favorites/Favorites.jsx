import { useDispatch, useSelector } from "react-redux";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
const Favorites =()=> {
   //const myFavorites = useSelector(state=> state.myFavorites);
   const { myFavorites} =  useSelector(state=> state)
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

        <div className={style.containerCards}>

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

           {myFavorites.map((favorite)=>{

            return(

               <div className={style.card} key={favorite.id}>

                  <img src={favorite.image} alt={favorite.name}/>

                  <Link to={`/detail/${favorite.id}`}>
                  <h2>{favorite.name}</h2>
                  </Link>

                  <div className={style.info}>
                     <h3>{favorite.gender}</h3>
                     <h3>{favorite.species}</h3>
                  </div> 

               </div>
            )})}
        </div>
    );
}

export default Favorites;