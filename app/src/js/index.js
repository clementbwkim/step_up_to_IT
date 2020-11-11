import $ from 'jquery';

let headerBtnEl;
let headerContentsEl;

init();
function init() {
    initElements();
    showNavigation();
}

function initElements() {
    headerBtnEl = $('.btn-wrapper');
    headerContentsEl = $('.header-contents');
}

function showNavigation(){
    headerBtnEl.click(()=>{
        headerContentsEl.toggleClass('header-slide');
    });
}