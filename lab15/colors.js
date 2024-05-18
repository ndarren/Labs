
function TeamObject(schoolID, schoolLogoURL, schoolName, conferenceWL, overallWL, lastGame, scoreLast, opponentLast) {

    let team = {
        schoolID: schoolID,
        schoolLogoURL: schoolLogoURL,
        schoolName: schoolName,
        conferenceWL: conferenceWL,
        overallWL: overallWL,
        lastGame: lastGame,
        scoreLast: scoreLast,
        opponentLast: opponentLast
    };
    return team;
}


function fillArray() {
    pac12_data.push(TeamObject("UO", "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-oregon-color-2019.png", "OREGON", "7-2", "10-4", "L", "32-47", "OKLA"));
    pac12_data.push(TeamObject("WSU", "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/washington-state-logo-color-out_2.png", "WASHINGTON STATE", "6-3", "7-6", "L", "21-24", "CMU"));
    pac12_data.push(TeamObject("OSU", "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-oregon-state-color-2019.png", "OREGON STATE", "5-4", "7-6", "L", "13-24", "USU"));
    pac12_data.push(TeamObject("CAL", "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-california-color-2019.png", "CALIFORNIA", "4-5", "7-6", "W", "24-14", "USC"));
    pac12_data.push(TeamObject("UW", "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-washington-color-2019.png", "WASHINGTON", "3-6", "4-8", "L", "13-40", "WSU"));
    pac12_data.push(TeamObject("SU", "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-stanford-color-2019.png", "STANFORD", "2-7", "3-9", "L", "14-45", "ND"));
}


function getColorSelector(id) {
    if (id == "OSU") {
        return "beavs";
    } else if (id == "UO") {
        return "ducks";
    } else if (id == "UW") {
        return "huskies";
    } else if (id == "CAL") {
        return "oskis";
    } else if (id == "SU") {
        return "trees";
    } else if (id == "WSU") {
        return "cougs";
    }
}


function fillRow(team) {
    //selecting corresponding team id
    var i = document.querySelector("tbody #" + getColorSelector(team.schoolID));
    //img tag set up for src
    var img = document.createElement('img');
    img.src = team.schoolLogoURL;
    //rest is just adding text
    var name = document.createElement('td');
    name.innerHTML = team.schoolName;
    var conf = document.createElement('td');
    conf.innerHTML = team.conferenceWL;
    var overall = document.createElement('td');
    overall.innerHTML = team.overallWL;
    var last = document.createElement('td');
    last.innerHTML = team.lastGame + " " + team.scoreLast + " " + team.opponentLast;
    i.appendChild(img);
    i.appendChild(name);
    i.appendChild(conf);
    i.appendChild(overall);
    i.appendChild(last);
}


function addTableRow(teamObj) {
    var table = document.getElementById("pac12-table");
    var tbody = table.querySelector("tbody");
    const row = document.createElement("tr");
    //setting the id to right css id
    row.id = getColorSelector(teamObj.schoolID);
    tbody.appendChild(row);
    fillRow(teamObj);
}


// ==============================================================================
// This is the part of the code that actually does the work, by calling all the 
// functions we've created

let pac12_data = [];  // Declaration of empty array you'll be pushing your objects to
fillArray();
var i;
for (i = 0; i < pac12_data.length; i++) {
    addTableRow(pac12_data[i]);
    // Add the current team's data to the table
}