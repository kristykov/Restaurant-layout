const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-bg');

//btn
const prevBtn = document.querySelector('.btn-dark');
const nextBtn = document.querySelector('.btn-light');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth; 

carouselSlide.style.transform = 'translateX('+ (- size * counter) + 'px)';

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter >= carouselImages.lenght -1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX('+ (- size * counter) +'px)';
});
prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter < 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX('+ (- size * counter) +'px)';
});

carouselSlide.addEventListener('transitionend', () => {
	console.log(carouselImages[counter]);

	if(carouselImages[counter].id === 'lastClone') {
		carouselSlide.style.transition = 'none';
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = 'translateX('+ (- size * counter) + 'px)';
	}

	if(carouselImages[counter].id === 'firstClone') {
		carouselSlide.style.transition = 'none';
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = 'translateX('+ (- size * counter) + 'px)';
	}
});
