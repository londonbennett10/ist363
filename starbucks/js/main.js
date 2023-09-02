//console.log("js has been loaded");

//variables, methods, and functions

//1. variables
const myName = 'London Bennett';
console.log(myName);

const myAge = 21;
const myCity = "Chicago";

const introduction = `Hi, my name is ${myName}, I am ${myAge} years old and I live in ${myCity}.`;

console.log(myCity);
console.log(introduction);

//2. methods
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");
console.log(menuBtn);

//3.Functions
menuBtn.addEventListener("click", function(){
    //console.log("menu button has been clicked");
    overlay.classList.add("active");
}); //end of menu button click event