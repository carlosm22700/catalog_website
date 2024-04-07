/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const CEVICHE_PICTURE_URL = "https://www.laylita.com/recipes/wp-content/uploads/2013/07/2-Peruvian-ceviche.jpg";
const EMPANADAS_PICTURE_URL = "https://tastesbetterfromscratch.com/wp-content/uploads/2020/05/Empanadas-2.jpg";
const TACOS_PICTURE_URL = "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg";
const GALLO_PINTO_PICTURE_URL = "https://www.laylita.com/recetas/wp-content/uploads/2022/06/Gallo-pinto-receta-de-Costa-Rica-y-Nicaragua.jpg";
const FEIJOADA_PICTURE_URL = "https://www.daringgourmet.com/wp-content/uploads/2021/09/Feijoada-3.jpg";

// This is an array of strings (TV show titles)
// Array of objects, each representing a dish
let dishes = [
    {
        name: "Ceviche",
        country: "Peru",
        ingredients: "Fish, Lime, Onion, Cilantro",
        image: CEVICHE_PICTURE_URL,  // Replace with actual image URL
        description: "A refreshing seafood dish marinated in lime juice."
    },
    {
        name: "Empanadas",
        country: "Argentina",
        ingredients: "Beef, Onion, Egg, Dough",
        image: EMPANADAS_PICTURE_URL,  // Replace with actual image URL
        description: "A savory pastry filled with spiced meat and other ingredients."
    },
    {
        name: "Tacos",
        country: "Mexico",
        ingredients: "Corn Tortillas, Beef, Lettuce, Lime",
        image: TACOS_PICTURE_URL,  // Replace with actual image URL
        description: "A traditional Mexican dish consisting of a corn tortilla topped with various fillings."
    },
    {
        name: "Gallo Pinto",
        country: "Nicaragua",
        ingredients: "Rice, Beans, Onion, Bell Pepper",
        image: GALLO_PINTO_PICTURE_URL,  // Replace with actual image URL
        description: "A staple Nicaraguan dish of rice and beans cooked together with onion and bell pepper."
    },
    {
        name: "Feijoada",
        country: "Brazil",
        ingredients: "Black Beans, Pork, Beef, Bacon",
        image: FEIJOADA_PICTURE_URL,  // Replace with actual image URL
        description: "A hearty stew of black beans with pork and beef, traditionally served over rice."
    }
];

// Function to add cards to the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    dishes.forEach(dish => {
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, dish.name, dish.image, dish.country, dish.ingredients, dish.description); // Edit card content
        cardContainer.appendChild(nextCard); // Add new card to the container
    });
}

// Function to edit the content of each card
function editCardContent(card, name, imageURL, country, ingredients, description) {
    card.style.display = "block";

    card.querySelector("h2").textContent = name;
    card.querySelector("img").src = imageURL;
    card.querySelector("img").alt = name + " Image";
    card.querySelector("ul").innerHTML = `
        <li><strong>Country:</strong> ${country}</li>
        <li><strong>Ingredients:</strong> ${ingredients}</li>
        <li>${description}</li>
    `;

    // Debugging output
    console.log("new card:", name, "- html: ", card);
}

// This calls the showCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// Functionality to remove the last dish
function removeLastCard() {
    dishes.pop(); // Remove the last dish from the array
    showCards(); // Refresh the card display
}

// Functionality to display a quote
function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}
