const day = new Date();
const today = day.getDay();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const profile = [{
    slack_name: 'Obedsama',
    current_day: daysOfWeek[today],
    utc_time: new Date(),
    track: 'backend',
    github_file_url: 'git',
    github_repo_url: 'git.com',
    status_code: 200
}]
module.exports = profile;