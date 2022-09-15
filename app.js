/* Imports */

/* Get DOM Elements */
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const climateSelect = document.getElementById('climate-select');
const climateDisplay = document.getElementById('climate-image');
const architectureSelect = document.getElementById('architecture-select');
const architectureDisplay = document.getElementById('architecture-image');
const cityArticle = document.getElementById('city-article');

/* State */
let city = {
    name: 'Cool Town',
    climate: 'desert',
    architecture: 'modern',
    attractions: [],
};

/* Helper Functions */
function pageLoad() {
    displayCity();
}

/* Events */
nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

/* Display Functions */
function displayCity() {
    nameDisplay.textContent = city.name;
    cityArticle.classList.value = '';
    cityArticle.classList.add(city.climate, city.architecture);
    climateDisplay.src = './assets/climate/' + city.climate + '.jpg';
    architectureDisplay.src = './assets/architecture/' + city.architecture + '.jpg';
}

// (don't forget to call any display functions you want to run on page load!)
pageLoad();
