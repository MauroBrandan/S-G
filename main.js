var swiper = new Swiper('.mySwiper', {
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
})
