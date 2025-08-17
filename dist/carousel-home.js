"use strict";
var _a;
const carouselElement = document.getElementById('carousel-home');
const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1'),
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2'),
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3'),
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4'),
    },
    {
        position: 4,
        el: document.getElementById('carousel-item-5'),
    },
];
const options = {
    defaultPosition: 1,
    interval: 3000,
};
const instanceOptions = {
    id: 'carousel-home',
    override: true
};
const Carousel = window.Carousel || ((_a = window.Flowbite) === null || _a === void 0 ? void 0 : _a.Carousel);
if (carouselElement && Carousel) {
    const carousel = new Carousel(carouselElement, items, options, instanceOptions);
    const $prevButton = document.getElementById('data-carousel-prev');
    const $nextButton = document.getElementById('data-carousel-next');
    $prevButton.onclick = () => {
        console.log("prev");
        carousel.prev();
    };
    $nextButton.addEventListener('click', () => {
        carousel.next();
    });
}
//# sourceMappingURL=carousel-home.js.map