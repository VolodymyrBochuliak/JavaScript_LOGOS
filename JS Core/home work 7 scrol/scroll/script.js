

const headerTitle = document.querySelector('.header__title');
const footerTitle = document.querySelector('.footer__title');
const slideLeftLine = document.querySelector('.under__line');
const slideRightImage = document.querySelector('.image__container');


const offsetHeight = document.body.offsetHeight;
const clientHeight = document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
   
    const userScroll = window.scrollY;
    const visibleAreaOnScreen = offsetHeight - clientHeight;
    const persentage = Math.round(userScroll / visibleAreaOnScreen * 100);
    
    console.log(persentage);
    // console.log(headerTitle.offsetTop);
    // console.log(slideLeftLine.offsetTop);
    
    const scrollAnimation = (position) => {
        
       position = persentage;
       
        if (position >= 10) {
            headerTitle.style.cssText = "font-size: 75px;; transition: 4s";
        } else if (position <= 30) {
            headerTitle.style.cssText = "font-size: 15px; transition: 2s";
        }

        if (position >= 30) {
            slideLeftLine.style.cssText = "width: 800px; transition: 4s";
            slideRightImage.style.cssText = "left: 40%; transition: 4s";
        } else {
            slideLeftLine.style.cssText = "width: 300px; transition: 2s";
            slideRightImage.style.cssText = "left: 70%; transition: 2s";
        }

        if (position > 45) {
            footerTitle.style.cssText = "font-size: 15px; margin-bottom: 0px; cursor: pointer; transition: 3s; ";
        } else {
            footerTitle.style.cssText = "font-size: 75px; margin-bottom: 300px; transition: 1s";
        }

        footerTitle.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        headerTitle.addEventListener('click', () => {
            window.scrollTo({ top: 1000, behavior: 'smooth' });
        });
    };

    scrollAnimation();
    
});