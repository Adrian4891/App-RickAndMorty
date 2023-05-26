//import './App.css';
import React,{useEffect,useState} from "react";
import {Routes,Route,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFav } from "./redux/actions";
import axios from 'axios';
import Form from './components/loginForm/Form';
import Cards from './components/cards/Cards';
import Nav from "./components/nav/Nav";
import Detail from './components/detail/Detail';
import About from './components/about/About';
import Favorites from './components/Favorites/Favorites';
import NotFound from './components/notFound/NotFound';
import FilterCard from './components/filtersCards/FilterCard';
import MenuMobile from "./components/menuMobile/MenuMobile";

const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [characters, setCharacters]= useState([]);
   const [access, setAccess] = useState(false);
   const [filterChars, setFilterChars] = useState([]);
   const [hiden, setHiden] = useState(false);
   let [page, setPage] = useState(1);

   let URL_DATA = "";
 
   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await axios(`${URL}?email=${email}&password=${password}`);
         const { access } = data;    
         setAccess(access);
         access && navigate('/home');
      } 
      catch (error) {
         console.log(error.mesagge);
      }
   }

   const  onSearch = async (name) =>{
      try {
         const response = await axios(`http://localhost:3001/rickandmorty/character/?name=${name}`)
         const {config}= response;
         URL_DATA = config.url.slice(34)
         const {data} = response;
         if (!data[0].name) throw Error ("No se encontraron personajes");
         setFilterChars(data);
         navigate(URL_DATA);
      } 
      catch(error) {
         setFilterChars([]);
         alert(error.message);
         navigate("/home")
      }
   }

   const  getChars = async () =>{
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/allCharacters?page=${page}`);
         if(!data.length) throw new Error("Error Data");
         setCharacters(data);
         dispatch(getFav());
      } 
      catch(error) {
         console.log(error.message);
      }
   }

   const onClose=(id)=>{
      const result = characters.filter(item=>item.id !== Number(id));
      setCharacters(result);
   }

   const menuHiden = () => {
      if (hiden) {
          setHiden(false)
      }
      else setHiden(true);
  }

  const increment = () =>{
     if(page < 20){
        setPage(++page)
        getChars();
     }
  }

   const decrement = () => {
      if(page > 1 ){
         setPage(--page)
         getChars();
      }  
   }

   useEffect(() => { 
      getChars();
   },[]);

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (  

      <>
         <Nav onSearch={onSearch} setAccess={setAccess} menuHiden={menuHiden}/>       
         <MenuMobile setAccess={setAccess} menuHiden={menuHiden} hiden={hiden}/>
         <Routes>
            <Route path="/" element={<Form login={login} />}/>
            <Route path="/home" element={<Cards characters={characters} 
             onClose={onClose} increment={increment} decrement={decrement} page={page}/>}
            />
            <Route path={`/character${URL_DATA}`} element={<FilterCard filterChars={filterChars}/>}/> 
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path="*"  element={<NotFound/>}/>
         </Routes> 
      </>
   );
}

export default App;
    
