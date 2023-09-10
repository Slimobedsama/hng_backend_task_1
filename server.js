const express = require('express');
const app = express();
const profile = require('./myFile');

const PORT = 3500;
app.use(express.json());

app.get('/api', (req, res)=> {
   const {slack_name, track} = req.query;
   if(!slack_name || !track) {
    return res.status(400).json({message: "Wrong query"});
   }
    res.json(profile);
})

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));