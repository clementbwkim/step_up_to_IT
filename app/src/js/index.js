import $ from 'jquery';

(() => {
  const handleLogo = () => {
    const logo = document.querySelector('.main-img-title img');
    const scrollMax = 95;
    // scaleX / 95;
    let scaleX = 3.5;
    let scaleY = 3.5;
    let translateY = 112;

    // (scaleX / window.scrollY) * 95;

    if (window.scrollY === 0) return;

    logo.style.transform = `matrix(3.5,0,0, 3.5, 0 112)`;
  };

  // ${scaleX - (scaleX / window.scrollY * scrollMax)}, 0, 0, ${scaleY -(scaleY / window.scrollY * scrollMax)}
  window.addEventListener('scroll', handleLogo);
})();
