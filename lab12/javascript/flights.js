function calcFlightDuration(date1, date2) {
    console.log(date1.getTime() - date2.getTime());
    return date1.getTime() - date2.getTime();
}
const flight1 = {
    airline: "Alaska Air",
    number: 1077,
    origin: "Washington Dulles Intl (KIAD)",
    destination: "San Francisco Intl (KSFO)",
    dep_time: "Wed 07:32PM EST",
    arrival_time: "Wed 10:10PM PST",
    arrival_gate: "A12",
    flight_duration: calcFlightDuration(new Date(dep_time), new Date(arrival_time))
}
document.getElementById("test").innerHTML = flight1.dep_time + ", " + flight1.arrival_time + " = " + flight1.flight_duration;
const flight2 = {
    airline: "Alaska Air",
    number: 1088,
    origin: "San Francisco Intl (KSFO)",
    destination: "Washington Dulles Intl (KIAD)",
    dep_time: "",
    arrival_time: "",
    arrival_gate: "B6",
    flight_duration: 0
}
const flight3 = {
    airline: "Alaska Air",
    number: 1097,
    origin: "Washington Dulles Intl (KIAD)",
    destination: "Los Angeles Intl (KLAX)",
    dep_time: 0,
    arrival_time: 0,
    arrival_gate: 0,
    flight_duration: 0
}
const flight4 = {
    airline: "Alaska Air",
    number: 11,
    origin: "Newark Liberty Intl (KEWR)",
    destination: "Seattle-Tacoma Intl (KSEA)",
    dep_time: 0,
    arrival_time: 0,
    arrival_gate: 0,
    flight_duration: 0
}
const flight5 = {
    airline: "Alaska Air",
    number: 1113,
    origin: "Will Rogers World (KOKC)",
    destination: "Seattle-Tacoma Intl (KSEA)",
    dep_time: 0,
    arrival_time: 0,
    arrival_gate: 0,
    flight_duration: 0
}