const navMenu = document.getElementById(`nav__menu`);
const navToggle = document.getElementById(`nav-toggle`);
const navClose = document.getElementById(`nav-close`);

if (navToggle) {
  navToggle.addEventListener(`click`, () => {
    navMenu.classList.add(`nav-menu`);
  });
}
if (navClose) {
  navClose.addEventListener(`click`, () => {
    navMenu.classList.remove(`nav-menu`);
  });
}

const navLink = document.querySelectorAll(`.nav__link`);
const linkAction = () => {
  const navMenu = document.getElementById(`nav__menu`);
  navMenu.classList.remove(`nav-menu`);
};
navLink.forEach((element) => element.addEventListener(`click`, linkAction));

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById(`header`);

  this.scrollY >= 50
    ? header.classList.add(`blur-header`)
    : header.classList.remove(`blur-header`);
};
window.addEventListener(`scroll`, blurHeader)
/*=============== EMAIL JS ===============*/

/*=============== SHOW SCROLL UP ===============*/


const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== change Theme ===============*/

const modeToggle = document.getElementById('mode-toggle');
const root = document.documentElement;

modeToggle.addEventListener('click', () => {
  if (root.classList.contains('light-mode')) {
    // Switch to dark mode
    modeToggle.innerHTML = `<i class="ri-sun-line"></i>`
    root.classList.remove('light-mode');
  } else {
    // Switch to light mode
    modeToggle.innerHTML = `<i class="ri-moon-line"></i>`
    root.classList.add('light-mode');
  }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (sectionsClass) { // Check if sectionsClass is not null
      if (scrollDown >= sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link');
      } else {
        sectionsClass.classList.remove('active-link');
      }
    }
  });
};

// Resume Downloader
const Download = () => {
  var link = document.createElement("a");
  link.href = "./assets/Amol_Patil_Resume.pdf";
  link.download = "Amol_Patil_Resume.pdf";
  link.click();
}


const Resume = document.getElementById("resume-button-1").addEventListener("click", Download)
const Resume2 = document.getElementById("resume-button-2").addEventListener("click", Download)





window.addEventListener('scroll', scrollActive);




/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true,
})

sr.reveal(`.home__data,.home__social,.contact-info`);
sr.reveal(`.projects_content`, { origin: 'bottom', });
sr.reveal(`.home__image,.contact-form`, { origin: 'bottom', });
sr.reveal(`.about__image,.skills__content:nth-child(2)`, { origin: 'right' });

sr.reveal(`.about__data,.skills__content:nth-child(1)`, { origin: 'left' });

sr.reveal(`.about__data`, { origin: 'left' });
