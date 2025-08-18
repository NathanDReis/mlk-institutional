const carouselElement = document.getElementById('carousel-home');

const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1')!,
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2')!,
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3')!,
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4')!,
    },
];

const options = {
    defaultPosition: 0,
    interval: 5000,
};

const instanceOptions = {
  id: 'carousel-home',
  override: true
};

const Carousel = (window as any).Carousel || (window as any).Flowbite?.Carousel;

if (carouselElement && Carousel) {
    const carousel = new Carousel(carouselElement, items, options, instanceOptions);

    const $prevButton = document.getElementById('data-carousel-prev')!;
    const $nextButton = document.getElementById('data-carousel-next')!;

    $prevButton.onclick = () => {
        carousel.prev();
    };

    $nextButton.onclick = () => {
        carousel.next();
    };
}