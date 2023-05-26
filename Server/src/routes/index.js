const { deleteFav, postFav, getAllFavorites} = require("../controllers/handleFavorites");
const {login} = require("../controllers/login");
const express = require("express"); 
const getAllChars = require("../controllers/getAllChars");
const characterSearch = require("../controllers/searchCharacters");
const getCharByDetails = require("../controllers/getCharByDetails");

router = express.Router();

/* Function que se encarga de traer los personajes de la base de datos*/ 

router.get("/allCharacters",getAllChars);

/* Function de logeo */ 

router.get("/login", (req, res)=>{
  login(req, res);
});

/* Function que obtiene los favorites en la DB*/

router.get("/fav", async(req, res)=>{
  try {
    const allCharacters = await getAllFavorites();
    if(allCharacters.error) throw allCharacters.error;
    return res.status(200).json(allCharacters);
  } 
  catch (error) {
    res.status(404).send(error.message);
  }
});

/* Function que postea los favorites en la DB*/

router.post("/fav", async (req, res)=>{
  try {
      const newFav = await postFav(req.body);
      if(newFav.error) throw newFav.error;
      return res.status(200).json(newFav);
    } 
    catch (error) {
      return res.status(404).send(error.message);
    }
});

/* Function que elimina los favorites en la DB*/


router.delete("/fav/:id",  async (req, res)=>{
  try {
    const {id} = req.params;
    const favDelete = await deleteFav(parseInt(id));
    if(favDelete.error) throw ("Favorite not found");
    return res.status(200).json(favDelete);
  } catch (error) {
    res.status(404).send(error.message)
  }
});

/* Function que busca  charaters en la DB*/


router.get("/character/", async (req, res)=>{
  const {name} = req.query;
  try {
    const characters = await characterSearch(name);
    if(characters.error ) throw characters.error;
    return res.status(200).json(characters);
  } 
  catch (error) {
    return res.status(404).send(error.message);
  }
});

/* Function que busca  un character en la DB para el componente detail*/

router.get("/character/:id", getCharByDetails);

module.exports = router;