// Navigation

const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
const sections = document.querySelectorAll('article');

function removeActiveClasses(): void {
    navLinks.forEach(link => {
        link.classList.remove('text-blue-500', 'dark:text-blue-500');
        link.classList.add('text-gray-900', 'dark:text-white');
    });
}

function addActiveClass(targetId: string): void {
    const activeLink = document.querySelector(`nav ul li a[href="#${targetId}"]`);
    if (!activeLink) return;

    activeLink.classList.remove('text-gray-900', 'dark:text-white');
    activeLink.classList.add('text-blue-500', 'dark:text-blue-500');
}

function updateActiveNavigation(): void {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset para ativar um pouco antes
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.pageYOffset;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.getAttribute('id')!;
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

function format(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}

time!.innerHTML = `${format(hours)}:${format(minutes)}`;