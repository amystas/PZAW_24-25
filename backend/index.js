const express = require("express");
const application = express();
const cors = require('cors')
application.use(cors());
const users = []
application.use(express.json());
application.post("/register", (request, response) => {
    console.log(request.body);
    users.push(request.body)
    response.send();
})
application.get("/register", (request, response) => {
    
    response.send(users);
})

application.get('/', (request, response) => {
    response.send("<div>lorem ipsum</div>");
});
application.get('/abc', (request, response) => {
    response.status(500);
    response.send("<div>get</div>");
});
application.post('/def', (request, response) => {
    response.status(500);
    response.send("<div>post</div>");
});
application.put('/ghi', (request, response) => {
    response.status(500);
    response.send("<div>put</div>");
});
application.delete('/jkl', (request, response) => {
    response.status(500);
    response.send("<div>delete</div>");
});
// sci/4c/abc
const sci_router = express.Router();
sci_router.get('/', (request, response) => {
    response.send('<div>sci sent</div>')
})
const data = [{key1: "text", key2: 10}]
sci_router.get('/json', (request, response) => {
    response.json(data)
})

// --- pokemon ---
const pokemon_router = express.Router();
const types = require('./types.json');
const pokedex = require('./pokedex.json');
pokemon_router.use(express.json());

pokemon_router.get('/types', (request, response) => {
    response.json(types);
});

pokemon_router.get('/:id', (request, response) => {
    response.json(pokedex.find(pokemon => pokemon.id == request.params['id']));
});

pokemon_router.get('/type/:type', (request, response) => {
    response.json(pokedex.filter(pokemon => pokemon.type.includes(request.params['type'])));
});

pokemon_router.get('/images/:id', (request, response) => {
    response.json({ url: request.params['id'].padStart(3,"0") + ".png"})
});

application.use('/pokemon', pokemon_router);
// --------------

application.use('/sci/4c/abc', sci_router);
application.listen(8000, () => console.log('server started'));
