import $ from 'jquery';

//elements
let headerBtn;
let contactBtn;
let headerNavigation;
let contactNavigation;

//functions
function crossBtn(){
    headerBtn.click(() => {
        headerBtn.toggleClass('cross')
    })
}
function rotateBtn(){
    contactBtn.click(() => {
        contactBtn.toggleClass('rotate')
    })
}

function activeHeaderNav(){
    headerBtn.click(()=>{
        headerNavigation.toggleClass('hidden');
    });
    
}
function activeContactNav(){
    contactBtn.click(()=>{
        contactNavigation.toggleClass('hidden');
    });
}

init();
function init() {
    initElements();
    initEvents();
}

function initEvents(){
    crossBtn();
    rotateBtn();
    activeHeaderNav();
    activeContactNav();
}
function initElements() {
    headerBtn = $('.header-btn');
    contactBtn = $('.contact-btn');
    headerNavigation = $('.header-navigation');
    contactNavigation = $('.contact-navigation');
};

