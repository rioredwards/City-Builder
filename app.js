/* Imports */

/* Get DOM Elements */
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');

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

/* Display Functions */
function displayCity() {
    nameDisplay.textContent = city.name;
}

// (don't forget to call any display functions you want to run on page load!)
pageLoad();
