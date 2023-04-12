import { useSelector } from "react-redux";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";
const Favorites =()=> {
   //const myFavorites = useSelector(state=> state.myFavorites);
   const { myFavorites} =  useSelector(state=> state)
   console.log(myFavorites)
   return (
        <div className={style.containerCards}>

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