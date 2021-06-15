// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

//tabs
const tabs = document.querySelector('.tabs li');
const tabContentBoxes = document.querySelector('#tab-content > div');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		tabs.forEach(item => item.classList.remove('is-active'))
	})
})