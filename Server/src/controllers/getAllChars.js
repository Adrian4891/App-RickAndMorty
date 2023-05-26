const { Character } = require("../DB_connection");
  
const getAllChars = async (req, res) =>{
  try {
    const { page } = req.query;
    const pageSize = 10;
    const offset = (parseInt(page) -1) * pageSize;
    const characters = await Character.findAll({
      limit: pageSize,
      offset: offset,
      order: [["id", 'ASC']],
    });
    return  res.status(200).json(characters);
  } 
  catch (error) {
    return res.status(404).send(error.message); 
  }
}

module.exports = getAllChars;