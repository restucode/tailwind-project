

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
	if(menu.classList.contains('hidden')) {
		menu.classList.remove('hidden');
		burger.style.zIndex = '11';
		burger.style.position = 'fixed';
		burger.style.right = '0';
		burger.style.top = '0';
	} else {
		menu.classList.add('hidden');
		burger.style.zIndex = '1';
		burger.style.position = 'static';
	}
});