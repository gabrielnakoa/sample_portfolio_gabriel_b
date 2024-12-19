// hides header on scroll
let lastScrollPosition = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', function() {
    let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    lastScrollPosition = currentScrollPosition;
});


// section animator
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-section');
    } else {
      entry.target.classList.remove('show-section');
    }
  });
});

// hide sections when not in view
const hiddenSections = document.querySelectorAll('.hidden-section');
hiddenSections.forEach((section) => observer.observe(section));


// reveals menu onclick hamburger
const navMenu = document.getElementById('nav-menu');
function toggleMenu() {
    const body = document.body;

    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        hamburger.innerHTML = '&times;';
        body.classList.add('no-scroll');
      } else {
        hamburger.innerHTML = '&#9776;';
        body.classList.remove('no-scroll');
      }
}
function closeMenuOnClick() {
  if (navMenu.classList.contains('active')) {
    toggleMenu();
  }
}
// close menu after clicking a link
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', closeMenuOnClick);
});


// Scroll to top function
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

