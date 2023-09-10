const moment = require('moment');
const time = new Date();
const today = moment().day();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const profile = {
    slack_name: "Obedsama",
    current_day: daysOfWeek[today],
    utc_time: time.toISOString().slice(0, 19) + 'Z',
    track: "backend",
    github_file_url: "https://github.com/Slimobedsama/hng_backend_task_1/blob/main/server.js",
    github_repo_url: "https://github.com/Slimobedsama/hng_backend_task_1",
    status_code: 200
}
module.exports = profile;