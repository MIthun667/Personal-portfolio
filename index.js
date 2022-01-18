// Navigation bar effects on scroll 
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


//services section - modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () =>{
        modal(i);
    });
});
modalCloseBtns.forEach((modalCloseBtn) =>{
    modalCloseBtn.addEventListener("click", () =>{
        serviceModals.forEach((modalView) =>{
            modalView.classList.remove("active");
        });
    });
});


//portfolio section model
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () =>{
        portfolioModal(i);
    });
});
portfolioCloseBtns.forEach((modalCloseBtn) =>{
    modalCloseBtn.addEventListener("click", () =>{
        portfolioModals.forEach((portfolioModalView) =>{
            portfolioModalView.classList.remove("active");
        });
    });
});
//scroll to top button 
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});
scrollTopBtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
//Navigation menu items active on page scroll 
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    })
});
//website dark/light theme
const  themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
})

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("sun");
}

// responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");


menuBtn.addEventListener("click", () =>{
    navigation.classList.add("active");
})
closeBtn.addEventListener("click", () =>{
    navigation.classList.remove("active");
})

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () =>{
        navigation.classList.remove("active");
    });
});

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay:100  
});

ScrollReveal().reveal(".home .info h2, .section-title-01, .section-title-02", {delay: 500, origin: 'left'});
ScrollReveal().reveal(".home .info h3, .home .info p, .about-info .btn", {delay: 600, origin: 'right'});
ScrollReveal().reveal(".home .info .btn", {delay: 700, origin: 'bottom'});
ScrollReveal().reveal(".media-icons i, .contact-left li ", {delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal(".home-img, .about-img, .content1 h2", {delay: 500, origin: 'bottom'});
ScrollReveal().reveal(".about .description", {delay: 600, origin: 'bottom'});
ScrollReveal().reveal(".port-container .container1 img", {delay: 600, origin: 'right'});





