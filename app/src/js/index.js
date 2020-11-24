import $ from 'jquery';

let headerBtnEl;
let headerContentsEl;
let barsEl;
let bannerTextEl;
let bannerTextSpanEl;
let bannerKeywordEl;

init();
function init() {
    initElements();
    showNavigation();
    barsCross();
    addClassOn();
}

function initElements() {
    headerBtnEl = $('.btn-wrapper');
    headerContentsEl = $('.header-contents');
    barsEl = $('.bars');
    bannerTextEl = $('.banner-text h2');
    bannerTextSpanEl = $('.banner-text h2 span')
    bannerKeywordEl = $('.banner-text p');
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

function addClassOn() {
    bannerTextEl.addClass('on');
    bannerTextSpanEl.addClass('on');
    bannerKeywordEl.addClass('on');
}
