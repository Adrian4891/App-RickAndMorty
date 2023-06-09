const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character";
const {Character} = require("../DB_connection");

const getApiData = async () =>{
    try {
        let i = 1;
        let characters = [];
        while (i < 6) {
            const apiData = await axios(`${URL}?page=${i}`);
            characters.push(apiData);
            i++;
        }
        characters = (await Promise.all(characters)).map(res=> res.data.
            results.map(char=>{
              return ({
                    id: char.id,
                    name: char.name,
                    status: char.status,
                    species: char.species,
                    gender: char.gender,
                    origin: char.origin.name,
                    image: char.image
                })
           }))
        let allCharacters = [];
        characters.map((char)=> {allCharacters = allCharacters.concat(char)});
        return allCharacters;
    } 
    catch (error) {
        return {error : error.message};
    }
}

const saveApiData = async () =>{
    try {
       const allCharacters = await getApiData();
       await Character.bulkCreate(allCharacters)
       return allCharacters;
    } 
    catch (error) {
        return {error : error.message};
    }
}
module.exports = saveApiData; 
