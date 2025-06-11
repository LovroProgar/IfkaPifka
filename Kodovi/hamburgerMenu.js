const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const heroImg = document.getElementById('heroImage');
const pageTitle = document.getElementById('ifkaTitle');

const isMobile = () => window.innerWidth < 600;


hamburger.addEventListener('click', () => {
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
        heroImg.style.filter = "brightness(55%)";


        if (isMobile()) {
            pageTitle.style.filter = "brightness(100%)";
        }
    } else {
        mobileMenu.style.display = 'flex';
        heroImg.style.filter = "brightness(30%)";

        if (isMobile()) {
            pageTitle.style.filter = "brightness(50%)";
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
        mobileMenu.style.display = 'none'; 
        heroImg.style.filter = "brightness(55%)";
    }
    
    if(!isMobile() && mobileMenu.style.display === 'flex') {
            pageTitle.style.filter = "brightness(100%)";
    }

    if(isMobile()  && mobileMenu.style.display === 'flex') {
        pageTitle.style.filter = "brightness(50%)";
    }
    
});

