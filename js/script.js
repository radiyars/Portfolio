
const arrow = document.querySelectorAll('.arrow')

for (i = 0; i < arrow.length; i++) {
	let subMenu = arrow[i].nextElementSibling;
	let thisArrow = arrow[i];

	arrow[i].addEventListener('click', function () {
		subMenu.classList.toggle('skill__open');
		thisArrow.classList.toggle('arrow__active');
	});
}


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const blockId = anchor.getAttribute('href')
		document.querySelector('' + blockId).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
