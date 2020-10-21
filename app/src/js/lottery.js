import $ from 'jquery';

// IIFE(Immediate Invoked Function Expression)
(() => {
    //index.html에서 값을 가져올 위치, 출력할 위치를 저장하기 위해 정의함
    const inputPrice = document.querySelector('.input-price');
    const buyBtn = document.querySelector('.buy-btn');
    const myLottosBox = document.querySelector('.my-lottos');
    const compareBtn = document.querySelector('.checkout-btn');
    const winLottoBox = document.querySelector('.win-lotto-contents');
    const resultDisplayBox = document.querySelector('.result-display');

    //일치하는 숫자 갯수에 따른 prize를 각 변수에 초기화하여 객체로 만들어줌
    const winningAmount = {
      win3: 5000,
      win4: 50000,
      win5: 1500000,
      win6: 2000000000,
    };

    //로또 가격, 숫자 범위, 길이, 값을 최종적으로 넣을 배열을 정의 
    const lottoPrice = 1000;
    const lottoNumberLimit = 45;
    const lottoMaxLength = 6;
    let myLottos;

    //구매버튼클릭시 실행되는 함수들을 정의함
    buyBtn.addEventListener('click', () => {
      buyLottos(inputPrice.value);
      bindLottos(myLottosBox, myLottos);
    });

    //확인버튼클릭시 실행되는 함수를 정의함
    compareBtn.addEventListener('click', () => {
      compareLottos(myLottos);
    });

    //html에 출력하는 함수 (myLottoBox, myLottos), (winLottoBox, [winLottoNumber])
    const bindLottos = (el, lottos) => {
      el.innerHTML = lottos
        .map((lotto, i) => {
          return `
          <li class="my-lotto">${lotto
              .map((lottoNumber) => {
                return `
              <span class="lotto-number">${lottoNumber}</span>
            `;
              })
              //join()를 하지않으면 , 가 찍힌다, 빈 값으로 하기 위해 '' 
              .join('')}</li> 
        `;
        })
        //1개 이상의 로또일 경우 (lottos) 6개가 찍히고 기본값 , 을 빈값으로 바꿔주기 위해 ''
        .join('');
    };
    //입력값을 받아 함수 실행 
    const buyLottos = (inputPrice) => {
      const boughtLottoCount = Math.floor(inputPrice / lottoPrice); //구매가능 수 계산
      myLottos = createLottos(boughtLottoCount); //myLottos 에 구매가능한 수를 넣은 다중 로또함수 실행 
    };

    //0~44까지 랜덤숫자를 추출하는 함수 
    const generateRandomNumber = (max) => Math.floor(Math.random() * max);
  
    //단일 로또함수
    const createLotto = () => {
      const lotto = [];
      const numberRange = [];
  
      //45 numberRange 배열에 1~45가 들어감
      for (let i = 0; i < lottoNumberLimit; i++) {
        numberRange.push(i + 1);
      }

      //6
      for (let i = 0; i < lottoMaxLength; i++) {
        const pickedNumber = numberRange.splice( //splice(start: number, deleteCount?: number): T[];
          generateRandomNumber(numberRange.length),
          1
        )[0];
        lotto.push(pickedNumber);
      }
      return lotto;
    };
  
    const createLottos = (boughtLottoCount) => {
      const lottos = [];
      for (let i = 0; i < boughtLottoCount; i++) {
        lottos.push(createLotto());
      }
      return lottos;
    };

    //뽑아낸 로또 번호
    const compareLottos = (lottos) => {
      const winLottoNumber = createLotto();
      //winLottoNumber 는 1차원 배열인데 html에 출력되기 위해선 2차원 배열이여야하기 때문에 
      //2차원 배열로 만들어줌 
      bindLottos(winLottoBox, [winLottoNumber]);
      //Array.from(), (new Array(7)), winsTotalCount에 들어가는 배열의 값들을 0으로 초기화
      const winsTotalCount = Array.from(new Array(7)).map(() => 0);
  
      lottos.forEach((lotto, i) => {
        let wins = 0;
        lotto.forEach((lottoNumber, j) => {
          if (winLottoNumber.includes(lottoNumber)) {
            wins = wins + 1;
            const selectedLottoEl = myLottosBox.children[i]; //myLottosBox 의 children
            const selectedLottoNumberEl = selectedLottoEl.children[j]; ///myLottosBox 의 children 의 children
            selectedLottoNumberEl.classList.add('wins');
          }
        });
  
        winsTotalCount[wins] = winsTotalCount[wins] + 1;
      });
  
      displayResult(winsTotalCount);
    };
  
    const displayResult = (result) => {
      resultDisplayBox.innerHTML = `
      <i class="fa fa-asterisk"></i> 결과
      <hr>
        0개 일치 (0원)- ${result[0]}개 <br>
        1개 일치 (0원)- ${result[1]}개 <br>
        2개 일치 (0원)- ${result[2]}개 <br>
        3개 일치 (${winningAmount.win3}원)- ${result[3]}개 <br>
        4개 일치 (${winningAmount.win4}원)- ${result[4]}개 <br>
        5개 일치 (${winningAmount.win5}원)- ${result[5]}개 <br>
        6개 일치 (${winningAmount.win6}원)- ${result[6]}개 <br>
      `;
    };
  })();
  