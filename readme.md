<p align="center">
  <img src="./app/src/img/bg.png" alt="title">                                                                                
</p>

## :heavy_check_mark: Introduction

>**Step up to IT**는 개인적으로 진행한 첫 프로젝트로 **퍼블리셔로 시작하여 개발자까지** 성장하기 위해 노력한다는 의미를 가지고 있습니다.

### - UI Design

![landing page](./app/src/img/landing_page.gif)

점차 진해지는 톤온톤 그라데이션으로 노력하는만큼 열정이 진해진다는 것을 표현하였고, 배경과 어우러지고 성장을 뜻하는 초록색을 포인트 컬러로 사용하여 전체적으로 편안한 색감을 주려고 했습니다. 또한 컨텐츠들은 최대한 한눈에 볼 수 있도록 심플하게 구성하였습니다.



## :heavy_check_mark: Demo

> :link: Project : [step up to IT](https://stepupbk.netlify.app/)

## :heavy_check_mark: Contents

|  Page Link  | Description   |
| :---------------------: | ---------------------------------------- |
| [:star: Kinfork Clone](https://stepupbk.netlify.app/kinfork.html)  | 프로젝트의 **메인 컨텐츠**로 Kinfork.com 메인 레이아웃 및 이벤트 효과 클론                                                                                                |
|   [Github Clone](https://stepupbk.netlify.app/github.html)   | github.com/explore 레이아웃 및 이벤트 효과 클론  |
| [Lottery program](https://stepupbk.netlify.app/lottery.html) | html, scss를 사용하여 UI를 구현하였고, Vanilla JS로 기능 구현하였고 금액을 입력하면 해당 갯수만큼의 번호들을 추출하고 당첨 번호와 비교하여 수익률을 알 수 있도록 제작 |

<br>

### # Main Contents Kinfork Page Description



#### :memo: Scroll Event (Logo)

![logo](./app/src/img/kinfork_logo.gif)

pageYOffset과 transform: matrix를 사용하여 스크롤 위치에 따라 로고의 크기가 변경됩니다.
정의된 scrollMax값과 scaleX, scaleY, translateY를 계산하여 위치시켜주고, 1보다 작을 경우에는 분기처리를 하여 1로 정의해줍니다.

```javascript
# 로고 이벤트 함수

function handleLogo () {
  let calcScaleX = scaleX - (scaleX / scrollMax * window.pageYOffset);
  let calcScaleY = scaleY - (scaleY / scrollMax * window.pageYOffset);
  let calcTranslateY = translateY - (translateY / scrollMax * window.pageYOffset);
  logoEl.style.transform = `matrix(${calcScaleX > 1 ? calcScaleX : 1}, 0,0,${calcScaleY  > 1 ? calcScaleY : 1},0,${calcTranslateY  > 0 ? calcTranslateY : 0})`;
}
```

<br>
<br>

#### :memo: slcik-slider.js

![](./app/src/img/slick_slider.gif)

slick-slider.js를 사용하여 슬라이드 형식을 구현하였습니다.
기본으로 생성되어 있는 버튼이 아닌 **cursor** 태그를 이용하여 mouseover 시 커서의 모양이 변경되고 클릭하는 방향으로 슬라이드 되게 커스터마이즈 하였습니다.

## :heavy_check_mark: Stack

### :memo: Skills

- HTML `HTML5`
- Experience up to ES6
- CSS preprocessor `SCSS`
- jQuery

---

### :memo: UI-libs
-  slick-slider.js

---

### :memo: Ecosystem
-  Webpack
-  Package manager `npm`
-  Version Control `git`
-  Hosting `netlify`

---

### :memo: Tools
-  Code Editor `Visual Studio code`

## :heavy_check_mark: Installation

- npm 기반으로 작업이 되었고 최초 실행 할 때 설치해야 합니다.<br>
　`npm install 또는 npm i`

- 작업을 진행하는 대로 로컬에서 실행 할 경우 반영이 됩니다.<br>
　`npm run dev` | `http://localhost:9000`

- 배포 할 때는 해당 명령어를 사용합니다.<br>
　`npm run build`

## :heavy_check_mark: License

> MIT
