/* Imports */

/* Get DOM Elements */
const cityArticle = document.getElementById('city-article');

const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const climateSelect = document.getElementById('climate-select');
const climateDisplay = document.getElementById('climate-image');
const architectureSelect = document.getElementById('architecture-select');
const architectureDisplay = document.getElementById('architecture-image');
const attractionInput = document.getElementById('attraction-input');
const addButton = document.getElementById('add-button');
const attractionList = document.getElementById('attraction-list');

/* State */
let city = {
    name: 'Cool Town',
    climate: 'desert',
    architecture: 'modern',
    attractions: [],
};

/* Helper Functions */
function pageLoad() {
    displayControls();
    displayCity();
    displayAttractions();
}

/* Events */
nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    pageLoad();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    pageLoad();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    pageLoad();
});

addButton.addEventListener('click', () => {
    if (attractionInput.value !== '') {
        city.attractions.push(attractionInput.value);
        displayAttractions();
        attractionInput.value = '';
    }
});

/* Display Functions */

function displayControls() {
    nameInput.value = city.name;
    climateSelect.value = city.climate;
    architectureSelect.value = city.architecture;
}

function displayCity() {
    nameDisplay.textContent = city.name;
    cityArticle.classList.value = '';
    cityArticle.classList.add(city.climate, city.architecture);
    climateDisplay.src = './assets/climate/' + city.climate + '.jpg';
    architectureDisplay.src = './assets/architecture/' + city.architecture + '.jpg';
}

function displayAttractions() {
    attractionList.innerHTML = '';

    for (const attraction of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attraction;
        attractionList.append(li);
    }
}

// (don't forget to call any display functions you want to run on page load!)
pageLoad();
