
export default function Card({id,image,name,status,gender,species,origin,onClose}) {
   return (
      <div className="card">
         <button onClick={()=>onClose(id)}>X</button>
         <img src={image} alt={name}/>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
}
