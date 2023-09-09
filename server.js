const express = require('express');
const app = express();
const profile = require('./myFile');

const PORT = 3500;
app.use(express.json());

app.get('/api', (req, res)=> {
    const file = profile;
    res.json(file);
})

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));