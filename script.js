const nav = document.querySelector('#nav');
const button2 = document.querySelector('#b2');


button.addEventListener('click', () => {
	button.classList.toggle('is-active')
	nav.classList.remove('animate__slideOutLeft')
	nav.classList.add('animate__slideInLeft')
	nav.classList.toggle('hidden')
})

b2.addEventListener('click', () => {
	b2.classList.toggle('is-active')
	button.classList.toggle('is-active')
	nav.classList.remove('animate__slideInLeft')
	nav.classList.add('animate__slideOutLeft')
	setTimeout(function() {
		nav.classList.toggle('hidden')
		b2.classList.add('is-active')
	}, 1000);
	
})
