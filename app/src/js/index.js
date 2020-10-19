import $ from 'jquery';

//elements
let barEl;
let navEl;

//functions
function toggleNav (){
    barEl.classList.toggle('cross')
    navEl.classList.toggle('hidden');
}


init();
function init() {
    initElements();
    initEvents();
}

function initEvents(){
    barEl.addEventListener('click', toggleNav);
}
function initElements() {
    barEl = document.querySelector('.bar');
    navEl = document.querySelector('.navigation');
};