const {Favorite} = require('../DB_connection');


const postFav = async (character)=>{
    try {
        const {id,name, status, gender, species, origin, image} = character;
        if(!id || !name || !status || !gender || !species || !origin || !image) throw new Error("Faltan datos");
        const newFav = {
            id,
            name,
            status,
            gender, 
            species, 
            origin, 
            image
        }
        await Favorite.create(newFav);
        const allCharacters = await Favorite.findAll();

        return allCharacters;
    } 
    catch (error) {
        return error.message;
    } 
}

const getAllFavorites  = async () =>{
    try {
       const allCharacters = await Favorite.findAll();
        return allCharacters;
    } catch (error) {
        return error.message;
    }
}

const deleteFav = async(id)=>{
    try {
        const characterFav = await Favorite.findByPk(id)
        await characterFav.destroy();
        const allCharacters = await Favorite.findAll();
        return (allCharacters);
    } 
    catch (error) {
        return (error.message);
    }
}

module.exports = {
    postFav,
    deleteFav,
    getAllFavorites
}