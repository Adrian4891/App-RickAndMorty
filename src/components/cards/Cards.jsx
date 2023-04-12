import "./cards.css"
import Card from '../card/Card';

export default function Cards({characters,onClose}) {
   return(
      <div className='containerCards'>
         {characters.map(character=>{
            return (
               <Card 
                  key={character.id} 
                  id={character.id}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin}
                  image={character.image}
                  onClose={onClose}
               />       
            )})}
      </div>
   );
}
