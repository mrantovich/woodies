const burger = document.querySelector('.burger');
const wholeHTML = document.querySelector('html');
const wholeBody = document.querySelector('body');
const headerBox = document.querySelector('.header__box');
const navbarList = document.querySelector('.navbar__list');
const navbarButton = document.querySelector('.navbar__button');

burger.addEventListener('click', addActive);

function addActive() {
	this.classList.toggle('_active');
	headerBox.classList.toggle('_active');
	navbarList.classList.toggle('_active');
	navbarButton.classList.toggle('_active');
	wholeHTML.classList.toggle('_lock');
	wholeBody.classList.toggle('_lock');
};

function removeActive() {
	burger.classList.remove('_active');
	headerBox.classList.remove('_active');
	navbarList.classList.remove('_active');
	navbarButton.classList.remove('_active');
	wholeHTML.classList.remove('_lock');
	wholeBody.classList.remove('_lock');
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

const navBarLinkAbout = document.querySelector('.navbar__link-about');
navBarLinkAbout.addEventListener('click', doScrollAbout);
const aboutArea = document.getElementById('about');

const navBarLinkCustom = document.querySelector('.navbar__link-custom');
navBarLinkCustom.addEventListener('click', doScrollCustom);
const customArea = document.getElementById('custom');

const navBarLinkCategories = document.querySelector('.navbar__link-categories');
navBarLinkCategories.addEventListener('click', doScrollCategories);
const categoriesArea = document.getElementById('categories');

const navBarLinkTestimony = document.querySelector('.navbar__link-testimony');
navBarLinkTestimony.addEventListener('click', doScrollTestimony);
const testimonyArea = document.getElementById('testimony');

function doScrollAbout() {
	removeActive();
	aboutArea.scrollIntoView({
		behavior: 'smooth',
	});
};

function doScrollCustom() {
	removeActive();
	customArea.scrollIntoView({
		behavior: 'smooth',
	});
};

function doScrollCategories() {
	removeActive();
	categoriesArea.scrollIntoView({
		behavior: 'smooth',
	});
};

function doScrollTestimony() {
	removeActive();
	testimonyArea.scrollIntoView({
		behavior: 'smooth',
	});
};
