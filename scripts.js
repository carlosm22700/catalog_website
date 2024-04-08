/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 */

const dishes = [
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

document.addEventListener("DOMContentLoaded", function () {
  showCards();
  const modal = document.getElementById("modal");
  const span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  dishes.forEach((dish) => {
    const cardContent = document.createElement("div");
    cardContent.className = "card";
    cardContent.innerHTML = `<div class="card-content">
            <h2>${dish.name}</h2>
            <img src="${dish.image}" alt="${dish.name} Image">
            <button onclick="showIngredients(${dish.id})">Show Ingredients</button>
            <p>${dish.description}</p>
        </div>`;
    cardContainer.appendChild(cardContent);
  });
}

function showIngredients(dishId) {
  const dish = dishes.find((d) => d.id === dishId);
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

function removeLastCard() {
  dishes.pop();
  showCards();
}

function quoteAlert() {
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function loadMoreDishes() {
  console.log("Load more dishes feature to be implemented.");
}
