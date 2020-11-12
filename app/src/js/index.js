import $ from 'jquery';

let headerBtnEl;
let headerContentsEl;
let barsEl;

init();
function init() {
    initElements();
    showNavigation();
    barsCross();
}

function initElements() {
    headerBtnEl = $('.btn-wrapper');
    headerContentsEl = $('.header-contents');
    barsEl = $('.bars');
}

function showNavigation(){
    headerBtnEl.click(()=>{
        headerContentsEl.toggleClass('header-slide');
    });
}

function barsCross(){
    barsEl.click(() => {
        barsEl.toggleClass('cross');
    })
}