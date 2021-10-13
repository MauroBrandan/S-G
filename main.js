let swiper = new Swiper('.mySwiper', {
	grabCursor: true,
	effect: 'creative',
	creativeEffect: {
		prev: {
			shadow: true,
			translate: ['-120%', 0, -500],
		},
		next: {
			shadow: true,
			translate: ['120%', 0, -500],
		},
	},
	pagination: {
		el: '.swiper-pagination',
	},
})

ScrollReveal().reveal('.about-us__info-one', {
	duration: 2000,
	origin: 'bottom',
	distance: '-100px',
})

ScrollReveal().reveal('.about-us__info-two', {
	duration: 2000,
	origin: 'right',
	distance: '-100px',
})

ScrollReveal().reveal('.about-us__info-three', {
	duration: 2000,
	origin: 'top',
	distance: '-100px',
})
