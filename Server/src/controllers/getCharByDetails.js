const { Character } = require("../DB_connection");

const  getCharByDetails = async (req, res) =>{
  try {
    const {id} = req.params;
    const characterFind = await Character.findByPk(id);
    if(!characterFind) throw Error("No existe el character")
    return res.status(200).json(characterFind);
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

module.exports = getCharByDetails;