const { Character } = require("../DB_connection");
const { Op } = require("sequelize");


const characterSearch = async (name) =>{
    try {
        if(!name) throw new Error ("Inserte un nombre");
       const chars = await  Character.findAll({
            where: {
              name:{
                [Op.iLike]: `%${name}%`
              }
            }
        });
        if(!chars.length ) throw new Error("El nombre no existe ");
        return chars;
    } catch (error) {
      return error.message;
    }
}

module.exports = characterSearch;