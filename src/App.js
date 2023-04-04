import './App.css';
import React from "react";
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav.jsx";
import axios from 'axios';

function App() {

   const [characters, setCharacters]= React.useState([]);
 
   const  onSearch =(id)=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose=(id)=>{
      const result = characters.filter(item=>item.id !== Number(id));
      setCharacters(result);
   }

   return (
      <div className='App'>
         <Nav  onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
