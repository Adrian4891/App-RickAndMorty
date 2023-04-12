import "./card.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const  Card =({id,image,name,status,gender,species,origin,onClose})=> {
   
   const dispatch = useDispatch();
   const myFavorites = useSelector(state=> state.myFavorites)
   const [isFav, setIsFav] = useState(false);

   const handleFavorite =()=> {
    
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(id));
      }
      else {
         setIsFav(true);
      dispatch(addFav({id,image,name,status,gender,species,origin}));
      } 
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className="card">
         <button onClick={()=>onClose(id)} className="btnClose">X</button>
         <img src={image} alt={name}/>
         <Link to={`/detail/${id}`}>
           <h2>{name}</h2>
         </Link>
         <div className="info">
            <h3>{gender}</h3>
            <h3>{species}</h3>
         </div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
      </div>
   );
}


export default Card;