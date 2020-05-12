/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navMenuItems = document.querySelectorAll('section')
const navMenu = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// check which element is active


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function creatNavMenu() {
    for (let currentItem of navMenuItems) {
        let currentNavMenuItem = document.createElement('li');
        //using html data set property to manipulate DomStringMap
        currentNavMenuItem.className = 'menu__link';
        currentNavMenuItem.dataset.nav = currentItem.id;
        currentNavMenuItem.innerText = currentItem.dataset.nav;
        navMenu.appendChild(currentNavMenuItem);

    };
};

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
creatNavMenu();

// Scroll to section on link click

// Set sections as active
