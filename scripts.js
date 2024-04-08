/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 */

const QUOTES = [
  "Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart. - Wolfgang Puck",
  "The discovery of a new dish does more for the happiness of the human race than the discovery of a star. - Anthelme Brillat-Savarin",
  "Food is our common ground, a universal experience. - James Beard",
];

const favoriteDishes = [
  {
    id: 1,
    name: "Ceviche",
    country: "Peru",
    ingredients: [
      { name: "Fish", quantity: "2 lbs", preparation: "sliced" },
      { name: "Lime", quantity: "10", preparation: "juiced" },
      { name: "Onion", quantity: "1 large", preparation: "thinly sliced" },
      { name: "Cilantro", quantity: "1 bunch", preparation: "chopped" },
    ],
    technique:
      "Marinate all ingredients in lime juice for about 3 hours. Serve chilled.",
    image:
      "https://www.laylita.com/recipes/wp-content/uploads/2013/07/2-Peruvian-ceviche.jpg",
    description: "A refreshing seafood dish marinated in lime juice.",
  },
  {
    id: 2,
    name: "Empanadas",
    country: "Argentina",
    ingredients: [
      { name: "Beef", quantity: "1 lb", preparation: "ground" },
      { name: "Onion", quantity: "2 medium", preparation: "finely chopped" },
      { name: "Egg", quantity: "1", preparation: "beaten" },
      { name: "Dough", quantity: "3 cups", preparation: "rolled out" },
    ],
    technique:
      "Fill dough with meat mixture, fold into half-moons, and bake until golden.",
    image:
      "https://tastesbetterfromscratch.com/wp-content/uploads/2020/05/Empanadas-2.jpg",
    description:
      "A savory pastry filled with spiced meat and other ingredients.",
  },
  {
    id: 3,
    name: "Tacos",
    country: "Mexico",
    ingredients: [
      { name: "Corn Tortillas", quantity: "12", preparation: "heated" },
      { name: "Beef", quantity: "1 lb", preparation: "cooked and seasoned" },
      { name: "Lettuce", quantity: "1 head", preparation: "shredded" },
      { name: "Lime", quantity: "2", preparation: "cut into wedges" },
    ],
    technique:
      "Assemble tacos with beef and toppings on tortillas. Serve with lime wedges.",
    image:
      "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg",
    description:
      "A traditional Mexican dish consisting of a corn tortilla topped with various fillings.",
  },
  {
    id: 4,
    name: "Gallo Pinto",
    country: "Nicaragua",
    ingredients: [
      { name: "Rice", quantity: "2 cups", preparation: "cooked" },
      { name: "Beans", quantity: "2 cups", preparation: "cooked" },
      { name: "Onion", quantity: "1 medium", preparation: "chopped" },
      { name: "Bell Pepper", quantity: "1", preparation: "chopped" },
    ],
    technique:
      "Saute onion and bell pepper, then mix with rice and beans. Serve hot.",
    image:
      "https://www.laylita.com/recetas/wp-content/uploads/2022/06/Gallo-pinto-receta-de-Costa-Rica-y-Nicaragua.jpg",
    description:
      "A staple Nicaraguan dish of rice and beans cooked together with onion and bell pepper.",
  },
  {
    id: 5,
    name: "Feijoada",
    country: "Brazil",
    ingredients: [
      {
        name: "Black Beans",
        quantity: "3 cups",
        preparation: "soaked overnight",
      },
      { name: "Pork", quantity: "1 lb", preparation: "cubed" },
      { name: "Beef", quantity: "1 lb", preparation: "cubed" },
      { name: "Bacon", quantity: "4 strips", preparation: "diced" },
    ],
    technique:
      "Simmer all ingredients until meat is tender and beans are creamy. Serve over rice.",
    image:
      "https://www.daringgourmet.com/wp-content/uploads/2021/09/Feijoada-3.jpg",
    description:
      "A hearty stew of black beans with pork and beef, traditionally served over rice.",
  },
];

const extendedData = {
  userFavorites: [],
  allDishes: [],
  favoriteDishes: favoriteDishes,
};

document.addEventListener("DOMContentLoaded", function () {
  showCards(); // Initially shows the favorite dishes
});

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing cards
  favoriteDishes.forEach((dish) => {
    const cardContent = document.createElement("div");
    cardContent.className = "card";
    cardContent.innerHTML = `
      <div class="card-content">
        <h2>${dish.name}</h2>
        <img src="${dish.image}" alt="${dish.name} Image">
        <button class="show-ingredients" data-id="${dish.id}">Show Ingredients</button>
        <p>${dish.description}</p>
      </div>`;
    cardContainer.appendChild(cardContent);
  });
  attachIngredientEventListeners(); // Attach event listeners after the HTML is added to the DOM
}

function attachIngredientEventListeners() {
  const buttons = document.querySelectorAll(".show-ingredients"); // Get all buttons
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const dishId = parseInt(this.getAttribute("data-id"), 10);
      showIngredients(dishId);
    });
  });
}

function showIngredients(dishId) {
  const dish = favoriteDishes.find((d) => d.id === dishId); // Ensure this is finding the correct dish
  document.getElementById(
    "modalIngredients"
  ).innerHTML = `Ingredients: ${dish.ingredients
    .map((i) => `${i.name} (${i.preparation})`)
    .join(", ")}`;
  document.getElementById(
    "modalTechnique"
  ).textContent = `Technique: ${dish.technique}`;
  document.getElementById("modal").style.display = "block";
}

function loadMoreDishes() {
  fetch("moreDishes.json")
    .then((response) => response.json())
    .then((data) => {
      extendedData.allDishes = data; // Load more dishes into the allDishes array
      displayAllDishes(); // Function to display these dishes
    })
    .catch((error) => console.error("Error loading dishes:", error));
}

function displayAllDishes() {
  const allDishesContainer = document.getElementById("all-dishes-container");
  allDishesContainer.innerHTML = ""; // Clear existing dishes
  extendedData.allDishes.forEach((dish) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<div class="card-content">
            <h2>${dish.name}</h2>
            <img src="${dish.image}" alt="${dish.name} Image">
            <button onclick="showIngredients(${dish.id})">Show Ingredients</button>
            <p>${dish.description}</p>
        </div>`;
    allDishesContainer.appendChild(card);
  });
}

// TODO:
// 1. Add a function to close the modal when the close button is clicked.
// 2. Add a function to close the modal when the user clicks outside the modal.
// 3. Add a function to add a dish to the userFavorites array when the "Add to Favorites" button is clicked.
// 4. Add a function to display a quote when the "Show Quote" button is clicked.
// 5. Fix the showIngredients function to display the correct dish information for extended data.
