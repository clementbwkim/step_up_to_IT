
//elements
let burgerBtnEl;
let navEl;

init();

function init() {
    initElements(); 
    initEvents();
}

function initElements() {
    burgerBtnEl = document.querySelector('.burger-btn');
    navEl = document.querySelector('.navigation-wrapper');
};

function initEvents(){
    burgerBtnEl.addEventListener('click', toggleHeaderNav);
    burgerBtnEl.addEventListener('click', crossBar);
}

//functions
function toggleHeaderNav(){
    navEl.classList.toggle('hidden');
}
function crossBar(){
    burgerBtnEl.classList.toggle('cross');
}

