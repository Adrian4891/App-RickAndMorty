import './App.css';
import React,{useEffect} from "react";
import {Routes,Route,useNavigate} from 'react-router-dom';
import axios from 'axios';
import Form from './components/loginForm/Form';
import Cards from './components/cards/Cards';
import Nav from "./components/nav/Nav";
import Detail from './components/detail/Detail';
import About from './components/about/About';
import Favorites from './components/Favorites/Favorites';
import NotFound from './components/notFound/NotFound';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';


function App() {

   const EMAIL = 'adrian@gmail.com';
   const PASSWORD = 'adrian37';
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [characters, setCharacters]= React.useState([]);
   const [access, setAccess] = React.useState(false);
 
   const login =(userData)=> {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate("/home");
      }
   }

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
      dispatch(removeFav(id));
      const result = characters.filter(item=>item.id !== Number(id));
      setCharacters(result);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (  

      <>
         <Nav onSearch={onSearch} setAccess={setAccess} />       
         <Routes>
            <Route path="/" element={<Form login={login} />}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path="*"  element={<NotFound/>}/>
         </Routes> 
      </>
   );
}

export default App;
    
