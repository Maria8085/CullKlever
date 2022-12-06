//= swiper.js

const initSliders1 = () => {
	const slider = new Swiper(".tmpl_hh_header_slider", {
		loop: true,
		effect: "fade",
		allowTouchMove: false,
		pagination: {
			el: ".swiper-pagination-banner",
			clickable: true,
		},
		navigation: {
			prevEl: ".tmpl_hh_arrow--prev",
			nextEl: ".tmpl_hh_arrow--next",
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	});
};

const initSliders3 = () => {
	const slider = new Swiper(".tmpl_hh_direction_slider", {
		loop: true,
		spaceBetween: 30,
		autoHeight:true,
		navigation: {
			prevEl: ".tmpl_hh_direction_arrow--prev",
			nextEl: ".tmpl_hh_direction_arrow--next",
		},
		pagination:{el: '.tmpl_hh_direction-pagination',
		type: 'bullets',
		clickable:true,},
	});
};

function DOM_HH_Ready() {
	initSliders1();
	initSliders3();

	let slider = undefined;

	let sliderInit = () => {
		slider = new Swiper('.tmpl_hh_about_slider', {
			loop: true,
			slidesPerView: "auto",
			spaceBetween: 20,
			navigation: {
				prevEl: ".tmpl_hh_about_arrow--prev",
				nextEl: ".tmpl_hh_about_arrow--next",
			},

			breakpoints: {
				699: {
					loop: true,
					slidesPerView: 1,
					spaceBetween: 0,
				},
		},
		}
	)};

	sliderInit();

	let { clientWidth } = document.body;

	const resize = () => {
			if (clientWidth !== document.body.clientWidth) {
					clientWidth = document.body.clientWidth;
					if (slider !== undefined) {
							slider.destroy();
							sliderInit();
					}
			}
	};

	window.addEventListener('resize', resize);
	resize();

	const scrollToVacancies = () => {
    const vacancyBlock = document.querySelector('.tmpl_hh_vacancy_block');
    if (vacancyBlock !== null)
        vacancyBlock.scrollIntoView({ behavior: 'smooth' });
};

	const initScrollToVacancies = () => {
			const buttons = document.querySelectorAll('.tmpl_hh_button--vacancy');

			buttons.forEach((button) =>
					button.addEventListener('click', (e) => {
							e.preventDefault();
							scrollToVacancies();
					})
			);
	};

	initScrollToVacancies();
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", DOM_HH_Ready);
} else {
	DOM_HH_Ready();
}
