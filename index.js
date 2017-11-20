const award = require('./award.json');
const {groups, awards} = award;

const contest = require('./contest.json');
const teamIdToObj = contest.teams.reduce((acc, cur) => {
    let name = cur.name, group = cur.group;
    if (!group){
        let res = /^([^(]+)\(([^)]*)\)$/.exec(cur.name);
        if (res){
            try{
                name = res[1].trim();
                group = res[2].trim();
            }catch(err){
                group = '';
            }
        }else{
            group = '';
        }
    }
    if (groups[group])
        group = groups[group];
    acc[cur.id] = {name, group};
    return acc;
}, {});

let award_slide = [];
for (let award of awards){
    const {rank, icon, teams} = award;
    for (let teamid of teams){
        let team = teamIdToObj[teamid];
        award_slide.push({
            id: teamid,
            rank,
            icon,
            name: team.name,
            group: team.group,
        });
    }
}

const fs = require('fs');
fs.writeFile('award_slide.json', JSON.stringify(award_slide, null, 4), err => {
    if (err) return console.error(err);
    console.log('award_slide.json saved');
});
