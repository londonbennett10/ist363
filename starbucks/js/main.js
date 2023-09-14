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
//const coffeeName = "Mocha";
//const coffeeHeadline = document.createElement("h2");
//coffeeHeadline.textContent = coffeeName;
//document.body.appendChild(coffeeHeadline);

//objects
const coffee={
    name: "mocha",
    price: 3.99,
    description: "This is a delicous cup of coffee."
};

//console.log(coffee.name);
//const coffeeObjHeadline = document.createElement("h2");
//coffeeObjHeadline.textContent = coffee.name;
//document.body.appendChild(coffeeObjHeadline);


const coffees = [
    {
        name: 'mocha',
        price: 3.99,
        description: "this is a delicous cup of coffee",
        image:{
            fileName: "coffee.jpg",
            width: 630,
            height:630,
            altText: "A cup of Coffee"
        }
    },

    {
        name: 'Latte',
        price: 3.99,
        description: "this is a delicous cup of coffee",
        image:{
            fileName: "coffee.jpg",
            width: 630,
            height:630,
            altText: "A cup of Coffee"
        }
    },

    {
        name: 'Espresso',
        price: 3.99,
        description: "this is a delicous cup of coffee",
        image:{
            fileName: "coffee.jpg",
            width: 630,
            height:630,
            altText: "A cup of Coffee"
        }
    }
]

coffees.forEach(function(coffee) {
    const {name, price,description,image} = coffee;
    //const coffeeTitle = coffee;
    const coffeeArticle = document.createElement('article');

    const coffeeImage = document.createElement('img');
    coffeeImage.src = `images/${image.fileName}`;
    coffeeImage.width = image.width;
    coffeeImage.height = image.height;
    coffeeImage.alt = image.altText;

    const coffeeName = document.createElement('h2');
    coffeeName.textContent = name;

    const coffeePrice = document.createElement('h3');
    coffeePrice.textContent=price;

    const coffeeDescription = document.createElement('p');
    coffeeDescription.textContent= description;

    coffeeArticle.appendChild(coffeeImage);
    coffeeArticle.appendChild(coffeeName);
    coffeeArticle.appendChild(coffeePrice);
    coffeeArticle.appendChild(coffeeDescription);

    //conffeeSecondaryHeadline.textContent = coffeeTitle;
    //document.body.appendChild(conffeeSecondaryHeadline);

    document.body.appendChild(coffeeArticle);
});