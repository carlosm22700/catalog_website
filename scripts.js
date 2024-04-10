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
  "It’s not about what you wear, but about how you live your life. — Oscar de la Renta",
  "There is so much fear and hate. We must negate it with active, courageous love. - Alexandra Ocasio-Cortez",
  "We must use our lives to make the world a better place to live, not just to acquire things. That is what we are put on the earth for. - Dolores Huerta",
  "If we want to live in love, we must recognize that we already exist in it. - Rich Villodas",
  "I don’t measure myself by others’ expectations or let others define my worth. - Sonia Sotomayor",
  "It is through art that we will prevail and we will endure. It lives on after us and defines us as people. - Rita Moreno",
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

let dataLoaded = false; // To check if data is already loaded

// Extended data structure
const extendedData = {
  userFavorites: [],
  allDishes: [...favoriteDishes], // Start with favorite dishes in all dishes
  favoriteDishes: [...favoriteDishes],
};

document.addEventListener("DOMContentLoaded", function () {
  initApp();
});

function initApp() {
  displayDishes(
    extendedData.favoriteDishes,
    "favorite-dishes-container",
    "Carlos' Picks"
  );
  displayDishes(
    extendedData.userFavorites,
    "user-favorites-container",
    "My Favorites"
  );
  displayDishes(
    extendedData.allDishes,
    "all-dishes-container",
    "Explore All Dishes"
  );
  attachEventListeners();
}

function displayDishes(dishes, containerId, sectionTitle) {
  const isFavoriteSection = containerId === "user-favorites-container";
  const container = document.getElementById(containerId);
  container.innerHTML = `<h2>${sectionTitle}</h2><div class="cards-container"></div>`;
  const cardsContainer = container.querySelector(".cards-container");

  dishes.forEach((dish) => {
    const card = createCard(dish, isFavoriteSection);
    cardsContainer.appendChild(card);
  });
}

function createCard(dish, isFavoriteSection = false) {
  const card = document.createElement("div");
  card.className = "card";
  let buttonHtml = isFavoriteSection
    ? `<button class="remove-from-favorites" data-id="${dish.id}">Remove from Favorites</button>`
    : `<button class="add-to-favorites" data-id="${dish.id}">Add to Favorites</button>`;

  card.innerHTML = `
        <div class="card-content">
            <h3>${dish.name} - <span class="country-name">${dish.country}</span></h3>
            <img src="${dish.image}" alt="Image of ${dish.name}">
            <p>${dish.description}</p>
            <div class="card-actions">
                <button class="show-ingredients" data-id="${dish.id}">Show Ingredients</button>
                ${buttonHtml}
            </div>
        </div>`;
  return card;
}

function attachEventListeners() {
  document.body.addEventListener("click", function (event) {
    if (event.target.matches(".show-ingredients")) {
      showIngredients(event.target.dataset.id);
    } else if (event.target.matches(".add-to-favorites")) {
      addToFavorites(event.target.dataset.id);
    } else if (event.target.matches(".remove-from-favorites")) {
      removeFromFavorites(event.target.dataset.id);
    }
  });

  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });
}

function showIngredients(dishId) {
  const dish = extendedData.allDishes.find((d) => d.id.toString() === dishId);
  if (dish) {
    document.getElementById(
      "modalIngredients"
    ).textContent = `Ingredients: ${formatIngredients(dish.ingredients)}`;
    document.getElementById(
      "modalTechnique"
    ).textContent = `Technique: ${dish.technique}`;
    document.getElementById("modal").style.display = "block";
  }
}

function addToFavorites(dishId) {
  const dishToAdd = extendedData.allDishes.find(
    (d) => d.id.toString() === dishId
  );
  if (!extendedData.userFavorites.some((d) => d.id.toString() === dishId)) {
    extendedData.userFavorites.push(dishToAdd);
    displayDishes(
      extendedData.userFavorites,
      "user-favorites-container",
      "My Favorites"
    );
    alert("Added to your favorites!");
  } else {
    alert("This dish is already in your favorites!");
  }
}

function formatIngredients(ingredients) {
  return ingredients
    .map((i) => `${i.name} (${i.quantity} ${i.preparation})`)
    .join(", ");
}

function loadMoreDishes() {
  if (!dataLoaded) {
    fetch("moreDishes.json")
      .then((response) => response.json())
      .then((data) => {
        const newDishes = data.filter(
          (d) => !extendedData.allDishes.some((dish) => dish.id === d.id)
        );
        extendedData.allDishes.push(...newDishes);
        displayDishes(
          extendedData.allDishes,
          "all-dishes-container",
          "Explore All Dishes"
        );
        dataLoaded = true;
      })
      .catch((error) => console.error("Error loading dishes:", error));
  } else {
    alert("All dishes are already displayed.");
  }
}

function removeFromFavorites(dishId) {
  const index = extendedData.userFavorites.findIndex(
    (dish) => dish.id.toString() === dishId
  );
  if (index !== -1) {
    extendedData.userFavorites.splice(index, 1);
    displayDishes(
      extendedData.userFavorites,
      "user-favorites-container",
      "My Favorites",
      true
    );
    alert("Removed from your favorites!");
  }
}

function quoteAlert() {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  const quote = QUOTES[randomIndex];
  alert(quote);
}

document.addEventListener("DOMContentLoaded", initApp);
