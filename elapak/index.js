const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const burgerSVG = document.querySelector('#burger-svg');

burger.addEventListener('click', () => {
	if(menu.classList.contains('hidden')) {
		menu.classList.remove('hidden');
		burgerSVG.setAttribute('fill','#ffffff');
		burger.style.transform = 'scaleX(-1)';
		burger.style.zIndex = '31';
		burger.style.position = 'fixed';
		burger.style.right = '30px';
		burger.style.top = '30px';
	} else {
		menu.classList.add('hidden');
		burgerSVG.setAttribute('fill','#766464');
		burger.style.zIndex = '1';
		burger.style.transform = 'scaleX(1)';
		burger.style.position = 'static';

	}
});

var swiper = new Swiper('.swiper-container', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});