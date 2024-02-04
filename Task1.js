let a = "PVR Grand";
console.log(a);
// let b = "Salaar Movie";
let b = prompt("Name of the Movie")
document.querySelector("#movie").innerHTML="Movie Name :" + b;
console.log(b);
const TicketPrice = 450;
let m = prompt("Enter number of Persons");
let t = TicketPrice*m;
console.log(t);
alert("Tickets Booked");
document.querySelector("#res").innerHTML="Total Ticket Price is : " + t;
document.querySelector("#mem").innerHTML="Total Number of Members : " + m;