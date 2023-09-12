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
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
console.log(menuBtn);

//3.Functions
menuBtn.addEventListener("click", function(){
    //console.log("menu button has been clicked");
    overlay.classList.add("active");
}); //end of menu button click event

closeBtn.addEventListener("click", function(){
    //console.log("close button has been clicked");
    overlay.classList.remove("active");
}); //end of close button click event

//arrays and objects
//basic variables
const coffeeName = "Mocha";
const coffeeHeadline = document.createElement("h2");
coffeeHeadline.textContent = coffeeName;
document.body.appendChild(coffeeHeadline);

//objects
const coffee={
    name: "mocha",
    price: 3.99,
    description: "This is a delicous cup of coffee."
};

//console.log(coffee.name);
const coffeeObjHeadline = document.createElement("h2");
coffeeObjHeadline.textContent = coffee.name;
document.body.appendChild(coffeeObjHeadline);

const coffees=["Mocha","Latte","Espresso"];
//console.log(coffees[0]);

coffees.forEach(function(coffee) {
    console.log(coffee);
});