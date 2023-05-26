const app = require("../app");
const session = require("supertest");
const request = session(app);

// const character = {    
//     id: 1, 
//     name: 'Rick Sanchez',
//     species: 'Human',
//     origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1'
//     },
//     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     gender: 'Male',
//     status: 'Alive'
// }
// describe("Test de RUTAS", ()=> {
//     describe("GET /rickandmorty/character/:id" , ()=>{
//       it("Responde con status: 200", async ()=>{
//         const response = await request.get('/rickandmorty/character/1');
//         expect( response.statusCode).toBe(200);
//       });
//       it( "Responde un objeto con las propiedades: 'id', 'name', 'species','gender','status', 'origin','image' ",
//       async()=>{
//         const response = await request.get('/rickandmorty/character/1')
//         for(const prop in character){
//             expect(response.body).toHaveProperty(prop);
//         }
//       });
//       it("Si hay un error responde con status: 500 ", async ()=>{
//         const response = await request.get('/rickandmorty/character/133j');
//         expect(response.statusCode).toBe(500);
//       });

      
//     });
// });