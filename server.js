const express = require('express');
const server = express();
const port = 4000;

server.use(express.json());

let OBJECT_RESULT;

server.get('/*', (req, res) => {
    if (OBJECT_RESULT) {
        res.status(200)
           .send(JSON.stringify(OBJECT_RESULT));
        return;
    }
    
    res.status(200)
       .send('null');
});

server.post('/*', (req, res) => {
    if (!OBJECT_RESULT) {
        OBJECT_RESULT = {...req.body};
        res.status(200)
           .send('ok');
        return;
    }
    
    res.status(400)
       .send();
});

server.put('/*', (req, res) => {
    if (OBJECT_RESULT) {
        OBJECT_RESULT = {...req.body};
        res.status(200)
           .send('ok');
        return;
    }
    
    res.status(400)
       .send();
});

server.patch('/*', (req, res) => {
    if (OBJECT_RESULT) {
        OBJECT_RESULT = {...OBJECT_RESULT, ...req.body};
        res.status(200)
           .send('ok');
        return;
    }
    
    res.status(400)
       .send();
});

server.listen(port, () => {
    console.log(`Example http://localhost:${port}`)
})
