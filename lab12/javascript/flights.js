function calcFlightDuration(date1, date2) {
    console.log(date1.getTime() - date2.getTime());
    return date2.getTime() - date1.getTime();
}
const flight1 = {
    airline: "Alaska Air",
    number: 1077,
    origin: "KIAD",
    destination: "KSFO",
    dep_time: "Wed 07:32PM EST",
    arrival_time: "Wed 10:10PM PST",
    arrival_gate: "A12",
    flight_duration: calcFlightDuration(new Date("March 12,2024, 07:32"), new Date("March 12,2024,10:10"))
}
const flight2 = {
    airline: "Alaska Air",
    number: 1088,
    origin: "KSFO",
    destination: "KIAD",
    dep_time: "Wed 03:58PM PST",
    arrival_time: "Wed 11:28PM EST",
    arrival_gate: "B6",
    flight_duration: calcFlightDuration(new Date("March 12,2024, 03:58"), new Date("March 12,2024,11:28"))
}
const flight3 = {
    airline: "Alaska Air",
    number: 1097,
    origin: "KIAD",
    destination: "KLAX",
    dep_time: "Wed 05:06PM EST",
    arrival_time: "Wed 07:24PM PST",
    arrival_gate: "A22",
    flight_duration: calcFlightDuration(new Date("March 12,2024, 05:06"), new Date("March 12,2024,07:24"))
}
const flight4 = {
    airline: "Alaska Air",
    number: 11,
    origin: "KEWR",
    destination: "KSEA",
    dep_time: "Wed 05:00PM EST",
    arrival_time: "Wed 07:27PM PST",
    arrival_gate: "C11",
    flight_duration: calcFlightDuration(new Date("March 12,2024, 05:00"), new Date("March 12,2024,07:27"))
}
const flight5 = {
    airline: "Alaska Air",
    number: 1113,
    origin: "KOKC",
    destination: "KSEA",
    dep_time: "Wed 05:40PM CST",
    arrival_time: "Wed 07:11PM PST",
    arrival_gate: "A12",
    flight_duration: calcFlightDuration(new Date("March 12,2024, 05:40"), new Date("March 12,2024,07:11"))
}
//airline
document.getElementById("airline1").innerHTML = flight1.airline;
document.getElementById("airline2").innerHTML = flight2.airline;
document.getElementById("airline3").innerHTML = flight3.airline;
document.getElementById("airline4").innerHTML = flight4.airline;
document.getElementById("airline5").innerHTML = flight5.airline;
//number
document.getElementById("number1").innerHTML = flight1.number;
document.getElementById("number2").innerHTML = flight2.number;
document.getElementById("number3").innerHTML = flight3.number;
document.getElementById("number4").innerHTML = flight4.number;
document.getElementById("number5").innerHTML = flight5.number;
//origin
document.getElementById("origin1").innerHTML = flight1.origin;
document.getElementById("origin2").innerHTML = flight2.origin;
document.getElementById("origin3").innerHTML = flight3.origin;
document.getElementById("origin4").innerHTML = flight4.origin;
document.getElementById("origin5").innerHTML = flight5.origin;
//destination
document.getElementById("destination1").innerHTML = flight1.destination;
document.getElementById("destination2").innerHTML = flight2.destination;
document.getElementById("destination3").innerHTML = flight3.destination;
document.getElementById("destination4").innerHTML = flight4.destination;
document.getElementById("destination5").innerHTML = flight5.destination;
//deptime
document.getElementById("deptime1").innerHTML = flight1.dep_time;
document.getElementById("deptime2").innerHTML = flight2.dep_time;
document.getElementById("deptime3").innerHTML = flight3.dep_time;
document.getElementById("deptime4").innerHTML = flight4.dep_time;
document.getElementById("deptime5").innerHTML = flight5.dep_time;
//arrival
document.getElementById("arrivaltime1").innerHTML = flight1.arrival_time;
document.getElementById("arrivaltime2").innerHTML = flight2.arrival_time;
document.getElementById("arrivaltime3").innerHTML = flight3.arrival_time;
document.getElementById("arrivaltime4").innerHTML = flight4.arrival_time;
document.getElementById("arrivaltime5").innerHTML = flight5.arrival_time;
//gate
document.getElementById("arrivalgate1").innerHTML = flight1.arrival_gate;
document.getElementById("arrivalgate2").innerHTML = flight2.arrival_gate;
document.getElementById("arrivalgate3").innerHTML = flight3.arrival_gate;
document.getElementById("arrivalgate4").innerHTML = flight4.arrival_gate;
document.getElementById("arrivalgate5").innerHTML = flight5.arrival_gate;
//duration
document.getElementById("duration1").innerHTML = flight1.flight_duration;
document.getElementById("duration2").innerHTML = flight2.flight_duration;
document.getElementById("duration3").innerHTML = flight3.flight_duration;
document.getElementById("duration4").innerHTML = flight4.flight_duration;
document.getElementById("duration5").innerHTML = flight5.flight_duration;
