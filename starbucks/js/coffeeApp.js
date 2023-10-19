// Create Variables
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

const ascendingBtn = document.getElementById("ascendingBtn");
const descendingBtn = document.getElementById("descendingBtn");
const coffeeList = document.getElementById("coffeeList");
const priceRanges = document.getElementById("priceRanges");
 
let filteredCoffees = [...coffees];
let sortDirection = "ascending";

//build functions

const buildTextElement = (element, className, content) => {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}
const displayList = (arr) => {
    purgeList();
    arr.forEach((coffee) => {
        // 1 . deconstruct the coffee object
        const { title, price, description, image } = coffee;
    
        // 2. create the html elements
        const coffeeArticle = document.createElement("article");
        coffeeArticle.classList.add("coffee-item");
    
        const coffeeImage = document.createElement("img");
        coffeeImage.src = `images/${image.fileName}`;
        coffeeImage.width = image.width;
        coffeeImage.height = image.height;
        coffeeImage.alt = image.altText;
    
        const coffeeTitle = buildTextElement("h2", "coffee-title", title);
        const coffeePrice = buildTextElement("h3", "coffee-price", `$${price}`);
    
        // const coffeeDescription = document.createElement("p");
        // coffeeDescription.classList.add("coffee-description");
        // coffeeDescription.textContent = description;
        const coffeeDescription = buildTextElement("p", "coffee-description", description);
    
        // 3. append the elements to the parent article
        coffeeArticle.appendChild(coffeeImage);
        coffeeArticle.appendChild(coffeeTitle);
        coffeeArticle.appendChild(coffeePrice);
        coffeeArticle.appendChild(coffeeDescription);
    
        // 4. append the article to the body
        coffeeList.appendChild(coffeeArticle);


    }); // end of coffees forEach method
} // displayList function end
const getFilteredCoffees = (minValue,maxValue) => {
    return coffees.filter((coffee) => {
        const { price } =coffee;
        return price >= minValue && price <= maxValue;
    });

};
const purgeList = () => {
    coffeeList.innerHTML = "";
}
const sortListByDirection = (direction, arr) => {
    //console.log({direction});
    sortDirection = direction;
    const sortedListArr = [...arr].sort((a,b) => {
        if (direction === "ascending") {
            if (a.title < b.title) {
                return -1;
            }
        } else {
            if (a.title > b.title) {
                return -1;
            }
        }
    });
    return sortedListArr;
}



// create event listeners

menuBtn.addEventListener("click", function(){
    //console.log("menu button has been clicked");
    overlay.classList.add("active");
}); //end of menu button click event

closeBtn.addEventListener("click", function(){
    //console.log("close button has been clicked");
    overlay.classList.remove("active");
}); //end of close button click event

ascendingBtn.addEventListener("click", function() {
    //console.log("ascending button has been clicked");
    //purgeList();
    const sortedList = sortListByDirection("ascending", filteredCoffees);
    //console.log({sortedList});
    displayList(sortedList);
}); // end of ascendingBtn click event

descendingBtn.addEventListener("click", function() {
    //console.log("descending button has been clicked");
    //purgeList();
    const sortedList = sortListByDirection("descending", filteredCoffees);
   // console.log({sortedList});
    displayList(sortedList);
}); // end of ascendingBtn click event

priceRanges.addEventListener("change", () => {
    console.log("price range changed");
    console.log(event.target.value);
    const selectedRange = event.target.value;
    
    if (selectedRange === "all"){
        //purgeList();
        filteredCoffees = sortListByDirection(sortDirection,[...coffees]);
        
    } else{
        // 2-3 becomes [2,3]
        const [minValue,maxValue] = selectedRange.split("-");

        const tempFilteredCoffees = getFilteredCoffees(minValue,maxValue);
        filteredCoffees = sortListByDirection(sortDirection, tempFilteredCoffees);
        //purgeList();
        
    }// end of conditionl
    displayList(filteredCoffees);
});//end of priceRanges

const sortedStarterList = sortListByDirection(sortDirection, filteredCoffees);
displayList(sortedStarterList);


