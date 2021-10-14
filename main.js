let body = document.querySelector('body')
let servicesWrapper = document.querySelector('.services__cards-wrapper')
let servicesCard = document.querySelectorAll('.services__card')
let sliderWrapper = document.querySelector('.slider-wrapper')

if (body.clientWidth <= 1005) {
	servicesWrapper.classList.add('swiper', 'mySwiper')

	for (let i = 0; i < servicesCard.length; i++) {
		servicesCard[i].classList.add('swiper-slide')
	}

	sliderWrapper.classList.add('swiper-wrapper')

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
}

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

ScrollReveal().reveal('.services > h2', {
	duration: 2000,
	origin: 'right',
	distance: '-100px',
})

ScrollReveal().reveal('.contact > h2', {
	duration: 2000,
	origin: 'right',
	distance: '-100px',
})
