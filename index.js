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

