import $ from 'jquery';

//elements
let burgerBtnEl;
let navEl;
//functions
function toggleHeaderNav(){
    navEl.classList.toggle('hidden');
}
function crossBar(){
    burgerBtnEl.classList.toggle('cross');
}
init();
function init() {
    initElements(); 
    initEvents();
}

function initEvents(){
    burgerBtnEl.addEventListener('click', toggleHeaderNav);
    burgerBtnEl.addEventListener('click', crossBar);
}
function initElements() {
    burgerBtnEl = document.querySelector('.burger-btn');
    navEl = document.querySelector('.navigation-wrapper');
};

