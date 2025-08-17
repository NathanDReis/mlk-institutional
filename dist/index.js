"use strict";
// Navigation
const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
const sections = document.querySelectorAll('article');
function removeActiveClasses() {
    navLinks.forEach(link => {
        link.classList.remove('text-blue-500', 'dark:text-blue-500');
        link.classList.add('text-gray-900', 'dark:text-white');
    });
}
function addActiveClass(targetId) {
    const activeLink = document.querySelector(`nav ul li a[href="#${targetId}"]`);
    if (!activeLink)
        return;
    activeLink.classList.remove('text-gray-900', 'dark:text-white');
    activeLink.classList.add('text-blue-500', 'dark:text-blue-500');
}
function updateActiveNavigation() {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset para ativar um pouco antes
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.pageYOffset;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });
    if (!currentSection) {
        currentSection = 'home';
    }
    removeActiveClasses();
    addActiveClass(currentSection);
}
window.addEventListener('scroll', updateActiveNavigation);
updateActiveNavigation();
// Contact
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const time = document.querySelector('#time');
const time2 = document.querySelector('#time2');
function format(num) {
    return num < 10 ? `0${num}` : `${num}`;
}
time.innerHTML = `${format(hours)}:${format(minutes)}`;
time2.innerHTML = `${format(hours)}:${format(minutes)}`;
//# sourceMappingURL=index.js.map