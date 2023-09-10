const express = require('express');
const app = express();
const moment = require('moment');

const PORT = 3500;
app.use(express.json());

app.get('/api', (req, res)=> {
    const {slack_name, track} = req.query 
    if(!slack_name || !track) {
        return res.status(400).json({message:"Wrong query"});
    }

    const current_day = moment().day()
    const weekOfTheDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const utc_time = moment.utc().format()

    const github_file_url = "https://github.com/Slimobedsama/hng_backend_task_1/blob/main/server.js"
    const github_repo_url = "https://github.com/Slimobedsama/hng_backend_task_1"
    
    const info = {
        slack_name,
        current_day:weekOfTheDays[current_day],
        utc_time,
        track,
        github_file_url,
        github_repo_url,
        status_code:200
    }

    res.status(200).json(info)
})

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));