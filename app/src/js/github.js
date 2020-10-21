(function () {
    const screenSize = {
      tablet: 768,
    };
  
    const mobileMenuBtn = document.querySelector('.mobile-btn-bars');
    const headerNavigationWrapper = document.querySelector(
      '.header-nav-wrapper'
    );
    let isMobileMenuClicked = false;
  
    mobileMenuBtn.addEventListener('click', function () {
      headerNavigationWrapper.classList.toggle('hidden');
      isMobileMenuClicked = !isMobileMenuClicked;
    });
  
    if (window.innerWidth > screenSize.tablet) {
      headerNavigationWrapper.classList.remove('hidden');
    }
  
    //resize 이벤트는 document view의 크기가 변경될 때 발생
    window.addEventListener('resize', function () {
      //window.innerWidth 브라우저 윈도우의 뷰포트 너비로, 수직 스크롤바가 존재한다면 포함
      if (window.innerWidth > screenSize.tablet) {
        headerNavigationWrapper.classList.remove('hidden');
      } else {
        if (isMobileMenuClicked) {
          headerNavigationWrapper.classList.remove('hidden');
        } else {
          headerNavigationWrapper.classList.add('hidden');
        }
      }
    });
  })();
  