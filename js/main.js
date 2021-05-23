const burger = document.querySelector('.burger');
const headerBox = document.querySelector('.header__box');
const navbarList = document.querySelector('.navbar__list');
const navbarButton = document.querySelector('.navbar__button');

burger.addEventListener('click', addActive);

function addActive() {
	this.classList.toggle('_active');
	headerBox.classList.toggle('_active');
	navbarList.classList.toggle('_active');
	navbarButton.classList.toggle('_active');
}

const swiper = new Swiper ('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next-unique',
		prevEl: '.swiper-button-prev-unique',
	},
	pagination: {
		el: '.swiper-pagination-unique',
	},
});