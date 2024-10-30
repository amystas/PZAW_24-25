const express = require("express");
const application = express();
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
application.use('/sci/4c/abc', sci_router);
application.listen(8000, () => console.log('server started'));
