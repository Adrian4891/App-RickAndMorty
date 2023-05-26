import Card from "../card/Card";
import style from "./filterCard.module.css"

const FilterCard = ({filterChars}) =>{
   return(
       <div className={style.container} >
           {filterChars.map((chars)=>{
               return (
                   <Card
                     key={chars.id} 
                     id={chars.id}
                     name={chars.name}
                     status={chars.status}
                     species={chars.species}
                     gender={chars.gender}
                     origin={chars.origin}
                     image={chars.image}
                   />
                );
            })}
       </div> 
   );
}

export default FilterCard;