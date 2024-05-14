/* 
Use these pages to help you out with Lab 14:
https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/

https://www.w3schools.com/jsref/met_node_appendchild.asp

https://stackoverflow.com/questions/9422974/createelement-with-id 

https://www.tutorialspoint.com/How-to-add-rows-to-a-table-using-JavaScript-DOM
*/


function TeamObject( ...parameter list... ) {
    // Complete this teamObject constructor function using the object model 
    // you developed in step 1; be sure to replace "...parameter list..." with 
    // your parameter list
    let team = {
        // Put your list of valueName: parameterName pairs here
    };
    return team;
}


function fillArray() {
    pac12_data.push(TeamObject( ...parameter list... ));  // Create *each* team's 
        //object and push it into the pac12_data array
        // (you're using the constructor function as a parameter to the array.push
        // function); be sure to replace "...parameter list..." with the data 
        // parameter-list order
}


function getColorSelector (id) {
    // Write a getColorSelector function that takes an ID parameter and 
    // returns the CSS selector to use for a particular school's row; 
    // hint:  use branching to determine which selector to return    
}


function fillRow(team) {
    // Write a fillRow function that takes a team object and the <td>s as 
    // paraemters, then fills <td> elements for the current team
}


function addTableRow(teamObj) {
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

fillArray;
var i;  
for (i = 0; i < pac12_data.length; i++) {
    addTableRow(pac12_data[i]); // Add the current team's data to the table
}