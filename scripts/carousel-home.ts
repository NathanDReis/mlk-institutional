let currentPosition = 0;
const linkGeralLearnMore: any = document.querySelector('#link_geral_learn_more');

const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1')!,
        titles: document.querySelectorAll('.carousel-title-1')!,
        link: '#system-cftv',
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2')!,
        titles: document.querySelectorAll('.carousel-title-2')!,
        link: '#technology',
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3')!,
        titles: document.querySelectorAll('.carousel-title-3')!,
        link: '#access-control',
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4')!,
        titles: document.querySelectorAll('.carousel-title-4')!,
        link: '#suport',
    },
    {
        position: 4,
        el: document.getElementById('carousel-item-5')!,
        titles: document.querySelectorAll('.carousel-title-5')!,
        link: '#personalization',
    },
];
linkGeralLearnMore.href = items[currentPosition].link;

const $prevButton = document.getElementById('data-carousel-prev')!;
const $nextButton = document.getElementById('data-carousel-next')!;

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

function updateCarousel() {
    items.forEach((item) => {
        item.el.classList.remove('flex');
        item.el.classList.add('hidden');
        item.titles.forEach((title) => {
            title.classList.add('hidden');
        });
    });

    items[currentPosition].el.classList.add('flex');
    items[currentPosition].el.classList.remove('hidden');
    items[currentPosition].titles.forEach((title) => {
            title.classList.remove('hidden');
        });
    linkGeralLearnMore.href = items[currentPosition].link;
}