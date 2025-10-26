const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1400: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },
});




// FOR ANIMATION 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".animateRight").forEach((el) => observer.observe(el));
document.querySelectorAll(".animateLeft").forEach((el) => observer.observe(el));
document.querySelectorAll(".animateTop").forEach((el) => observer.observe(el));
document.querySelectorAll(".animateBot").forEach((el) => observer.observe(el));
