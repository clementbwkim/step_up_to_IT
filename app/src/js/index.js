import $ from 'jquery';

//elements
let headerBtnEl;
let headerNavEl;
//functions
function toggleHeaderNav(){
    headerNavEl.classList.toggle('hidden');
}
function crossBar(){
    headerBtnEl.classList.toggle('cross');
}
init();
function init() {
    initElements(); 
    initEvents();
}

function initEvents(){
    headerBtnEl.addEventListener('click', toggleHeaderNav);
    headerBtnEl.addEventListener('click', crossBar);
}
function initElements() {
    headerBtnEl = document.querySelector('.header-btn');
    headerNavEl = document.querySelector('.header-navigation');
};

