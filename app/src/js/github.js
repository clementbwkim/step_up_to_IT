import $ from 'jquery';

//elements
let inputPriceEl;
let buyBtnEl; 
let myLottosBoxEl;
let compareBtnEl; 
let winLottoBoxEl; 
let resultDisplayBoxEl;

const winningAmount = {
    win3: 5000,
    win4: 50000,
    win5: 1500000,
    win6: 2000000000,
  };
//functions
init();
function init(){
    initElements();
    initEvents();
}

function initEvents(){

}
function initElements(){
    inputPriceEl = document.querySelector('.input-price');
    buyBtnEl = document.querySelector('.buy-btn');
    myLottosBoxEl = document.querySelector('.my-lottos');
    compareBtnEl = document.querySelector('.checkout-btn');
    winLottoBoxEl = document.querySelector('.win-lotto-contents');
    resultDisplayBoxEl = document.querySelector('.result-display');
}