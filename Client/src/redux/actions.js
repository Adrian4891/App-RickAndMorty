import { ADD_FAV, REMOVE_FAV,ORDER,FILTER, GET_FAV} from "./actionsTypes";
import axios from "axios";

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   try {
      return async (dispatch) => {
         const {data} = await axios.post(endpoint, character);
         if(!data.length) throw new Error("No  hay favorites!")
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      };  
   } 
   catch (error) {
      console.log(error.mesagge);
   }
};
export const getFav = () => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   try {
      return async (dispatch) => {
         const {data} = await axios(endpoint);
         if(!data.length) throw new Error("No  hay favorites!")
         console.log(data)
         return dispatch({
            type: GET_FAV,
            payload: data,
         });
      };  
   } 
   catch (error) {
      console.log(error.mesagge);
   }
};
export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   try {
      return async (dispatch) => {
         const {data} = await axios.delete(endpoint);
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      };
   }catch (error) {
      console.log(error.message);
   }
};

export const filterCards =(gender)=>{
   return {
      type: FILTER,
      payload : gender
   }
}

export const orderCards =(order)=>{
   return {
      type: ORDER,
      payload : order
   }
}