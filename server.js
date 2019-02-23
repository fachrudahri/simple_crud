'use strict';
const express = require('express');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
require('./controllers/users')(app);

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}/`);
});

