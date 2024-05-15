/* 
Use these pages to help you out with Lab 14:
https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/

https://www.w3schools.com/jsref/met_node_appendchild.asp

https://stackoverflow.com/questions/9422974/createelement-with-id 

https://www.tutorialspoint.com/How-to-add-rows-to-a-table-using-JavaScript-DOM
*/


function TeamObject(schoolID, schoolLogoURL, schoolName, conferenceWL, overallWL, lastGame, scoreLast, opponentLast) {
    // Complete this teamObject constructor function using the object model 
    // you developed in step 1; be sure to replace "...parameter list..." with 
    // your parameter list
    let team = {
        schoolID: schoolID,
        schoolLogoURL: schoolLogoURL,
        schoolName: schoolName,
        conferenceWL: conferenceWL,
        overallWL: overallWL,
        lastGame: lastGame,
        scoreLast: scoreLast,
        opponentLast: opponentLast
        // Put your list of valueName: parameterName pairs here
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
    // Create *each* team's 
    //object and push it into the pac12_data array
    // (you're using the constructor function as a parameter to the array.push
    // function); be sure to replace "...parameter list..." with the data 
    // parameter-list order
}


function getColorSelector(id) {
    if (id == "OSU") {
        return "#beavs";
    } else if (id == "UO") {
        return "#ducks";
    } else if (id == "UW") {
        return "#huskies";
    } else if (id == "CAL") {
        return "#oskies";
    } else if (id == "SU") {
        return "#trees";
    } else if (id == "WSU") {
        return "#cougs";
    }
    // Write a getColorSelector function that takes an ID parameter and 
    // returns the CSS selector to use for a particular school's row; 
    // hint:  use branching to determine which selector to return    
}


function fillRow(team) {
    var i = document.querySelector("tbody");
    var img = document.createElement('img');
    img.src = team.schoolLogoURL;
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
    // Write a fillRow function that takes a team object and the <td>s as 
    // paraemters, then fills <td> elements for the current team
}


function addTableRow(teamObj) {
    var table = document.getElementById("pac12-table");
    var tbody = table.querySelector("tbody");
    const row = document.createElement("tr");
    row.id = teamObj.schoolID;
    fillRow(teamObj);
    row.id = getColorSelector();
    tbody.appendChild(row);

    // Write an addTableRow function that takes a team object as its parameter; 
    // the function uses document.appendChild() to insert a new row to the 
    // <tbody> element
    // addTableRow should call getColorSelector to determine which ID to use to 
    // apply the CSS color to the row.
    // Hint:  Remember that in the object model, you select the object 
    // you want to work with, then manipulate it
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