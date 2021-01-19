import $ from 'jquery';

let mobileMenuEl;
let navItemsEl; 

init();
function init() {
    initElements();
    showNavigation();
    barsCross();
    addClassOn();
}

function initElements() {
    mobileMenuEl = $(".mobile-menu"); 
    navItemsEl = $(".header-nav");
}

function showNavigation(){
    mobileMenuEl.click(()=>{
        navItemsEl.toggleClass('show');
    });
}

