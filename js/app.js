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
function sectionIsInViewPort(){
    //default value is first item
    let selectedSection = navMenu[0];
    for (let currentItem of navMenuItems) {
        if(sectionIsInViewBoundingBox(currentItem)){
            selectedSection = currentItem;
        }
    };

    return selectedSection;
}

//getting height, width, top, bottom, right
function sectionIsInViewBoundingBox(presentSection) {
    //get bounding rectangle for section
    const bounding = presentSection.getBoundingClientRect();
    //returns true if in viewport
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//deactivate element out of viewport
function deActivateSectionsNotInViewPort() {
    for (let currentItem of navMenuItems) {
        if (currentItem.id != navMenuItems.id & currentItem.classList.contains('your-active-class')) {
            currentItem.classList.remove('your-active-class');
        }
    }
};




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function creatNavMenu() {

    const menuItemToCreate = 'li';
    const menuItemClassName = 'menu__link';

    for (let currentItem of navMenuItems) {
        let currentNavMenuItem = document.createElement(menuItemToCreate);
        //using html data set property to manipulate DomStringMap
        currentNavMenuItem.className = menuItemClassName;
        currentNavMenuItem.dataset.nav = currentItem.id;
        currentNavMenuItem.innerText = currentItem.dataset.nav;
        navMenu.appendChild(currentNavMenuItem);

    };
};

// Add class 'active' to section when near top of viewport
function bringActiveSectionToViewPort(){

    const designatedEvent = 'scroll';

    window.addEventListener(designatedEvent, () => {
        console.log('scroll is working');
        presentSection = sectionIsInViewPort();
        if (sectionIsInViewPort(presentSection)) {
            deActivateSectionsNotInViewPort();
            presentSection.classList.add("your-active-class");
        } 
    });
}

// Scroll to anchor ID using scrollTO event
function scrollToSection() {

    const designatedEvent = 'click';

    //add smooth scroll through style sheet to improve ux

    navMenu.addEventListener(designatedEvent, function (event) {
        const clickedSection = document.querySelector(`#${event.target.dataset.nav}`)
        clickedSection.scrollIntoView();
    });
};




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
creatNavMenu();

// Scroll to section on link click
scrollToSection();

// Set sections as active
bringActiveSectionToViewPort();
