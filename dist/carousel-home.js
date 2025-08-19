"use strict";
let currentPosition = 0;
const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1'),
        title: document.getElementById('carousel-title-1'),
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2'),
        title: document.getElementById('carousel-title-2'),
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3'),
        title: document.getElementById('carousel-title-3'),
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4'),
        title: document.getElementById('carousel-title-4'),
    },
];
const $prevButton = document.getElementById('data-carousel-prev');
const $nextButton = document.getElementById('data-carousel-next');
const $prevButtonMobile = document.getElementById('data-carousel-prev-mobile');
const $nextButtonMobile = document.getElementById('data-carousel-next-mobile');
$nextButton.onclick = () => {
    currentPosition += 1;
    if (currentPosition >= items.length) {
        currentPosition = 0;
    }
    updateCarousel();
};
$prevButton.onclick = () => {
    currentPosition -= 1;
    if (currentPosition <= -1) {
        currentPosition = items.length - 1;
    }
    updateCarousel();
};
$nextButtonMobile.onclick = () => {
    currentPosition += 1;
    if (currentPosition >= items.length) {
        currentPosition = 0;
    }
    updateCarousel();
};
$prevButtonMobile.onclick = () => {
    currentPosition -= 1;
    if (currentPosition <= -1) {
        currentPosition = items.length - 1;
    }
    updateCarousel();
};
function updateCarousel() {
    items.forEach((item) => {
        item.el.classList.remove('flex');
        item.el.classList.add('hidden');
        item.title.classList.add('hidden');
    });
    items[currentPosition].el.classList.add('flex');
    items[currentPosition].el.classList.remove('hidden');
    items[currentPosition].title.classList.remove('hidden');
}
//# sourceMappingURL=carousel-home.js.map