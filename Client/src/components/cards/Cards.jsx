import style from "./cards.module.css"
import Card from '../card/Card';
import Paginated from '../paginated/paginated';

export default function Cards({characters, onClose, increment, decrement, page}) {
   return(
      <>
         <div className={style.containerCards}>
            {characters.map(character=>{
               return (
                  <Card 
                     key={character.id} 
                     id={character.id}
                     name={character.name}
                     status={character.status}
                     species={character.species}
                     gender={character.gender}
                     origin={character.origin}
                     image={character.image}
                     onClose={onClose}
                  />       
               )})}
         </div>
         <Paginated
           increment={increment}
           decrement={decrement}
           page={page}
         />
      </>
   );
}
