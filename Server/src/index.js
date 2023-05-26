const server = require("./app");
const PORT = 3001;
const { sequelize } = require("./DB_connection");
const saveApiData = require("./controllers/saveApiData");

 sequelize.sync({force : false}).then(async()=>{
    await saveApiData()

  server.listen(PORT, ()=>{
    console.log(PORT);
  });
 
});