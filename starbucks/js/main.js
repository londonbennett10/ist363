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


// const basicCoffees = ["mocha","latte","espresso"];
// basicCoffees.forEach(function(basicCoffee) {
//     console.log(basicCoffee);
//}) end of basicCoffee foreach method




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


// const coffees = [
//     {
//         name: 'mocha',
//         price: 3.99,
//         description: "this is a delicous cup of coffee",
//         image:{
//             fileName: "coffee.jpg",
//             width: 630,
//             height:630,
//             altText: "A cup of Coffee"
//         }
//     },

//     {
//         name: 'Latte',
//         price: 3.99,
//         description: "this is a delicous cup of coffee",
//         image:{
//             fileName: "coffee.jpg",
//             width: 630,
//             height:630,
//             altText: "A cup of Coffee"
//         }
//     },

//     {
//         name: 'Espresso',
//         price: 3.99,
//         description: "this is a delicous cup of coffee",
//         image:{
//             fileName: "coffee.jpg",
//             width: 630,
//             height:630,
//             altText: "A cup of Coffee"
//         }
//     }
// ]

function buildTextElement(element, className, content) {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
};

coffees.forEach(function(coffee) {

    const {title, price,description,image} = coffee;
    
    //const coffeeTitle = coffee;
    const coffeeArticle = document.createElement('article');
    coffeeArticle.classList.add("coffee-item");

    const coffeeImage = document.createElement('img');
    //coffeeImage.src = `images/${image.fileName}`;
    coffeeImage.width = image.width;
    coffeeImage.height = image.height;
    coffeeImage.alt = image.altText;

    // const coffeeTitle = document.createElement('h2');
    // coffeeTitle.classList.add("coffee-title");
    // coffeeTitle.textContent = title;

    const coffeeTitle = buildTextElement("h2","coffee-title",title);

    const coffeePrice = buildTextElement("h3","coffee-price",price);
    // const coffeePrice = document.createElement('h3');
    // coffeePrice.classList.add("coffee-price");
    // coffeePrice.textContent=price;
    // coffeePrice.textContent=`$${price}`;
    
    const coffeeDescription = buildTextElement("P","coffee-description",description);
    // const coffeeDescription = document.createElement('p');
    // coffeeDescription.classList.add("coffee-description");
    // coffeeDescription.textContent= description;

    //coffeeArticle.appendChild(coffeeImage);
    coffeeArticle.appendChild(coffeeTitle);
    coffeeArticle.appendChild(coffeePrice);
    coffeeArticle.appendChild(coffeeDescription);

    //conffeeSecondaryHeadline.textContent = coffeeTitle;
    //document.body.appendChild(conffeeSecondaryHeadline);

    document.body.appendChild(coffeeArticle);
});