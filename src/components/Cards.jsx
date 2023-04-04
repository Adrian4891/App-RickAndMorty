import Card from './Card';

export default function Cards({characters,onClose}) {
   return(
      <div className='containerCard'>
         {characters.map(character=>{
            return (
               <Card 
                  key={character.id} 
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.name.origin}
                  image={character.image}
                  onClose={onClose}
               />       
            )})}
      </div>
   );
}
