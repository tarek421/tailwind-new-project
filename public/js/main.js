var swiper = new Swiper(".mySwiper", {
    effect: "Manipulation",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
